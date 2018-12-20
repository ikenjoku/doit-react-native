import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import todoReducer from './reducers/todoReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
    todoReducer,
  }), applyMiddleware(thunk, logger));

  return store;
};

export default configureStore;