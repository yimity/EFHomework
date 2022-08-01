import { Component } from 'react'

export default class EditUserPage extends Component {
  render() {
    return (
        <div className="modal modal-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable border-0">
            <div className="modal-content border-0">
                <div className="modal-header border-0">
                    <h5 className="modal-title" id="staticBackdropLabel">Edit User</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body border-0">
                    <div className="container-fluid">
                        <div className="row mx-2 rounded">
                            <nav className="nav nav-pills nav-justified bg-light rounded p-1">
                                <button className="nav-link active rounded bg-white text-dark" aria-current="page">Profile</button>
                                <button className="nav-link rounded text-dark">Billing address</button>
                                <button className="nav-link rounded text-dark">Change password</button>
                                <button className="nav-link rounded text-dark">Notification</button>
                            </nav>
                        </div>
                        <div className="row">
                            <img src="./image/image2.png" alt=''/>
                        </div>
                        <div className="row">
                            <div className="container-fluid">
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Full name</p>
                                    </div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="First Name"
                                                aria-label="FirstName"/>
                                            <input type="text" className="form-control" placeholder="Second Name"
                                                aria-label="SecondName"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Email</p>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="sample@abc.com"
                                            aria-label="email"/>
                                    </div>
                                </div>
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Phone</p>
                                    </div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="+8613456789876"
                                                aria-label="mobile" aria-describedby="basic-addon2"/>
                                            <span className="input-group-text" id="basic-addon">Mobile</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Organization</p>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="ABC"
                                            aria-label="organization"/>
                                    </div>
                                </div>
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Department</p>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="Your department"
                                            aria-label="department"/>
                                    </div>
                                </div>
                                <div className="row p-2 my-2">
                                    <div className="col-4">
                                        <p className="text-dark">Account type</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label" htmlFor='flexRadioDefault1'>
                                              Individual
                                            </label>
                                          </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label className="form-check-label" htmlFor='flexRadioDefault2'>
                                              Company
                                            </label>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="modal-footer border-0">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
