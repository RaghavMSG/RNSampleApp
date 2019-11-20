import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initial.state';
import rootReducer from './reducers';

export default createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk)),
);
