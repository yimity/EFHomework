import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ChevronDown, Edit3 } from 'react-feather'
import { connect } from 'react-redux'
import { actionCreators, sagaActions, User, UserManagementState } from '../../store'
import { EditUserModal } from '../EditUserModal'

interface ConnectedProps {
    users: User[],
    total: number;
    dispatch?: any;
}

interface RightBodyState {
    currentPageIndex: number,
}

class RightBodyBase extends Component<ConnectedProps> {

    state: RightBodyState = {
        currentPageIndex: 1,
    }

    constructor(props: ConnectedProps) {
        super(props);
        const { dispatch } = props;
        dispatch(sagaActions.getUserInfo(1));
    }

    onClickPrev = () => {
        const { dispatch } = this.props;
        const { currentPageIndex } = this.state;
        if (currentPageIndex === 1) {
            return;
        }
        else {
            dispatch(sagaActions.getUserInfo(currentPageIndex - 1));
            this.setState({ currentPageIndex: currentPageIndex - 1 });
        }
    }

    onClickNext = () => {
        const { total, dispatch } = this.props;
        const { currentPageIndex } = this.state;
        if (total / 8 <= currentPageIndex) {
            return;
        }
        else {
            dispatch(sagaActions.getUserInfo(currentPageIndex + 1));
            this.setState({ currentPageIndex: currentPageIndex + 1 });
        }
    }

    editUser = (userId: string) => {
        return () => {
            const { dispatch } = this.props;
            dispatch(actionCreators.updateCurrentUser(userId));
            dispatch(actionCreators.updateShowEditUserModal(true));
        }
    }

    render() {
        const { users, total } = this.props;
        const { currentPageIndex } = this.state;
        return (
            <div className='right-body'>
                <div className='row h-100 h-auto right-body-title'>
                    <Col xs={3}><div className='from-check d-inline-block'><input type="checkbox" className='from-check-input' /></div><p className='d-inline-block'>NAME</p><ChevronDown /></Col>
                    <Col xs={2}><p className='d-inline-block'>POSITION</p><ChevronDown /></Col>
                    <Col xs={2}><p className='d-inline-block'>COUNTRY</p><ChevronDown /></Col>
                    <Col xs={1}><p className='d-inline-block'>STATUS</p><ChevronDown /></Col>
                    <Col xs={2}><p className='d-inline-block'>PORTFOLIO</p><ChevronDown /></Col>
                    <Col xs={2}><p className='d-inline-block'>ROLE</p><ChevronDown /></Col>
                </div>
                <div>
                    <div className='mt-3 right-body-body'>
                        {users.map((user) => {
                            return <Row key={user.id} className='h-100 h-auto body-info'>
                                <Col xs={3} className='d-flex align-items-center'>
                                    <div className='from-check d-inline-block'><input className='from-check-input' type="checkbox" /></div>
                                    <div className='rounded-circle fw-bold body-photo'>{user.name[0]}</div>
                                    <div className='d-inline-block'><p className='fw-bold m-0'>{user.name}</p><p className='m-0 lh-1'>{user.email}</p></div>
                                </Col>
                                <Col xs={2}>
                                    <p className='fw-bold m-0'>{user.position}</p>
                                    <p className='m-0 lh-1'>{user.positionTitle}</p>
                                </Col>
                                <Col xs={2} className='d-flex align-items-center'>
                                    <p className='m-0 lh-1'>{user.country}</p>
                                </Col>
                                <Col xs={1} className='d-flex align-items-center'>
                                    <div className={'point-' + user.status + ' d-inline-block'} />
                                    <p className='m-0 lh-1 d-inline-block'>{user.status}</p>
                                </Col>
                                <Col xs={2}>
                                    <p className='m-0 lh-1 d-inline-block'>{user.portfolio + '%'}</p>
                                    <div className='progress' style={{ height: '5px' }}>
                                        <div className='progress-bar' style={{ width: user.portfolio + '%' }} />
                                    </div>
                                </Col>
                                <Col xs={1} className='d-flex align-items-center'>
                                    <p className='m-0 lh-1 d-inline-block'>{user.role}</p>
                                </Col>
                                <Col xs={1} className='d-flex align-items-center'>
                                    <button className='btn btn-outline-secondary d-flex align-items-center' type='button'><Edit3 />
                                        <p className='d-inline-block' onClick={this.editUser(user.id)}>Edit</p></button>
                                </Col>
                            </Row>
                        })}
                    </div>
                    <div className='row h-100 d-flex align-items-center'>
                        <Col xs={10}><p className="d-inline-block p-lg-2">Showing: {8 * currentPageIndex - 7}</p><i className="d-inline-block" data-feather="chevron-down"></i><p className="d-inline-block">of {total}</p></Col>
                        <Col xs={2}>
                            <div className="btn-group float-end m-2" role="group" aria-label="Basic example">
                                <button type="button" className="right-body-lower-button btn" onClick={this.onClickPrev}><p>Prev</p></button>
                                <button type="button" className="right-body-lower-button btn btn-primary" autoFocus disabled><p>{currentPageIndex}</p></button>
                                <button type="button" className="right-body-lower-button btn" onClick={this.onClickNext}><p>{currentPageIndex + 1}</p></button>
                                <button type="button" className="right-body-lower-button btn" onClick={this.onClickNext}><p>Next</p></button>
                            </div>
                        </Col>
                    </div>
                </div>
                <EditUserModal />
            </div>
        )
    }
}

export const RightBody = connect((state: UserManagementState) => ({
    users: state.users,
    total: state.total,
}))(RightBodyBase);
