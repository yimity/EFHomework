import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

export default class ContentHeader extends Component {
    render() {
        return (
            <Row className='p-2 justify-content-between header'>
                <div className="col-3 p-2 align-self-center ms-4">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item">Users</li>
                            <li className="breadcrumb-item active" aria-current="page">Overview</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-1 h-100 p-0 align-self-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Add user
                    </button>
                </div>
            </Row>
        )
    }
}
