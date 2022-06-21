import { ActionTypes, Action } from './types';
import { Notification } from '../../types';

export const setNotifications: Action<Notification[]> = payload => ({
  type: ActionTypes.SET_NOTIFICATIONS,
  payload,
});
