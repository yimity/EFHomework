import { useState } from 'react'
import { Breadcrumb, Button, Row, Col, Modal } from 'react-bootstrap';
import ModalBar from './ModalBar';
import p0 from './../assets/p0.png';
import { Form, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import store from '../redux/store';
import { v4 as uuids4 } from "uuid";

const NavBar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const saveUser = () => {
    const newUser = {
      id: uuids4(),
      name1: name1,
      name2: name2,
      email: email,
      position: position,
      tel: phone,
      country: country,
      status: status,
      portfolio: portfolio,
      ROLE: 'Employee'
    }

    store.dispatch({
      type: 'ADD',
      newUser: newUser
    });

    setShow(false);
  }

  return (
    <>
      <Row style={
        {
          margin: '10px',
        }
      }>
        <Col sm={11}>
          <Breadcrumb>
            <Breadcrumb.Item href="">Pages</Breadcrumb.Item>
            <Breadcrumb.Item href="">Users</Breadcrumb.Item>
            <Breadcrumb.Item active>Overview</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col>
          <Button id='btn' variant="primary" onClick={handleShow} >Add User</Button>
        </Col>
      </Row >
      <Modal
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBar />
          <img src={p0} alt='no-find!' style={{ width: '760px' }}></img>
          <Form>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Full name</Form.Label>
              </Col>
              <Col>
                <InputGroup className=" ">
                  <Form.Control aria-label="First name" onChange={e => setName1(e.target.value)} />
                  <Form.Control aria-label="Last name" onChange={e => setName2(e.target.value)} />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control type='text' id="email" placeholder='' onChange={e => setEmail(e.target.value)} />

              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Position</Form.Label>
              </Col>
              <Col>
                <Form.Control type="position" placeholder="" onChange={e => setPosition(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Phone(optional)</Form.Label>
              </Col>
              <Col>
                <InputGroup className=" ">
                  <Form.Control aria-label="Text input with dropdown button" onChange={e => setPhone(e.target.value)} />
                  <DropdownButton
                    variant="outline-secondary"
                    title="Mobile"
                    id="input-group-dropdown-2"
                    align="end"
                  >
                    <Dropdown.Item href="#">Phone</Dropdown.Item></DropdownButton>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Country</Form.Label>
              </Col>
              <Col>
                <Form.Control type="Country" placeholder=" " onChange={e => setCountry(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Status</Form.Label>
              </Col>
              <Col>
                <Form.Control type="status" placeholder=" " onChange={e => setStatus(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Portfolio</Form.Label>
              </Col>
              <Col>
                <Form.Control type="portfolio" placeholder=" " onChange={e => setPortfolio(e.target.value)} />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveUser}>Save changes</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NavBar
