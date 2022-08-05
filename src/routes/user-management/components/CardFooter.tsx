import { Component } from 'react'
import { Row, Col, Pagination } from 'react-bootstrap'

export default class CardFooter extends Component {
  render() {
    return (
      <Row>
        <Col sm={10}>
          <span className='font2'> Showing: 15 v of 24</span>
        </Col>
        <Col>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item disabled>{2}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    )
  }
}
