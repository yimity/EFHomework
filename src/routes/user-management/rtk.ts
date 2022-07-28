import { ServiceResponse, User } from '../../types';
import { serviceApi } from '../../utils/service-api';

export const userApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<
      {
        data: User[];
        total: number;
      },
      {
        pageIndex: number;
        pageSize: number;
        searchText: string;
      }
    >({
      query: ({ pageIndex, pageSize, searchText }) => ({
        url: `users?pageIndex=${pageIndex}&pageSize=${pageSize}&searchText=${searchText}`,
        method: 'GET',
      }),
      transformResponse: (response: ServiceResponse<User[]>) => {
        return response.data;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useLazyGetUsersQuery } = userApi;
