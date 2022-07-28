import React from 'react';
import { useGetUsersQuery } from '../rtk';

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
    <div className="p-4" style={{ height: 1000 }}>
      <h2 className="text-lg">😊 TODO: Please implement your component here.</h2>
    </div>
  );
};

export default UserManagement;
