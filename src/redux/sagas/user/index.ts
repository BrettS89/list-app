import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import {
  ActionTypes,
  setUsers,
} from '../../actions';
import { StoreState, userSelector } from '../../index';
import { Users } from '../../../types';

export default [
  getUsersWatcher,
];

function * getUsersWatcher() {
  yield takeLatest(ActionTypes.GET_USERS, getUsersHandler);
}

interface GetUsers {
  type: ActionTypes.GET_USERS;
  payload: number;
}

function * getUsersHandler({ payload }: GetUsers) {
  try {
    const user: StoreState['user'] = yield select(userSelector);

    let searchQuery: Record<string, any> = {};

    if (user.searchTerm) {
      searchQuery.$or = [
        { "profile.firstName": { $search: user.searchTerm } },
        { "profile.lastName": { $search: user.searchTerm } },
        { "profile.username": { $search: user.searchTerm } },
      ];
    }

    const fn = () => api.service('security/user').find({
      query: {
        $sort: { _id: -1 },
        $limit: 50,
        $skip: payload,
        ...searchQuery,
        $resolve: {
          avatar: true,
        },
      },
    });

    const users: Users = yield call(fn);

    const updatedUsers = [...user.list, ...users.data];

    yield put(setUsers(updatedUsers));
  } catch(e) {
    console.log(e);
  }
}
