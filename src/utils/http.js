import axios from 'axios';
import { merge } from 'lodash';

const baseURL = 'https://api.androidhive.info/json/';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

async function request(method, url, axiosConfig = {}) {
  const options = merge(
    {},
    {
      method,
      url,
      baseURL,
      headers,
    },
    axiosConfig,
  );
  return axios(options);
}

export function get(url, { params = {}, headers = {} }) {
  return request('get', url, { params, headers });
}
