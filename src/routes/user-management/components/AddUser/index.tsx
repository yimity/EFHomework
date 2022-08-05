import * as React from 'react';
import './index.scss';
import {
  Button, Row,
  Col,
  InputGroup,
  Form,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Pills from '../Pills';
import useRef, { useState } from 'react';
import { useDispatch } from 'react-redux';
import createUserAction, { ADDUser } from '../../redux/actions';
import UserMessage from '../UserMessage';



export default function AddUser() {
  const initUser: UserMessage = {
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    department: "",
    country: "",
    status: "",
    portfolio: 0,
    role: "",
  };

  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [newUser, setNewUser] = useState(initUser);
// 设置model组件开关
  const setTrue = () => setState(true);

  const setFalse = () => { setState(false); setNewUser(initUser); }

// 根据输入框的值修改user信息
  const onChangeFirstName = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, firstName: event.target.value }
    })
  }

  const onChangeLastName = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, lastName: event.target.value }
    })
  }

  const onChangeEmail = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, email: event.target.value }
    })
  }

  const onChangeOccupation = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, occupation: event.target.value }
    })
  }

  const onChangeDepartment = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, department: event.target.value }
    })
  }

  const onChangeCountry = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, country: event.target.value }
    })
  }

  const onChangeStatusActive = () => {
    setNewUser((data: any) => {
      return { ...data, status: "Active" }
    })
  }

  const onChangeStatusPending = () => {
    setNewUser((data: any) => {
      return { ...data, status: "Pending" }
    })
  }

  const onChangePortfolio = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, portfolio: event.target.value }
    })
  }

  const onChangeRole = (event: any) => {
    setNewUser((data: any) => {
      return { ...data, role: event.target.value }
    })
  }
  const saveUser = () => {
    setState(false);
    dispatch(createUserAction(ADDUser, newUser))
    setNewUser(initUser);
  }


  return (
    <>
      <div className="d-flex flex-row-reverse">
        <button type="button" className="btn btn-primary" onClick={setTrue} >
          Add user
        </button>
        <Modal show={state} size="lg" onHide={setFalse}>
          <Modal.Header closeButton>
            <Modal.Title>Add user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Pills />
            <br></br>
            <div id="card">
              <div className="bgimg">
                <svg
                  className="icon portrait"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3356"
                  width="70%"
                  height="70%"
                >
                  <path
                    d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                    fill="#424A60"
                    p-id="3357"
                  ></path>
                  <path
                    d="M934.523586 801.121103C922.924138 688.286897 827.603862 600.275862 711.697655 600.275862h-104.977655A24.09931 24.09931 0 0 1 582.62069 576.176552v-11.387586c0-10.292966 6.69131-19.102897 16.331034-22.722207 102.470621-38.523586 172.632276-206.636138 158.384552-325.437793C743.883034 104.500966 652.711724 14.141793 540.495448 1.588966a251.851034 251.851034 0 0 0-27.100689-1.553656l-0.847449-0.017655C375.790345-0.282483 264.827586 110.486069 264.827586 247.172414c0 106.354759 67.213241 260.502069 161.456552 295.353379 9.233655 3.407448 15.095172 12.588138 15.095172 22.439724v11.211035c0 13.312-10.78731 24.09931-24.09931 24.09931h-104.977655c-115.906207 0-211.226483 88.011034-222.825931 200.845241C181.72469 935.688828 336.525241 1024 512 1024s330.27531-88.311172 422.523586-222.878897z"
                    fill="#FBCE9D"
                    p-id="3358"
                  ></path>
                  <path
                    d="M591.307034 116.70069c65.588966 18.025931 127.346759 58.368 166.894345 111.616-0.282483-3.901793-0.406069-7.891862-0.865103-11.70538C743.883034 104.500966 652.711724 14.141793 540.495448 1.588966a251.851034 251.851034 0 0 0-27.100689-1.553656l-0.847449-0.017655c-122.173793-0.264828-223.514483 88.187586-243.78262 204.499862h0.088276c3.160276 4.449103 6.249931 8.951172 9.622068 13.24138 1.235862-1.536 2.489379-3.054345 3.760552-4.555035 35.310345-42.01931 94.296276-51.74731 144.472276-29.501793a123.586207 123.586207 0 0 0 164.599172-67.001379z"
                    fill="#6C797A"
                    p-id="3359"
                  ></path>
                  <path
                    d="M934.523586 801.121103C922.924138 688.286897 827.586207 600.275862 711.697655 600.275862H688.551724l-105.931034 105.931035h-141.24138l-52.965517-35.310345-60.539586-70.62069h-15.571862c-115.888552 0-211.226483 88.011034-222.825931 200.845241C181.72469 935.688828 336.525241 1024 512 1024s330.27531-88.311172 422.523586-222.878897z"
                    fill="#E7ECED"
                    p-id="3360"
                  ></path>
                  <path
                    d="M759.172414 960.300138c12.093793-6.69131 23.834483-13.929931 35.310345-21.53931V829.793103h-35.310345v130.507035zM264.827586 960.300138V829.793103h-35.310345v108.967725c11.475862 7.609379 23.216552 14.848 35.310345 21.53931z"
                    fill="#CCD5D6"
                    p-id="3361"
                  ></path>
                  <path
                    d="M459.034483 670.896552h105.931034v105.931034h-105.931034z"
                    fill="#38454F"
                    p-id="3362"
                  ></path>
                  <path
                    d="M440.690759 1018.950621c23.304828 3.248552 47.104 5.049379 71.309241 5.049379 24.399448 0 48.357517-1.818483 71.838897-5.12L547.310345 776.827586h-70.62069l-35.998896 242.123035z"
                    fill="#546A79"
                    p-id="3363"
                  ></path>
                  <path
                    d="M459.034483 685.02069L388.413793 600.275862h-85.733517a1.730207 1.730207 0 0 0-1.606621 2.365793L370.758621 776.827586l88.275862-58.844689V685.02069zM721.319724 600.275862H635.586207l-70.62069 84.744828v32.962207L653.241379 776.827586l69.667311-174.185931a1.712552 1.712552 0 0 0-1.588966-2.365793z"
                    fill="#FFFFFF"
                    p-id="3364"
                  ></path>
                </svg>
                <Button variant="light" className="upload-header">
                  <div className="upload-header-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-camera-fill camera"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    </svg>
                    UploadHeader
                  </div>
                </Button>
              </div>
            </div>
            <br></br>
            <form>
              <Row>
                <Col xs={4}>Full name</Col>
                <Col>
                  <InputGroup>
                    <Form.Control aria-label="First name" onChange={(event) => onChangeFirstName(event)} />
                    <Form.Control aria-label="Last name" onChange={(event) => onChangeLastName(event)} />
                  </InputGroup>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Email</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangeEmail(event)} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Occupation</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangeOccupation(event)} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Department</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangeDepartment(event)} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Country</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangeCountry(event)} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Status</Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Check type={'radio'} name="status" label={'Active'} onClick={() => onChangeStatusActive()} />
                    </Col>
                    <Col>
                      <Form.Check type={'radio'} name="status" label={'Pending'} onClick={() => onChangeStatusPending()} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Portfolio</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangePortfolio(event)} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col xs={4}>Role</Col>
                <Col>
                  <Form.Control onChange={(event) => onChangeRole(event)} />
                </Col>
              </Row>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveUser}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
