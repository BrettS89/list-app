import { ActionTypes, Action } from './types';
import { Todo } from '../../types';

export const setMyTodos: Action<Todo[]> = payload => ({
  type: ActionTypes.SET_MY_TODOS,
  payload,
});

export const setDiscoverTodos: Action<Todo[]> = payload => ({
  type: ActionTypes.SET_DISCOVER_TODOS,
  payload,
});

export const setFriendsTodos: Action<Todo[]> = payload => ({
  type: ActionTypes.SET_FRIENDS_TODOS,
  payload,
});

export const addTodo: Action<{ todo: string, navigate: () => void }> = payload => ({
  type: ActionTypes.ON_ADD_TODO,
  payload,
});

export const setCompleteTodoModalOpen: Action<{ open: boolean, todoId?: string }> = payload => ({
  type: ActionTypes.SET_COMPLETE_TODO_MODAL_OPEN,
  payload,
});

export const onFinishTodo: Action<{
  public: boolean;
  file?: Blob;
}> = payload => ({
  type: ActionTypes.ON_FINISH_TODO,
  payload
});

export const onLikeTodo: Action<string> = payload => ({
  type: ActionTypes.ON_LIKE_TODO,
  payload,
});
