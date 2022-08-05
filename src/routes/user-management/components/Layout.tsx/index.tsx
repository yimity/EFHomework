import * as React from 'react';
import './index.scss';
import Breadcrumb from '../Breadcrumb';
import MessageCard from '../MessageCard';
import { Row, Col } from 'react-bootstrap';
import AddUser from '../AddUser';
export default class Layout extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <Row>
          <Col xs={6}>
            <Breadcrumb />
          </Col>
          <Col xs={6}>
            <AddUser/>
          </Col>
        </Row>
        <div className="MessageCard">
          <MessageCard />
        </div>
      </div>
    );
  }
}
