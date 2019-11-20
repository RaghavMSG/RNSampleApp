import * as types from './constants';
import initialState from './initial.state';

export default function listReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.COMPONENTS_POST_LIST_SUCCESS:
      return {
        ...state,
        getPostListResponse: action.payload,
        getPostListError: '',
      };
    case types.COMPONENTS_POST_LIST_FAILED:
      return {
        ...state,
        getPostListResponse: action.payload,
        getPostListError: action.getPostListError,
      };
    default:
      return state;
  }
}
