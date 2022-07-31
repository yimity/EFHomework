import React, { useState } from "react";
import { connect } from "react-redux";
import { UserInforProps } from "../WorkSpace/UserInfor";
import { UserState,userActionCreators, UserInfor } from "../../userStore";
import {Positions,Departments,Status,Roles} from '../dictionary';
import DropdownList from "../DropdownList";
import RadioGroup from "../RadioGroup";
import photoImage from './userphoto.png';
import './userEdit.scss';

type ReduxProps = UserState & {dispatch:any};


function EditDialigBase(props:ReduxProps)
{
    const { dispatch,users,editUserId} = props;
    const editUser = users.find(user=>user.id === editUserId);

    const propsUser = editUser ? {...editUser} : {};
    const [stateUser,setUser] = useState(propsUser);

    const {id, photo, firstName,lastName, mail, position, department,country, status, porifolio, role } = stateUser;

    const closeDialog = ()=>{
        dispatch(userActionCreators.showEditUser(''));
        dispatch(userActionCreators.showUserDialog(false));
    };

    const changeValueByName = (name: string, e) => {
        const newUser = { ...stateUser };
        newUser[name] = e.target.value;
        setUser(newUser);
    };

    const changeNumValueByName = (name: string, value:number) => {
        const newUser = { ...stateUser };
        newUser[name] = value;
        setUser(newUser);
    };

    const onSave = ()=>{
        dispatch(userActionCreators.editUser(stateUser as UserInfor));
        closeDialog();
    }

    return <div className="modal user-dialog" id="ShowEditUserDialog" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalLabel">{editUserId?'Edit User':'Add User'}</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeDialog}></button>
                </div>
                <div className="modal-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Billing address</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Change password</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Notifications</a>
                        </li>
                    </ul>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={photoImage} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Full name</label>
                            <div className="col-sm-10">
                                <div className="input-group">
                                    <input type="text" className="form-control" value={firstName} placeholder="firstName" aria-label="firstName" onChange={(e)=>changeValueByName('firstName',e)}/>
                                    <input type="text" className="form-control" value={lastName} placeholder="lastName" aria-label="lastName" onChange={(e)=>changeValueByName('lastName',e)} />
                                </div>
                            </div>
                            
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" value={mail} onChange={(e)=>changeValueByName('mail',e)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPosition" className="col-sm-2 col-form-label">Position</label>
                            <div className="col-sm-10">
                                {/* <input type="text" className="form-control" id="inputPosition" value={position}/> */}
                                <DropdownList key="position" items={Positions} value={position} OnSelChanged={(value)=>changeNumValueByName('position',value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputDepartment" className="col-sm-2 col-form-label">Department</label>
                            <div className="col-sm-10">
                                {/* <input type="text" className="form-control" id="inputDepartment" value={department}/> */}
                                <DropdownList key="department" items={Departments} value={department} OnSelChanged={(value)=>changeNumValueByName('department',value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputCountry" value={country}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                {/* <input type="text" className="form-control" id="inputStatus" value={status}/> */}
                                <RadioGroup key="status" groupName="status" items={Status} value={status} OnSelChanged={(value)=>changeNumValueByName('status',value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputRole" className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-10">
                                {/* <input type="text" className="form-control" id="inputRole" value={role}/> */}
                                <RadioGroup key="role" groupName="role" items={Roles} value={role} OnSelChanged={(value)=>changeNumValueByName('role',value)}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeDialog}>Cancle</button>
                    <button type="button" className="btn btn-primary" onClick={onSave}>Save changes</button>
                </div>
            </div>
        </div>
    </div>
}


const UserDialog = connect(state=>state)(EditDialigBase);
export default UserDialog;