import React, { Fragment } from "react";
import UserInfor, { UserInforProps } from "./UserInfor";
import Tablefooter from "./TableFooter";
import './userInfors.scss';

export interface UserInforsProps {
    users: UserInforProps[];
    dispatch:any;
};

export default class UserInfors extends React.PureComponent<UserInforsProps>
{
    render() {
        const { users } = this.props;
        return (
            <div className="container-fluid text-left card user-infors-grid" style={{ height: '80%' }}>
                <div className="row bg-light lh-lg card-header grid-header" key="headers">
                    <div className="col-3 d-flex align-items-center h-col-name">
                        <div className="col-1 d-flex align-items-center">
                            <input type="checkbox" className="form-check-input" id="CheckAll" />
                        </div>
                        <div className="col-11 h-col-name-title">
                            <span>NAME</span>
                        </div>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <span>POSITION</span>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <span>COUNTRY</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span>STATUS</span>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <span>PORTFOLIO</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span>ROLE</span>
                    </div>
                    <div className="col d-flex align-items-center">

                    </div>
                </div>

                {users.map(user => <UserInfor {...user} key={user.id} />)}

                <Tablefooter />
            </div>
        );
    }
}
