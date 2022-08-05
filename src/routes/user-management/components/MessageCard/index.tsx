import './index.scss';
import { Row, Col, ProgressBar, Button, Modal, InputGroup, Form } from 'react-bootstrap';
import MyChecks from '../MyChecks';
import portrait from '../../../../img/portrait.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../redux/selector'
import UserMessage from '../UserMessage';
import createUserAction, { DELETEUser, EDITUser } from '../../redux/actions';
import { useState } from 'react';
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
export default function MessageCard() {
  //根据store的list值渲染界面
  const UserList: Array<UserMessage> = useSelector(getUserList);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(false);

  const setTrue = (event: any, index: number) => {
    setState(true); setIndex(index); setEditUser(UserList[index]);
  }
  // 设置model组件开关
  const setFalse = () => { setState(false); setEditUser(initUser); }

  const dispatch = useDispatch();
  // 删除触发状态更改
  const onClickDelete = (index: number) => {
    dispatch(createUserAction(DELETEUser, undefined, index))
    setIndex(0);
  }
  // 更新修改的user信息
  const [editUser, setEditUser] = useState(UserList[index]);
  const onChangeFirstName = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, firstName: event.target.value }
    })
  }

  const onChangeLastName = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, lastName: event.target.value }
    })
  }

  const onChangeEmail = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, email: event.target.value }
    })
  }

  const onChangeOccupation = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, occupation: event.target.value }
    })
  }

  const onChangeDepartment = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, department: event.target.value }
    })
  }

  const onChangeCountry = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, country: event.target.value }
    })
  }

  const onChangeStatusActive = () => {
    setEditUser((data: any) => {
      return { ...data, status: "Active" }
    })
  }

  const onChangeStatusPending = () => {
    setEditUser((data: any) => {
      return { ...data, status: "Pending" }
    })
  }

  const onChangePortfolio = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, portfolio: event.target.value }
    })
  }

  const onChangeRole = (event: any) => {
    setEditUser((data: any) => {
      return { ...data, role: event.target.value }
    })
  }
  const UpdateUser = () => {
    setState(false);
    dispatch(createUserAction(EDITUser, editUser, index))
    setEditUser(initUser);
    setIndex(0);
  }

  return (
    <div className="card">
      <div className="card-header">
        <Row>
          <Col xs={3}>
            <Row>
              <Col xs={1}>
                <MyChecks />
              </Col>
              <Col>NAME</Col>
            </Row>
          </Col>
          <Col>POSITION</Col>
          <Col>COUNTRY</Col>
          <Col>STATUS</Col>
          <Col>PORTFOLIO</Col>
          <Col>ROLE</Col>
        </Row>
      </div>
      <ul className="list-group list-group-flush">
        {
          UserList.map((item, index) => {
            return (
              <li key={index} className="list-group-item list">
                <Row>
                  <Col xs={3}>
                    <Row>
                      <Col xs={1}>
                        <MyChecks />
                      </Col>
                      <Col>
                        <Row>
                          <Col xs={2}>
                            <img src={portrait} className="portrait-position"></img>
                          </Col>
                          <Col>
                            <p className="first-front">{item.firstName} {item.lastName}</p>
                            <p className="second-front">{item.email}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <p className="first-front">{item.occupation}</p>
                    <p className="second-front">{item.department}</p>
                  </Col>
                  <Col>
                    <p className="second-front">{item.country}</p>
                  </Col>
                  <Col >
                    <Row>
                      <Col xs={1}>
                        <Button variant={item.status == "Active" ? "success" : "warning"} size="sm"></Button>{' '}
                      </Col>
                      <Col>
                        <p className="second-front">{item.status == "Active" ? "Active" : "Pending"}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col xs={4}>
                        <p className="second-front">{item.portfolio}%</p>
                      </Col>
                      <Col>
                        <ProgressBar className="progress" now={item.portfolio} />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <p className="second-front">{item.role}</p>
                      </Col>
                      <Col className='my-button'>
                        <Button variant="outline-secondary" size="sm" onClick={(e) => setTrue(e, index)}>
                          Edit</Button>{' '}
                        <Button variant="outline-danger" size="sm" onClick={() => onClickDelete(index)}>DELETE</Button>{' '}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </li>

            )
          })
        }
      </ul>
      {/* 弹出修改Modal */}
      <Modal show={state} size="lg" onHide={setFalse}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col xs={4}>Full name</Col>
              <Col>
                <InputGroup>
                  <Form.Control aria-label="First name" onChange={(event) => onChangeFirstName(event)} defaultValue={UserList.length > 0 ? UserList[index].firstName : ''} />
                  <Form.Control aria-label="Last name" onChange={(event) => onChangeLastName(event)} defaultValue={UserList.length > 0 ? UserList[index].lastName : ''} />
                </InputGroup>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={4}>Email</Col>
              <Col>
                <Form.Control onChange={(event) => onChangeEmail(event)} defaultValue={UserList.length > 0 ? UserList[index].email : ''} />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={4}>Occupation</Col>
              <Col>
                <Form.Control onChange={(event) => onChangeOccupation(event)} defaultValue={UserList.length > 0 ? UserList[index].occupation : ''} />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={4}>Department</Col>
              <Col>
                <Form.Control onChange={(event) => onChangeDepartment(event)} defaultValue={UserList.length > 0 ? UserList[index].department : ''} />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={4}>Country</Col>
              <Col>
                <Form.Control onChange={(event) => onChangeCountry(event)} defaultValue={UserList.length > 0 ? UserList[index].country : ''} />
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
                <Form.Control onChange={(event) => onChangePortfolio(event)} defaultValue={UserList.length > 0 ? UserList[index].portfolio : ''} />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={4}>Role</Col>
              <Col>
                <Form.Control onChange={(event) => onChangeRole(event)} defaultValue={UserList.length > 0 ? UserList[index].role : ''} />
              </Col>
            </Row>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={UpdateUser}>Update Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}