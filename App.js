/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import RouterComponent from './src/RouterComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <RouterComponent />
      </Provider>
    );
  }
}
