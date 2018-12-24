import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from "redux-persist";
import todoReducer from './reducers/todoReducer';
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import storage from 'redux-persist/es/storage';
import rootReducer from './reducers';

const config = {
  key: 'root',
  storage,
  debug: true
};

const configureStore = () => {
  const store = createStore(
    // persistCombineReducers(config, {
    rootReducer, applyMiddleware(thunk, logger));

  // const persistor = persistStore(store);
  // return { persistor, store };
  return store;
};

export default configureStore;