import { fork } from 'redux-saga/effects';

// fork all of the saga branches
export const makeRootSaga = (sagas: any) => {
  return function* rootSaga() {
    yield sagas.map((saga: any) => fork(saga));
  };
};

// inject async fork to update
export const injectSagas = (store: any, { key, sagas }: any) => {
  if (store.asyncSagas[key]) {
    return;
  }
  store.asyncSagas[key] = sagas;
  store.runSaga(makeRootSaga(sagas));
};
