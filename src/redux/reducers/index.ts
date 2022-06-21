import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { contentReducer, ContentState } from './content';
import { communicationReducer, CommunicationState } from './communication';
import { userReducer, UserState } from './user';

export interface StoreState {
  app: AppState;
  communication: CommunicationState;
  content: ContentState;
  user: UserState;
}

export const reducers = combineReducers({
  app: appReducer,
  communication: communicationReducer,
  content: contentReducer,
  user: userReducer,
});
