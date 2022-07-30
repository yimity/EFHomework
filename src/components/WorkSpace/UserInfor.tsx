import React, { Fragment } from "react";

import * as DIC from '../dictionary';

export interface UserInforProps {
    id: string;
    photo?: string;
    firstName: string;
    lastName: string;
    mail: string;
    position: number;
    department: number;
    country: string;
    status: number;
    porifolio: number;
    role: number;
};

interface CardInforProps{
    title:string;
    content:string;
}
class Card  extends React.PureComponent<CardInforProps>
{
    render() {
        const { title, content } = this.props;
        return (
            <Fragment>
                <div className="row">
                    <span className="fs-6 fw-bold">{title}</span>
                </div>
                <div className="row">
                    <span>{content}</span>
                </div>
            </Fragment >
        );
    }
}

export default class UserInfor extends React.PureComponent<UserInforProps>
{
    render() {
        const { id, photo, firstName, lastName, mail, position, department, country, status, porifolio, role } = this.props;
        return (
            <div className="row d-flex align-items-center row-data" id={id} key={id}>
                <div className="col-3">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-end col-name-cb">
                            <input type="checkbox" className="form-check-input" id="CheckAll" />
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <a href="#" className="d-block link-dark text-decoration-none">
                                <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40" className="rounded-circle" />
                            </a>
                        </div>
                        <div className="col-9 col-name-card">
                            <Card title={`${firstName} ${lastName}`} content={mail} />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <Card title={DIC.GetPosition(position)} content={DIC.GetDepartment(department)} />
                </div>
                <div className="col-2">
                    <span>{country}</span>
                </div>
                <div className="col">
                    <span>{DIC.GetStatus(status)}</span>
                </div>
                <div className="col-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-3 col-progress-title">
                            <span>{`${porifolio}%`}</span>
                        </div>
                        <div className="col-8 col-progress-bar">
                            <div className="progress" style={{height: "3px"}}>
                                <div className="progress-bar" role="progressbar" style={{width: `${porifolio}%`}} aria-valuenow={porifolio} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <span>{DIC.GetRole(role)}</span>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-secondary btn-sm mdi mdi-pencil edit-user-btn" data-bs-toggle="modal" data-bs-target="#ShowEditUserDialog">Edit</button>
                </div>
            </div>
        );
    }
}