import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from '../removal';
let store;
export default function configStore() {
  store = createStore(combineReducers, applyMiddleware(logger, thunk));
  return store;
}