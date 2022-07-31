import React, { Fragment } from "react";
import { connect } from 'react-redux';
import UserInfors from "./UserInfors";
import { UserInforProps } from './UserInfor';
import WskTopBar from './WorkSpaceTopBar';
import UserDialog from  '../EditUser';
import './workspace.scss';
import { Chance } from 'chance';
import {userActionCreators,UserState} from '../../userStore';

// const defaultUsers: UserInforProps[] = [
//     { id: '1', firstName: 'Amanda', lastName: 'Harvey', mail: 'amanda@site.com', position: 'Director', department: 'Human resources', country: 'United Kingdom', status: 'Active', porifolio: 72, role: 'Employee' },
//     { id: '2', firstName: 'Anne', lastName: 'Richard', mail: 'anne@site.com', position: 'Seller', department: 'Branding products', country: 'United States', status: 'Active', porifolio: 24, role: 'Employee' },
//     { id: '3', firstName: 'Bran', lastName: 'Halligan', mail: 'bran@site.com', position: 'Director', department: 'Accounting', country: 'France', status: 'Active', porifolio: 71, role: 'Employee' },
//     { id: '4', firstName: 'Chris', lastName: 'Mathew', mail: 'chris@site.com', position: 'Developer', department: 'Moblie App', country: 'Switzerland', status: 'Pending', porifolio: 0, role: 'Employee' },
//     { id: '5', firstName: 'Clarice', lastName: 'Boone', mail: 'clarice@site.com', position: 'Seller', department: 'Branding products', country: 'United Kingdom', status: 'Active', porifolio: 37, role: 'Employee' },
//     { id: '6', firstName: 'Lewis', lastName: 'Clarke', mail: 'lewis@site.com', position: 'Co-founder', department: 'IT department', country: 'Switzerland', status: 'Pending', porifolio: 100, role: 'Owner' },
// ];


class WorkSpaceBase extends React.PureComponent<UserState & { dispatch: any }> {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(userActionCreators.getUserList(1, 10));
    }

    render() {
        const chance = new Chance();
        const {users,showUserDialog,dispatch} =this.props;
        console.log('state',this.props);
        return (
            <div className="user-workspace">
                <WskTopBar dispatch={dispatch}/>
                <UserInfors users={users} />
                {showUserDialog&&<UserDialog />}
            </div>
        );
    }
};


 const WorkSpace = connect(state=>state)(WorkSpaceBase) as React.ComponentClass<UserState>;

 export default WorkSpace;
 