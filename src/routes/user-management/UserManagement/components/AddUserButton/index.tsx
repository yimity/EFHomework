import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Clock, Home, Pocket, User, UserPlus } from 'react-feather';

function AddUserModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-body border-0'>
                    <div>
                        <nav className='row nav align-content-center add-user-title-row'>
                            <a href='#' className='col nav-link text-center disabled add-user-title-col-hover'>
                                <button type='button' className='btn btn-add-user text-body'>
                                    <User />
                                    Profile
                                </button>
                            </a>
                            <a href="#" className='col nav-link text-center add-user-title-col'>
                                <button type="button" className="btn btn-add-user text-muted">
                                    <Home />
                                    Billing address
                                </button>
                            </a>
                            <a href="#" className='col nav-link text-center add-user-title-col'>
                                <button type="button" className="btn btn-add-user text-muted">
                                    <Pocket />
                                    Change password
                                </button>
                            </a>
                            <a href="#" className='col nav-link text-center add-user-title-col'>
                                <button type="button" className="btn btn-add-user text-muted">
                                    <Clock />
                                    Notifications
                                </button>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <div className='add-user-title-bg'>
                            <div className='add-user-title-img'>
                                <img src="/add-user.png" alt="..." className='rounded-circle' />
                            </div>
                        </div>
                    </div>
                    <Row>
                        <div className="container-fluid">
                            <div className="row p-2 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Full name</p>
                                </div>
                                <div className="col-10">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="First Name" aria-label="FirstName" />
                                        <input type="text" className="form-control" placeholder="Second Name" aria-label="SecondName" />
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2 my-1 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Email</p>
                                </div>
                                <div className="col-10">
                                    <input type="text" className="form-control" placeholder="sample@abc.com" aria-label="email" />
                                </div>
                            </div>
                            <div className="row p-2 my-1 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Phone</p>
                                </div>
                                <div className="col-10">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="+8612345678999" aria-label="mobile" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon">Mobile</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2 my-1 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Organization</p>
                                </div>
                                <div className="col-10">
                                    <input type="text" className="form-control" placeholder="ABC" aria-label="organization" />
                                </div>
                            </div>
                            <div className="row p-2 my-1 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Department</p>
                                </div>
                                <div className="col-10">
                                    <input type="text" className="form-control" placeholder="Your department"
                                        aria-label="department" />
                                </div>
                            </div>
                            <div className="row p-2 my-1 align-items-center">
                                <div className="col-2">
                                    <p className="text-dark">Account type</p>
                                </div>
                                <div className="col-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Individual
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Company
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onHide}>Cancel</button>
                <button type="button" className="btn btn-primary">Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default function AddUserButton() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button variant="primary" className='mt-3' onClick={() => setModalShow(true)}>
                <UserPlus />
                Add user
            </Button>
            <AddUserModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}