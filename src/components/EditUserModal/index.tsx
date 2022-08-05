import { useState, useEffect } from 'react';
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

type editUserFormType = {
  id: string;
  name: string[];
  email: string;
  phone?: string;
  position: string[];
  country: string;
  status: 0 | 1 | 2;
  portFolio: number;
  role: 0 | 1 | 2;
};
const initEditUserForm: editUserFormType = {
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
export const EditUserModal = (props: any) => {
  const { editUserVisible, editUserModalClose, currentUser, editUser } = props.editUserProps;

  const [editUserFormState, setEditUserFormState] = useState<editUserFormType>(initEditUserForm);

  useEffect(() => {
    if (Object.keys(currentUser).length) {
      const updateUserForm = { ...currentUser, name: currentUser.name.split(' ') };
      if (updateUserForm.id !== editUserFormState.id) {
        setEditUserFormState(updateUserForm);
      }
    }
  });

  const onEditUserModalCancel = () => {
    editUserModalClose();
  };
  const onEditUserModalConfirm = () => {
    editUser({ ...editUserFormState, name: editUserFormState.name.join(' ') });
    editUserModalClose();
  };

  const onFormNameChange1 = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      name: [e.target.value, editUserFormState.name[1]],
    });
  };
  const onFormNameChange2 = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      name: [editUserFormState.name[0], e.target.value],
    });
  };
  const onFormEmailChange = (e: any) => {
    setEditUserFormState({ ...editUserFormState, email: e.target.value });
  };
  const onFormPhoneChange = (e: any) => {
    setEditUserFormState({ ...editUserFormState, phone: e.target.value });
  };
  const onFormPositionChange0 = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      position: [e.target.value, editUserFormState.position[1]],
    });
  };
  const onFormPositionChange1 = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      position: [editUserFormState.position[0], e.target.value],
    });
  };

  const onFormCountryChange1 = (e: any) => {
    setEditUserFormState({ ...editUserFormState, country: e.target.value });
  };
  const onFormPortFolioChange = (e: any) => {
    setEditUserFormState({ ...editUserFormState, portFolio: parseInt(e.target.value) });
  };

  const onFormStatusChange = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      status: parseInt(e.target.id[e.target.id.length - 1]) as 0 | 1 | 2,
    });
  };

  const onFormRoleChange = (e: any) => {
    setEditUserFormState({
      ...editUserFormState,
      role: parseInt(e.target.id[e.target.id.length - 1]) as 0 | 1 | 2,
    });
  };

  return (
    <>
      <Modal show={editUserVisible} onHide={onEditUserModalCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
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
                  value={editUserFormState.name[0]}
                  onChange={onFormNameChange1}
                />
              </Col>
              <Col sm={5} className="input-col-2">
                <Form.Control
                  placeholder="last name"
                  size="sm"
                  value={editUserFormState.name[1]}
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
                  value={editUserFormState.email}
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
                    value={editUserFormState.phone}
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
                  value={editUserFormState.position[0]}
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
                  placeholder="Position[1]"
                  size="sm"
                  value={editUserFormState.position[1]}
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
                  value={editUserFormState.country}
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
                  value={editUserFormState.portFolio}
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
                  defaultChecked={editUserFormState.status === 0}
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={userStatus[1]}
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                  defaultChecked={editUserFormState.status === 1}
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={userStatus[2]}
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                  defaultChecked={editUserFormState.status === 2}
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
                  defaultChecked={editUserFormState.role === 0}
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={roles[1]}
                  name="group2"
                  type="radio"
                  id="inline-radio-1"
                  defaultChecked={editUserFormState.role === 1}
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  inline
                  label={roles[2]}
                  name="group2"
                  type="radio"
                  id="inline-radio-2"
                  defaultChecked={editUserFormState.role === 2}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={onEditUserModalCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={onEditUserModalConfirm}>
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
