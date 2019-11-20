import { get } from '../utils/http';
import * as types from './constants';

export function getMovieList(data = {}) {
  return function (dispatch, getState) {
    const headers = {};
    const url = `movies_2017.json`;
    return get(url, { headers })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: types.COMPONENTS_MOVIE_LIST_SUCCESS,
            payload: response.data || {},
          });
          return response.data;
        } else {
          throw response.data;
        }
      })
      .catch(error => {
        dispatch({
          type: types.COMPONENTS_MOVIE_LIST_FAILED,
          payload: {},
          getMovieListError: getErrorMessage(error.response),
        });
        throw error.response;
      });
  };
}
