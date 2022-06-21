import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Todo } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface ContentState {
  todos: {
    discover: Todo[];
    friends: Todo[];
    mine: Todo[];
  };
  completeTodoModal: boolean;
  todoToFinishId?: string;
}

const INITIAL_STATE: ContentState = {
  todos: {
    discover: [],
    friends: [],
    mine: [],
  },
  completeTodoModal: false,
  todoToFinishId: undefined,
};

export const contentReducer: Reducer<ContentState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_MY_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          mine: payload,
        },
      };

    case ActionTypes.SET_DISCOVER_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          discover: payload,
        },
      };
    
    case ActionTypes.SET_FRIENDS_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          friends: payload,
        },
      };

    case ActionTypes.SET_COMPLETE_TODO_MODAL_OPEN:
      return {
        ...state,
        completeTodoModal: payload.open,
        todoToFinishId: payload.todoId,
      };

    default:
      return state;
  }
};
