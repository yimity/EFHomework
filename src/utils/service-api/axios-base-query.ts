import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ServiceResponse } from '../../types';

export const axiosBaseQuery =
  (
    axiosInstance: AxiosInstance,
    baseURL = ''
  ): BaseQueryFn<
    {
      url: string;
      requestConfig?: AxiosRequestConfig;
    },
    ServiceResponse<unknown>
  > =>
  async ({ url, requestConfig }) => {
    try {
      const result = await axiosInstance(url, {
        baseURL: requestConfig?.baseURL ?? baseURL,
        ...requestConfig,
      });

      const data = result.data as ServiceResponse<unknown>;

      return { data };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('request error: ', e);
      return {
        error: e,
      };
    }
  };
