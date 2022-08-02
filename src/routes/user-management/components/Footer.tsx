import React, { Component } from 'react'
import { Row, Col, Nav } from 'react-bootstrap'
import { headFooterIcons } from '../../../utils/SVGIcons'
import './RightPage.scss'

export default class Footer extends Component {
    render() {
        return (
            <Row className='justify-content-between footer mx-3 text-muted'>
                <Col className='col-2 align-self-center ps-4'>
                    <span className='ps-1 m-0'>@Front.2022 Htmlstream.</span>
                </Col>
                <Col className='col-2 align-self-center'>     
                    <Nav aria-label='breadcrumb'>
                        <ol className="breadcrumb justify-content-end foot-corner-left">
                        </ol> 
                        <ol className="breadcrumb justify-content-end foot-corner-right">
                            <li className="breadcrumb-item">FAQ</li>
                            <li className="breadcrumb-item">License</li>
                            <li className="breadcrumb-item">{headFooterIcons.footerIcon}</li>
                        </ol>
                    </Nav>
                </Col>
            </Row>
        )
    }
}
