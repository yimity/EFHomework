import * as React from 'react';
import './index.scss';
import { Nav } from 'react-bootstrap';
export default class Pills extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <Nav variant="pills" defaultActiveKey="link-0">
        <Nav.Item className='navBar'>
          <Nav.Link eventKey="link-0" >Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navBar'>
          <Nav.Link eventKey="link-1">Billing address</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navBar'>
          <Nav.Link eventKey="link-2">Change password</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navBar'>
          <Nav.Link eventKey="link-3">Notifications</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
