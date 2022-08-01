import React from 'react';
import { Col } from 'react-bootstrap';
import EditUserPage from './EditUserPage';
import Footer from './Footer';
import Main from './Main';

type UserManagementProps = {
  id?: string;
};

const UserManagement = (props: UserManagementProps): JSX.Element => {
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
