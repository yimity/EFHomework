import {Link, Outlet} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'
import {UserInforProps} from './WorkSpace/UserInfor';

export const Layout = () => {
  return (
    <div className="container-fluid h-full">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="logo" href="/">
            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                 className="d-inline-block align-text-top"></img>
            Ant Design
          </a>

          <div className="d-flex justify-content-end" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-link nav-link active" aria-current="page">
                  <i className="bi bi-search"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link">
                  <i className="bi bi-question-circle"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link position-relative">
                  <i className="bi bi-bell"></i>
                  <span className="position-absolute top-0 badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link avatar">
                  <img src="https://avatars.githubusercontent.com/u/6828924?s=40&v=4" className="img-thumbnail" alt=""></img> name
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div className="container-fluid d-flex">
        <div className="sidebar">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6 className="accordion-header" id="panelsStayOpen-headingOne">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ps-2">Dashboard</span>
                </h6>
              </Accordion.Header>
              <Link to="/">
                <Accordion.Body className={'active'}>
                  <span className="ps-2">首页</span>
                </Accordion.Body>
              </Link>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <i className="bi bi-card-list"></i>
                  <span className="ps-2">订单</span>
                </h6>
              </Accordion.Header>
              <Link to="/users">
                <Accordion.Body className={'active'}>
                  <span className="ps-2">用户管理</span>
                </Accordion.Body>
              </Link>
              <Accordion.Body>
                权限管理
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="body-content">
          <Outlet></Outlet>
        </div> 
      </div>
    </div>
  );
};