import * as React from 'react';
import './index.scss';
export default class Breadcrumb extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Users</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">
            <a href="#">Overview</a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
