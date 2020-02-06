/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });
};

// async reducer
export const injectReducer = (store: any, { key, reducer }: any) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return;
  }

  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    createReducer({ ...store.reducers, ...store.asyncReducers }),
  );
};

export default createReducer;
