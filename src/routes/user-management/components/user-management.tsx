import { useGetUsersQuery } from '../rtk';
import Footer from './Footer';
import ListForm from './ListForm';
import NavBar from './NavBar';
import store from '../redux/store';
import { Provider } from 'react-redux';
import React from 'react';

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

    <React.StrictMode>
      <Provider store={store}>
        <NavBar />
        <ListForm />
        <Footer />
      </Provider>
    </React.StrictMode>
  );
};

export default UserManagement;
