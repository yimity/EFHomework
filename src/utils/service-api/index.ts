import { createApi } from '@reduxjs/toolkit/dist/query/react';
import axios from 'axios';
import { axiosBaseQuery } from './axios-base-query';

const apiConfiguration = {
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(apiConfiguration);

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  tagTypes: [],
  baseQuery: axiosBaseQuery(axiosInstance, apiConfiguration.baseURL),
  endpoints: () => ({}),
});
