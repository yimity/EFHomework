import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import ContentGrid from './ContentGrid'
import ContentHeader from './ContentHeader'
import './RightPage.scss'

export default class Main extends Component {
  render() {
    return (
      <Row className='main m-0'>
        <Col className='h-100'>
            <ContentHeader></ContentHeader>
            <ContentGrid></ContentGrid>
        </Col>            
      </Row>
    )
  }
}
