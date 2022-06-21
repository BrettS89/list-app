import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Notification } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface CommunicationState {
  notifications: Notification[];
}

const INITIAL_STATE: CommunicationState = {
  notifications: [],
};

export const communicationReducer: Reducer<CommunicationState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload,
      };

    default:
      return state;
  }
};
