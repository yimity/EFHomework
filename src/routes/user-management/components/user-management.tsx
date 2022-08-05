import React from 'react';
import { useGetUsersQuery } from '../rtk';
import Layout from './Layout.tsx';
import { Provider } from 'react-redux';
import store from '../redux/index'

type UserManagementProps = {
  id?: string;
};

const UserManagement = (props: UserManagementProps): JSX.Element => {
  const { data: users } = useGetUsersQuery({
    pageIndex: 1,
    pageSize: 50,
    searchText: '',
  });
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default UserManagement;
