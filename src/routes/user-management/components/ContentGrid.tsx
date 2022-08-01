import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import { User } from '../interface';
import { inLineIcons } from '../../../utils/SVGIcons';
import './RightPage.scss'

const users: User[] =
  [
    { id: 1, name: 'Amanda Harvey', email: 'amanda@site.com', photo: '', position: 'Director', department: 'Human resources', country: 'United Kingdom', status: 'Active', portfolio: 72, role: 'Employee' },
    { id: 2, name: 'Anne Richard', email: 'anne@site.com', photo: 'https://github.com/mdo.png', position: 'Seller', department: 'Branding products', country: 'United States', status: 'Active', portfolio: 24, role: 'Employee' },
    { id: 3, name: 'Bran Hooligan', email: 'bran@site.com', photo: '', position: 'Director', department: 'Accounting', country: 'France', status: 'Active', portfolio: 71, role: 'Employee' },
    { id: 4, name: 'Chris Mathew', email: 'chris@site.com', photo: '', position: 'Developer', department: 'Mobile App', country: 'Switzerland', status: 'Pending', portfolio: 0, role: 'Employee' },
    { id: 5, name: 'Clarice Boone', email: 'clarice@site.com', photo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg', position: 'Seller', department: 'Branding products', country: 'United Kingdom', status: 'Active', portfolio: 37, role: 'Employee' },
    { id: 6, name: 'Lewis Clarke', email: 'lewis@site.com', photo: '', position: 'Co-founder', department: 'IT department', country: 'Switzerland', status: 'Pending', portfolio: 100, role: 'Owner' },
  ];

const gridHeaders = [
  { name: 'NAME', colWidth: 3 },
  { name: 'POSITION', colWidth: 2 },
  { name: 'COUNTRY', colWidth: 2 },
  { name: 'STATUS', colWidth: 1 },
  { name: 'PORTFOLIO', colWidth: 2 },
  { name: 'ROLE', colWidth: 1 },
  { name: '', colWidth: 1 }
];

export default class ContentGrid extends Component {
  render() {
    return (
      <Row className='grid mx-4 border rounded shadow-sm'>
        <Col className='h-100'>
          <Row className='p-3 gridHeader justify-content-evenly'>
            {this.renderGridHeader()}
          </Row>
          <Row className='gridData p-3 justify-content-evenly overflow-auto'>
            {this.renderGridRowData()}
          </Row>
          <Row className='m-0 justify-content-evenly gridFooter'>
            {this.renderGridFooter()}
          </Row>
        </Col>
      </Row>
    )
  }

  renderGridHeader() {
    return gridHeaders.map(header => {
      return (
        <div className={`col-${header.colWidth} text-muted`}>
          {header.name === 'NAME' && <input className='gridCheckBox form-check-input' type="checkbox" value=""
            aria-label="Checkbox for following text input"></input>}
          {header.name}
          {header.name && inLineIcons.sort}
        </div>
      )
    })
  }

  renderGridRowFirstCol(user: User) {
    return (
      <div className="col-3">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-1 align-self-center p-0">
              <input className='gridCheckBox form-check-input' type="checkbox" value=""
                aria-label="Checkbox for following text input"></input>
            </div>
            <div className="col-2 me-1 align-self-center">
              {user.photo ? <img src={user.photo} alt="mdo" width="32" height="32" className="rounded-circle" /> : <div className="rounded-circle user-photo"><p className='user-logo'>{user.name.charAt(0)}</p></div>}
            </div>
            <div className="col-6 align-self-center">
              <div className="row fw-bold">
                {user.name}
              </div>
              <div className="row text-muted">
                {user.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderGridRowData() {
    return (
      <Col className='h-100'>
        {users.map(user => {
          return (
            <div className="row my-3">
              {this.renderGridRowFirstCol(user)}
              <div className="col-2">
                <div className="container">
                  <div className="col-10 align-self-center">
                    <div className="row fw-bold">
                      {user.position}
                    </div>
                    <div className="row text-muted">
                      {user.department}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 text-muted d-flex align-items-center">
                {user.country}
              </div>
              <div className="col-1 text-muted d-flex align-items-center">
                <div className="row">
                  <div className="col-1 align-self-center">
                    {user.status === 'Active' ? <div className="rounded-circle status-active"></div> : <div className="rounded-circle status-pending"></div>}
                  </div>
                  <div className="col-1 align-self-center">
                    <span>{user.status}</span>
                  </div>
                </div>
              </div>
              <div className="col-2 text-muted d-flex align-items-center">
                <div className="row d-flex align-items-center progress-row justify-content-evenly">
                  <div className="col-3 pe-0 progress-title">
                    <span>{`${user.portfolio}%`}</span>
                  </div>
                  <div className="col-9 p-0 progress-bar">
                    <div className="progress px-0" style={{ height: "5px" }}>
                      <div className="progress-bar px-0" role="progressbar" style={{ width: `${user.portfolio}%` }} aria-valuenow={user.portfolio} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 text-muted d-flex align-items-center">
                {user.role}
              </div>
              <div className="col-1 m-0 text-muted d-flex align-items-center">
                <button type="button" className="btn m-0 border border-secondary" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
                  {inLineIcons.edit}
                  <span> Edit</span>
                </button>
              </div>
            </div>
          )
        })}
      </Col>
    );
  }

  renderGridFooter() {
    return (
      <div className="row text-muted m-0 p-3 border-top" id="content-table-foot">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-2 d-flex align-items-center">
              <div className="container-fluid">
                <div className="row justify-content-start">
                  <div className="col-4">
                    <span>Showing:</span>
                  </div>
                  <div className="col-4 pe-0">
                    <span>15
                    </span>
                    {inLineIcons.dropDown}
                  </div>
                  <div className="col-4 ps-0">
                    <span>of 24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 d-flex align-items-center">
              <Row className='justify-content-end'>
                <Col className='col-3'>
                <nav aria-label="..." className='pt-3'>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <button className="page-link">Previous</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" aria-current="page">1</button>
                  </li>
                  <li className="page-item active" >
                    <button className="page-link" >2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">Next</button>
                  </li>
                </ul>
              </nav>
                </Col>
              </Row>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
