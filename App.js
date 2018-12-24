import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import TodoApp from "./src/component/Todo";
import Login from "./src/component/Login";
import SignUp from "./src/component/SignUp";
import Main from "./src/component/Main";
import configureStore from './src/redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Loader } from "./src/component/Loader";

// const { persistor, store } = configureStore();
const store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate persistor={persistor} loading={<Loader />}> */}
          <Main />
        {/* </PersistGate> */}
      </Provider>
    );
  }
}

