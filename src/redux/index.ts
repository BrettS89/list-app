import { legacy_createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers, StoreState } from './reducers';
import { sagas } from './sagas';

export * from './reducers';
export * from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = () => {
  const middlewares = [
    sagaMiddleware,
  ];

  const store = legacy_createStore(
    reducers,
    compose(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default store;

// SELECTORS
export const appSelector = (state: StoreState) => state.app;
export const communicationSelector = (state: StoreState) => state.communication;
export const contentSelector = (state: StoreState) => state.content;
export const userSelector = (state: StoreState) => state.user;
