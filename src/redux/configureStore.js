import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from "redux-persist";
import todoReducer from './reducers/todoReducer';
import storage from 'redux-persist/es/storage';

const config = {
  key: 'root',
  storage,
  debug: true
};

const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
    todoReducer,
  }), applyMiddleware(thunk, logger));

  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;