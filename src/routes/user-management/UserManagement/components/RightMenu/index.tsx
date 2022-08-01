import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddUserButton from '../AddUserButton';

export default class RightMenu extends Component {
    render() {
        return (
            <div className='right-menu'>
                <Row className='h-100 text-center'>
                    <Col xs={10}>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb m-4'>
                                <li className='breadcrumb-item'><a className='a-css' href="#">Pages</a></li>
                                <li className='breadcrumb-item'><a className='a-css' href="#">Users</a></li>
                                <li className='breadcrumb-item active'><a className='a-css' href="#">Overview</a></li>
                            </ol>
                        </nav>
                    </Col>
                    <Col xs={2} className='ps-5'>
                        <AddUserButton />
                    </Col>
                </Row>
            </div>
        )
    }
}
