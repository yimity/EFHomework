import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Button,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Modal,
  Nav,
  InputGroup,
} from 'react-bootstrap';
import './index.scss';

import { addUserFormType } from '../../types';

enum userStatus {
  'Offline',
  'Pending',
  'Active',
}
enum roles {
  'Owner',
  'Employee',
  'Investor',
}
const initAddUserForm: addUserFormType = {
  id: '',
  name: ['', ''],
  email: '',
  phone: '',
  position: ['', ''],
  country: '',
  status: 0,
  portFolio: 0,
  role: 0,
};
export const AddUserModal = (props: any) => {
  const { addUserVisible, addUserModalClose, addUser } = props.addUserProps;

  const [addUserFormState, setAddUserFormState] = useState<addUserFormType>(initAddUserForm);

  const onAddUserModalCancel = () => {
    setAddUserFormState({ ...initAddUserForm });
    addUserModalClose();
  };
  const onAddUserModalConfirm = () => {
    addUser({ ...addUserFormState, id: nanoid(), name: addUserFormState.name.join(' ') });
    setAddUserFormState({ ...initAddUserForm });
    addUserModalClose();
  };

  const onFormNameChange1 = (e: any) => {
    setAddUserFormState({ ...addUserFormState, name: [e.target.value, addUserFormState.name[1]] });
  };
  const onFormNameChange2 = (e: any) => {
    setAddUserFormState({ ...addUserFormState, name: [addUserFormState.name[0], e.target.value] });
  };
  const onFormEmailChange = (e: any) => {
    setAddUserFormState({ ...addUserFormState, email: e.target.value });
  };
  const onFormPhoneChange = (e: any) => {
    setAddUserFormState({ ...addUserFormState, phone: e.target.value });
  };
  const onFormPositionChange0 = (e: any) => {
    setAddUserFormState({
      ...addUserFormState,
      position: [e.target.value, addUserFormState.position[1]],
    });
  };
  const onFormPositionChange1 = (e: any) => {
    setAddUserFormState({
      ...addUserFormState,
      position: [addUserFormState.position[0], e.target.value],
    });
  };

  const onFormCountryChange1 = (e: any) => {
    setAddUserFormState({ ...addUserFormState, country: e.target.value });
  };
  const onFormPortFolioChange = (e: any) => {
    setAddUserFormState({ ...addUserFormState, portFolio: e.target.value - 0 });
  };

  const onFormStatusChange = (e: any) => {
    setAddUserFormState({
      ...addUserFormState,
      status: (e.target.id[e.target.id.length - 1] - 0) as 0 | 1 | 2,
    });
  };

  const onFormRoleChange = (e: any) => {
    setAddUserFormState({
      ...addUserFormState,
      role: (e.target.id[e.target.id.length - 1] - 0) as 0 | 1 | 2,
    });
  };

  return (
    <>
      <Modal show={addUserVisible} onHide={onAddUserModalCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Form className="add-user-form">
          <Modal.Body>
            <Nav variant="pills" defaultActiveKey="link-1" fill={true}>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <i className="modal-nav-link-icon"></i>
                  <span>Profile</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <i className="modal-nav-link-icon"></i>
                  <span>Billing address</span>{' '}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <i className="modal-nav-link-icon"></i>
                  <span>Change password</span>{' '}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">
                  <i className="modal-nav-link-icon"></i>
                  <span>Notifications</span>{' '}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="modal-upload-header">
              <div className="header-box"></div>
              <Button variant="outline-primary" size="sm">
                <i></i>
                <span>Primary</span>
              </Button>
            </div>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Full name
              </Form.Label>
              <Col sm={4} className="input-col-1">
                <Form.Control
                  placeholder="first name"
                  size="sm"
                  value={addUserFormState.name[0]}
                  onChange={onFormNameChange1}
                />
              </Col>
              <Col sm={5} className="input-col-2">
                <Form.Control
                  placeholder="last name"
                  size="sm"
                  value={addUserFormState.name[1]}
                  onChange={onFormNameChange2}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="xxx@xxx.com"
                  size="sm"
                  value={addUserFormState.email}
                  onChange={onFormEmailChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Phone <span style={{ color: 'gray' }}>(optional)</span>
              </Form.Label>
              <Col sm={9}>
                <InputGroup className="mb-3" size="sm">
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    value={addUserFormState.phone}
                    onChange={onFormPhoneChange}
                  />

                  <DropdownButton
                    variant="outline-secondary"
                    title="Mobile"
                    id="input-group-dropdown-1"
                    align="end"
                  >
                    <Dropdown.Item href="#">Mobile</Dropdown.Item>
                    <Dropdown.Item href="#">Phone</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Profession
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  placeholder="Profession"
                  size="sm"
                  value={addUserFormState.position[0]}
                  onChange={onFormPositionChange0}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Company
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  placeholder="Company"
                  size="sm"
                  value={addUserFormState.position[1]}
                  onChange={onFormPositionChange1}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Country
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  placeholder="Country"
                  size="sm"
                  value={addUserFormState.country}
                  onChange={onFormCountryChange1}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                PortFolio
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  placeholder="PortFolio"
                  size="sm"
                  value={addUserFormState.portFolio}
                  onChange={onFormPortFolioChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" onChange={onFormStatusChange}>
              <Form.Label column sm={3}>
                status
              </Form.Label>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={userStatus[0]}
                  name="group1"
                  type="radio"
                  id="inline-radio-0"
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={userStatus[1]}
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={userStatus[2]}
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" onChange={onFormRoleChange}>
              <Form.Label column sm={3}>
                Role
              </Form.Label>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={roles[0]}
                  name="group2"
                  type="radio"
                  id="inline-radio-0"
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={roles[1]}
                  name="group2"
                  type="radio"
                  id="inline-radio-1"
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={roles[2]}
                  name="group2"
                  type="radio"
                  id="inline-radio-2"
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={onAddUserModalCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={onAddUserModalConfirm}>
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
