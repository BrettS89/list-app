import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import {
  ActionTypes,
  setUserData,
  setMyTodos,
  setFriendsTodos,
  setDiscoverTodos,
  setNotifications,
  setUsers,
} from '../../actions';
import { StoreState } from '../../index';
import { Notifications, Todos, User, Users } from '../../../types';
import { getDataOnAuthentication } from '../utilities';

export default [
  loginWatcher,
];

function * loginWatcher() {
  yield takeLatest(ActionTypes.ON_LOGIN, loginHandler);
}

interface LoginProps {
  type: ActionTypes.ON_LOGIN,
  payload: {
    email: string;
    password: string;
    navigate(): void
  }
}

function * loginHandler({ payload }: LoginProps) {
  try {
    const loginFn = () => api
      .service('security/session')
      .create({
        email: payload.email,
        password: payload.password,
      });

    const { user, token }: { user: User, token: string } = yield call(loginFn);

    yield AsyncStorage.setItem('token', token);

    const [myTodos, feedTodos, discoverTodos, notifications, users]: [Todos, Todos, Todos, Notifications, Users] =
      yield call(() => Promise.all(getDataOnAuthentication(user._id)));
    
    yield put(setUserData(user));
    yield put(setMyTodos(myTodos.data));
    yield put(setDiscoverTodos(discoverTodos.data));
    yield put(setFriendsTodos(feedTodos.data));
    yield put(setNotifications(notifications.data));
    yield put(setUsers(users.data));
    payload.navigate();
  } catch(e) {
    console.log(e);
  }
}
