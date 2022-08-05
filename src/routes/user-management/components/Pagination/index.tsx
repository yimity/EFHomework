import * as React from 'react';
import './index.scss';
import {Pagination} from 'react-bootstrap';
export default class RightMainPage extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
        <Pagination>
            <Pagination.Item key="1" active>
              1
            </Pagination.Item>
            <Pagination.Item key="2">
              2
            </Pagination.Item>
            <Pagination.Item key="3">
              Next
            </Pagination.Item>
        </Pagination>
    );
  }
}
