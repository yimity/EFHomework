import { Breadcrumb } from 'react-bootstrap';

import './index.scss';

export const UserListBottom = () => {
  return (
    <div className="content-bottom-box">
      <div className="content-bottom">
        <div className="content-bottom-left">@ Front.2022 Htmlstream.</div>
        <Breadcrumb className="content-bottom-right">
          <Breadcrumb.Item href="#">FAQ</Breadcrumb.Item>
          <Breadcrumb.Item href="#">License</Breadcrumb.Item>
          <Breadcrumb.Item active>#</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};
