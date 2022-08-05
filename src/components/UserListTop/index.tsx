import { useState } from 'react';

import { AddUserModal } from '../AddUserModal/index';

import { Breadcrumb, Button } from 'react-bootstrap';

import './index.scss';

export const UserListTop = (props: any) => {
  const { addUser } = props;
  const [addUserVisible, setAddUserVisible] = useState<boolean>(false);

  const addUserModalOpen = () => {
    setAddUserVisible(true);
  };
  const addUserModalClose = () => {
    setAddUserVisible(false);
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Users</Breadcrumb.Item>
        <Breadcrumb.Item active>Overview</Breadcrumb.Item>
        <Button variant="primary" onClick={addUserModalOpen}>
          Add user
        </Button>
      </Breadcrumb>
      <AddUserModal addUserProps={{ addUserVisible, addUserModalClose, addUser }} />
    </>
  );
};
