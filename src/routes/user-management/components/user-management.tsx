import React from 'react';
import { Col } from 'react-bootstrap';
import { useGetUsersQuery } from '../rtk';
import EditUserPage from './EditUserPage';
import Footer from './Footer';
import Main from './Main';

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
    <div className="p-4 h-100">
        <Col className='h-100 p-0'>
          <Main></Main>
          <Footer></Footer>
          <EditUserPage></EditUserPage>          
        </Col>
    </div>
  );
};

export default UserManagement;
