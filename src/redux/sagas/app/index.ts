import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import {
  ActionTypes,
  setAppInitialized,
  setUserData,
  setMyTodos,
  setFriendsTodos,
  setDiscoverTodos,
  setNotifications,
  setUsers,
} from '../../actions';
import { StoreState } from '../../index';
import { Notifications, User, Users, Todos } from '../../../types';
import { getDataOnAuthentication } from '../utilities';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(ActionTypes.ON_APP_LOAD, appLoadHandler);
}

interface AppLoad {
  type: ActionTypes.ON_APP_LOAD;
  payload: {
    navigate(str: string): void;
  }
}

function * appLoadHandler({ payload }: AppLoad) {
  try {
    const token: string = yield AsyncStorage.getItem('token');

    if (!token) {
      throw new Error('No token');
    }

    const getUser = () => api.service('security/session').find();

    const user: User = yield call(getUser);

    const [myTodos, feedTodos, discoverTodos, notifications, users]: [Todos, Todos, Todos, Notifications, Users] =
      yield call(() => Promise.all(getDataOnAuthentication(user._id)));

    yield put(setUserData(user));
    yield put(setMyTodos(myTodos.data));
    yield put(setDiscoverTodos(discoverTodos.data));
    yield put(setFriendsTodos(feedTodos.data));
    yield put(setNotifications(notifications.data));
    yield put(setUsers(users.data));

    payload.navigate('Home');
  } catch(e) {
    console.log(e);
    payload.navigate('Landing');
  }

  yield put(setAppInitialized(true));
}
