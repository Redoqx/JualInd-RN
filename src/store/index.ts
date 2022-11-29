import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {applyInterceptors} from './axios';
import * as reducers from './reducers';

const rootReducers = combineReducers(reducers);
const composeEnhancers =
  // @ts-ignore
  (typeof window === 'object' &&
    // @ts-ignore
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMpose__) ||
  compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk)),
);

applyInterceptors(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducers>;

export default store;
