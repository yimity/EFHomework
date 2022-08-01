import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class RightLower extends Component {
    render() {
        return (
            <div className='right-lower'>
                <Row className='h-100'>
                    <Col xs={9}>
                        <p className='text-start fw-bold m-4'>© Front. 2022 Htmlstream</p>
                    </Col>
                    <Col xs={3} className='right-lower-right'>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb m-4'>
                                <li className='breadcrumb-item avtive'><a href="#" className='a-css'>FAQ</a></li>
                                <li className='breadcrumb-item avtive'><a href="#" className='a-css'>License</a></li>
                                <li className='breadcrumb-item avtive'><a href="#" className='a-css'>Overview</a></li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </div>
        )
    }
}
