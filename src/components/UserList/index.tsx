import { useState } from 'react';

import { User, PageInfoType } from '../../types';

import {
  Card,
  Col,
  Row,
  Form,
  Pagination,
  Image,
  Badge,
  ProgressBar,
  Button,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from 'react-bootstrap';

import './index.scss';
import headSculptureImg from '../../images/headSculpture.png';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

import { EditUserModal } from '../EditUserModal/index';

const roles: string[] = ['Owner', 'Employee', 'Investor'];
const statusList = [
  ['Offline', 'secondary'],
  ['Pending', 'success'],
  ['Active', 'primary'],
];

export const UserList = (props: any) => {
  const { userList, deleteUser, editUser } = props;
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const [editUserVisible, setEditUserVisible] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    pageIndex: 1,
    pageSize: 5,
    searchText: '',
  });
  const [usersCount, setUsersCount] = useState<number>(userList.length);

  const onChangePageSize = (e: any) => {
    if (
      e.target !== null &&
      'className' in e.target &&
      e.target.className === 'dropdown-item' &&
      'innerText' in e.target
    ) {
      setPageInfo({ ...pageInfo, pageSize: parseInt(e.target.innerText) });
      e.target.parentNode.previousElementSibling.innerText = e.target.innerText;
    }
  };

  const onPaginationClick = (e: any) => {
    const eTarget = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target;

    switch (eTarget.id) {
      case 'pagination-item-0':
        if (pageInfo.pageIndex > 1) {
          setPageInfo({ ...pageInfo, pageIndex: 1 });
        }
        break;
      case 'pagination-item-1':
        if (pageInfo.pageIndex > 1) {
          setPageInfo({ ...pageInfo, pageIndex: pageInfo.pageIndex - 1 });
        }
        break;
      case 'pagination-item-2':
        break;
      case 'pagination-item-3':
        if (pageInfo.pageIndex < Math.ceil(usersCount / pageInfo.pageSize)) {
          setPageInfo({ ...pageInfo, pageIndex: pageInfo.pageIndex + 1 });
        }
        break;
      case 'pagination-item-4':
        if (pageInfo.pageIndex < Math.ceil(usersCount / pageInfo.pageSize)) {
          setPageInfo({ ...pageInfo, pageIndex: Math.ceil(usersCount / pageInfo.pageSize) });
        }
        break;
      default:
        break;
    }
  };

  const onPageJumpInputChange = (e: any) => {
    if (e.target.value - 0 !== pageInfo.pageIndex) {
      setPageInfo({ ...pageInfo, pageIndex: e.target.value - 0 });
    }
  };

  const onDeleteBtnClick = (e: any) => {
    deleteUser(e.currentTarget.parentNode.parentNode.id);
    setUsersCount(userList.length - 1);
  };
  const onEditBtnClick = (e: any) => {
    setCurrentUser(
      userList.find((user: User) => user.id === e.currentTarget.parentNode.parentNode.id)
    );
    setEditUserVisible(true);
  };
  const editUserModalClose = () => {
    setEditUserVisible(false);
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col className="form-check">
            <Form.Check aria-label="option 1" />
          </Col>
          <Col xs={2}>NAME</Col>
          <Col xs={2}>POSITION</Col>
          <Col>COUNTRY</Col>
          <Col>STATUS</Col>
          <Col xs={2}>PORTFOLIO</Col>
          <Col>ROLE</Col>
          <Col>OPERATE</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {userList.length
          ? userList
              .slice(
                (pageInfo.pageIndex - 1) * pageInfo.pageSize,
                pageInfo.pageIndex * pageInfo.pageSize
              )
              .map((user: User) => {
                return (
                  <Row key={user.id} id={user.id}>
                    <Col className="form-check">
                      <Form.Check type="checkbox" />
                    </Col>
                    <Col xs={2}>
                      <Image src={headSculptureImg} roundedCircle={true} />
                      <div className="ms-2 me-auto row-double-words-2">
                        <div className="fw-bold">{user.name}</div>
                        {user.email}
                      </div>
                    </Col>
                    <Col xs={2}>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{user.position[0]}</div>
                        {user.position[1]}
                      </div>
                    </Col>
                    <Col>{user.country}</Col>
                    <Col>
                      <Badge bg={statusList[user.status][1]} pill={true}>
                        {' '}
                      </Badge>
                      {statusList[user.status][0]}
                    </Col>
                    <Col xs={2}>
                      {user.portFolio}%
                      <ProgressBar
                        now={user.portFolio}
                        label={`${user.portFolio}%`}
                        visuallyHidden={true}
                      />
                    </Col>
                    <Col>{roles[user.role]}</Col>
                    <Col>
                      <Button variant="secondary" size="sm" onClick={onEditBtnClick}>
                        <img src={editImg} alt="" />
                      </Button>
                      <Button variant="danger" size="sm" onClick={onDeleteBtnClick}>
                        <img src={deleteImg} alt="" />
                      </Button>
                    </Col>
                  </Row>
                );
              })
          : ''}
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="pagination-left">
          <DropdownButton
            as={ButtonGroup}
            size="sm"
            variant="secondary"
            title="5"
            onClick={onChangePageSize}
          >
            {[1, 3, 5, 10].map((item) => {
              return (
                <Dropdown.Item eventKey={item} key={item}>
                  {item}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          条 / 页<span style={{ marginLeft: '10px' }}>第 {pageInfo.pageIndex} 页</span>
          <span style={{ marginLeft: '10px' }}>
            {' '}
            共 {Math.ceil(usersCount / pageInfo.pageSize)} 页 {usersCount} 条
          </span>
        </div>
        <Pagination onClick={onPaginationClick}>
          <Pagination.First id="pagination-item-0" />
          <Pagination.Prev id="pagination-item-1" />
          <Pagination.Item id="pagination-item-2">
            <input
              id="pagination-item-input"
              value={pageInfo.pageIndex}
              onChange={onPageJumpInputChange}
              type="number"
              min={1}
              max={Math.ceil(usersCount / pageInfo.pageSize)}
            />
          </Pagination.Item>
          <Pagination.Next id="pagination-item-3" />
          <Pagination.Last id="pagination-item-4" />
        </Pagination>
      </Card.Footer>
      <EditUserModal
        editUserProps={{ editUserVisible, editUserModalClose, currentUser, editUser }}
      />
    </Card>
  );
};
