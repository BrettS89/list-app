import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { User } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface UserState {
  details?: User;
  list: User[];
  searchTerm: string;
}

const INITIAL_STATE: UserState = {
  list: [],
  searchTerm: '',
};

export const userReducer: Reducer<UserState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        details: payload,
      };

    case ActionTypes.SET_USERS:
      return {
        ...state,
        list: payload,
      };

    case ActionTypes.SET_USER_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      }
      
    default:
      return state;
  }
};
