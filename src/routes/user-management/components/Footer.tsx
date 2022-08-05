import { Component } from 'react'
import { Breadcrumb, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <div className='foot'>
        <Row>
          <Col sm={10}>
            <span className='font2'>©Front.2022 HtmlStream.</span>
          </Col>
          <Col>
            <div className='foot'>
              <Breadcrumb >
                <Breadcrumb.Item>FAQ</Breadcrumb.Item>
                <Breadcrumb.Item href="">License</Breadcrumb.Item>
                <Breadcrumb.Item active><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-command" viewBox="0 0 16 16">
                  <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z" />
                </svg></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
