import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import {
  ActionTypes,
  setCompleteTodoModalOpen,
  setDiscoverTodos,
  setFriendsTodos,
  setMyTodos,
} from '../../actions';
import { StoreState, userSelector, contentSelector } from '../../index';
import { Todo } from '../../../types';

export default [
  addTodoWatcher,
  finishTodo,
  likeTodoWatcher,
];

function * addTodoWatcher() {
  yield takeLatest(ActionTypes.ON_ADD_TODO, addTodoHandler);
}

function * finishTodo() {
  yield takeLatest(ActionTypes.ON_FINISH_TODO, finishTodoHandler);
}

function * likeTodoWatcher() {
  yield takeLatest(ActionTypes.ON_LIKE_TODO, likeTodoHandler);
}

interface AddTodoProps {
  type: ActionTypes.ON_ADD_TODO,
  payload: {
    todo: string;
    navigate(): void
  }
}

function * addTodoHandler({ payload }: AddTodoProps) {
  try {
    const userState: StoreState['user'] = yield select(userSelector);
    const contentState: StoreState['content'] = yield select(contentSelector);

    const myTodosClone = _cloneDeep(contentState.todos.mine);

    const addTodo = () => api
      .service('content/to-do')
      .create({
        userId: userState.details?._id,
        body: payload.todo,
      });

    const createdTodo: Todo = yield call(addTodo);

    const updatedMyTodos = [createdTodo, ...myTodosClone];

    yield put(setMyTodos(updatedMyTodos));

    payload.navigate();
  } catch(e) {
    console.log(e);
  }
}

interface FinishTodoProps {
  type: ActionTypes.ON_FINISH_TODO,
  payload: {
    public: boolean;
    file: Blob;
  }
}

function * finishTodoHandler({ payload }: FinishTodoProps) {
  try {
    const contentState: StoreState['content'] = yield select(contentSelector);

    const myTodosClone = _cloneDeep(contentState.todos.mine);
    const discoverTodosClone = _cloneDeep(contentState.todos.discover);

    const completeTodo = () => api
      .service('content/to-do')
      .patch(
        contentState.todoToFinishId,
        {
          completed: true,
          public: payload.public,
        },
        {
          query: {
            $resolve: {
              likes: true,
              comments: true,
              file: true,
              user: true,
            },
          },
        },
      );

    const completedTodo: Todo = yield call(completeTodo);

    const updatedMyTodosState = myTodosClone.filter(t => t._id !== completedTodo._id);

    const updatedDiscoverTodosState = completedTodo.public
      ? [completedTodo, ...discoverTodosClone]
      : discoverTodosClone;

    yield put(setMyTodos(updatedMyTodosState));
    yield put(setDiscoverTodos(updatedDiscoverTodosState));
    yield put(setCompleteTodoModalOpen({ open: false }));
  } catch(e) {

  }
}

interface LikeTodoProps {
  type: ActionTypes.ON_LIKE_TODO,
  payload: string;
}

function * likeTodoHandler({ payload }: LikeTodoProps) {
  try {
    const user: StoreState['user'] = yield select(userSelector);
    const content: StoreState['content'] = yield select(contentSelector);

    const discoverClone = _cloneDeep(content.todos.discover);
    const feedClone = _cloneDeep(content.todos.friends);

    const likeTodoFn = () => api
      .service('content/like')
      .create({
        userId: user.details?._id,
        todoId: payload,
      });

    yield call(likeTodoFn);

    const updatedDiscover = discoverClone.map(todo => {
      return todo._id === payload
        ? { ...todo, youLiked: true }
        : todo;
    });

    const updatedFeed = feedClone.map(todo => {
      return todo._id === payload
        ? { ...todo, youLiked: true }
        : todo;
    });

    yield put(setDiscoverTodos(updatedDiscover));
    yield put(setFriendsTodos(updatedFeed));
  } catch(e) {

  }
}