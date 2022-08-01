import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { UserInfos } from './ContentGrid'
import ContentHeader from './ContentHeader'
import './RightPage.scss'

export default class Main extends Component {
  render() {
    return (
      <Row className='main m-0'>
        <Col className='h-100'>
            <ContentHeader></ContentHeader>
            <UserInfos />
        </Col>            
      </Row>
    )
  }
}
