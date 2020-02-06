import { pushRoute, replaceRoute } from '../utils/location';
import { createReducer, injectReducer } from './reducers';
import { makeRootSaga, injectSagas } from './sagas';
import createStore from './createStore';

export default createStore;
export {
  pushRoute,
  replaceRoute,
  injectReducer,
  injectSagas,
  createReducer,
  makeRootSaga,
};
