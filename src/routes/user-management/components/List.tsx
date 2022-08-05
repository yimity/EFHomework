/* eslint-disable react/prop-types */
import { Form, ProgressBar, Button } from 'react-bootstrap'
import store from '../redux/store';

import { useState } from 'react'
import { Row, Col, Modal } from 'react-bootstrap';
import ModalBar from './ModalBar';
import p0 from './../assets/p0.png';
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { getUserList } from '../redux/selector';
import { useSelector } from 'react-redux';

const List = ({ item }) => {
  const array = useSelector(getUserList);

  const remove = (removeId: any) => {
    store.dispatch({
      type: 'REMOVE',
      newUser: removeId
    });
  }
  const editSave = () => {

    const newUser = {
      id: id,
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
      type: 'Edit',
      newUser: newUser
    })
    handleClose();
  }
  const edit = (id: any) => {
    handleShow();
    setId(id);

    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        setName1(array[i].name1);
        setName2(array[i].name2);
        setEmail(array[i].email);
        setPosition(array[i].position);
        setPhone(array[i].tel);
        setCountry(array[i].country);
        setStatus(array[i].status);
        setPortfolio(array[i].portfolio);
      }
    }
  }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState('');

  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [portfolio, setPortfolio] = useState('');



  return (
    <>
      <tr>
        <td>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label='' />
          </Form.Group>
        </td>
        <td>
          <span  >{item.name1}  {item.name2}<br /></span>
          <div>{item.email}</div>

        </td>
        <td>
          {item.position}<br />
          {item.tel}
        </td>
        <td> {item.country}</td>
        <td> <Button variant="success"></Button>
          {item.status}
        </td>

        <td> <ProgressBar now={item.portfolio} label={`${item.portfolio}%`} /></td>
        <td>Employee</td>
        <td>
          <Button variant="light" id={item.id} onClick={e => edit(e.target.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            Edit
          </Button>

          <Button variant="light" id={item.id} onClick={e => remove(e.target.id)}>
            DELETE
          </Button>
        </td>
      </tr>

      <Modal
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Edit user</Modal.Title>
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
                  <Form.Control aria-label="First name" defaultValue={name1} onChange={e => setName1(e.target.value)} />
                  <Form.Control aria-label="Last name" defaultValue={name2} onChange={e => setName2(e.target.value)} />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control type='text' id="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />

              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Position</Form.Label>
              </Col>
              <Col>
                <Form.Control type="position" defaultValue={position} onChange={e => setPosition(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Phone(optional)</Form.Label>
              </Col>
              <Col>
                <InputGroup className=" ">
                  <Form.Control aria-label="Text input with dropdown button" defaultValue={phone} onChange={e => setPhone(e.target.value)} />
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
                <Form.Control type="Country" defaultValue={country} onChange={e => setCountry(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Status</Form.Label>
              </Col>
              <Col>
                <Form.Control type="status" defaultValue={status} onChange={e => setStatus(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col xs={2} style={{ padding: '10px' }}>
                <Form.Label>Portfolio</Form.Label>
              </Col>
              <Col>
                <Form.Control type="portfolio" defaultValue={portfolio} onChange={e => setPortfolio(e.target.value)} />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={id} onClick={editSave}>Edit changes</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default List
