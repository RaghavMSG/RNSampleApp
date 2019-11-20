import {combineReducers} from 'redux';
import appReducer from './app.reducers';
import listReducer from '../components/reducer';

const combinedReducers = combineReducers({
  appReducer,
  listReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
