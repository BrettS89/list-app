import { ActionTypes, Action } from './types';
import { User } from '../../types';

export const setUserData: Action<User> = (payload) => ({
  type: ActionTypes.SET_USER_DATA,
  payload,
});

export const onLoginAction: Action<{ email: string, password: string, navigate: () => void }> = (payload) => ({
  type: ActionTypes.ON_LOGIN,
  payload,
});

export const setUsers: Action<User[]> = payload => ({
  type: ActionTypes.SET_USERS,
  payload,
});

export const getUsers: Action<number | undefined> = payload => ({
  type: ActionTypes.GET_USERS,
  payload: payload || 0
});

export const setUserSearchTerm: Action<string> = payload => ({
  type: ActionTypes.SET_USER_SEARCH_TERM,
  payload,
});
