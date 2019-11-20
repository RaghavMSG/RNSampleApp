import * as types from './constants';
import initialState from './initial.state';
import {ActionConst} from 'react-native-router-flux';
import * as Types from './constants';

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
