import React from "react";
import { UserInforProps } from "../WorkSpace/UserInfor";
import photoImage from './userphoto.png';


export default class EditUser extends React.PureComponent<UserInforProps>
{
    render()
    {
        const { id, photo, firstName,lastName, mail, position, department,country, status, porifolio, role } = this.props;
        return <div className="modal modal-lg fade" id="ShowEditUserDialog" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Edit User</h6>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <input type="text" className="form-control" value={firstName} placeholder="firstName" aria-label="firstName" />
                                        <input type="text" className="form-control" value={lastName} placeholder="lastName" aria-label="lastName" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" value={mail}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPosition" className="col-sm-2 col-form-label">Position</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputPosition" value={position}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputDepartment" className="col-sm-2 col-form-label">Department</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputDepartment" value={department}/>
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
                                    <input type="text" className="form-control" id="inputStatus" value={status}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputRole" className="col-sm-2 col-form-label">Role</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputRole" value={role}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    }
}