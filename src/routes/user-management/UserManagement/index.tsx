import { Component } from 'react'
import './index.css';
import { Row } from 'react-bootstrap';
import RightMenu from './components/RightMenu';
import { RightBody } from './components/RightBody';
import RightLower from './components/RightLower';

export default class UserManagement extends Component {
    render() {
        return (
            <div>
                <Row className='h-100 w-100'>
                    <RightMenu />
                    <RightBody />
                    <RightLower />
                </Row>
            </div>
        )
    }
}