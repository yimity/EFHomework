import { connect } from 'react-redux';
import { deleteUser, addUser, editUser } from '../../redux/userListAction';

import { UserListTop } from '../UserListTop/index';
import { UserListBottom } from '../UserListBottom/index';
import { UserList } from '../UserList/index';

import './UserListBox.scss';

const UserListBox = (props: any): JSX.Element => {
  const { userList, deleteUser, addUser, editUser } = props;

  return (
    <div className="content-main">
      <UserListTop addUser={addUser} />
      <UserList userList={userList} deleteUser={deleteUser} editUser={editUser} />
      <UserListBottom />
    </div>
  );
};

export default connect<any, any, any, any>((state) => ({ userList: state.userList }), {
  deleteUser,
  addUser,
  editUser,
})(UserListBox);
