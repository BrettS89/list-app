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
