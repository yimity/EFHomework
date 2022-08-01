import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { actionCreators, User, UserManagementState } from '../../store';

interface ConnectedProps {
    currentUser: User;
    showEditUserModal: boolean;
    dispatch?: any;
}

interface EditUserModalState {
    id: string,
    name: string,
    email: string,
    position: string,
    positionTitle: string,
    country: string,
    status: string,
    portfolio: number,
    role: string,
}

export default class EditUserModalBase extends Component<ConnectedProps> {

    state: EditUserModalState = {
        id: '',
        name: '',
        email: '',
        position: '',
        positionTitle: '',
        country: '',
        status: '',
        portfolio: 0,
        role: '',
    }

    componentWillReceiveProps(nextProps: ConnectedProps) {
        this.setState({
            id: nextProps.currentUser.id,
            name: nextProps.currentUser.name,
            email: nextProps.currentUser.email,
            position: nextProps.currentUser.position,
            positionTitle: nextProps.currentUser.positionTitle,
            country: nextProps.currentUser.country,
            status: nextProps.currentUser.status,
            portfolio: nextProps.currentUser.portfolio,
            role: nextProps.currentUser.role,
        });
    }

    nameChange = (e: any) => {
        this.setState({ name: e.target.value });

    }

    emailChange = (e: any) => {
        this.setState({ email: e.target.value });
    }

    positionChange = (e: any) => {
        this.setState({ position: e.target.value });
    }

    positionTitleChange = (e: any) => {
        this.setState({ positionTitle: e.target.value });
    }

    countryChange = (e: any) => {
        this.setState({ country: e.target.value });
    }

    portfolioChange = (e: any) => {
        this.setState({ portfolio: e.target.value });
    }

    handleClose = () => {
        const { dispatch } = this.props;
        dispatch(actionCreators.updateShowEditUserModal(false));
    }

    onSave = (e: any) => {
        const { dispatch } = this.props;
        const { id, name, email, position, positionTitle, country, status, portfolio, role } = this.state;
        const user: User = {
            id, name, email, position, positionTitle, country, status, portfolio, role
        };
        dispatch(actionCreators.updateUser(id, user));
        dispatch(actionCreators.updateShowEditUserModal(false));
    }

    render() {
        const { currentUser, showEditUserModal } = this.props;
        const { name, email, position, positionTitle, country, portfolio } = this.state;
        return (
            <Modal show={showEditUserModal}>
                <Modal.Header>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Name</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.nameChange} value={name} />
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Email</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.emailChange} value={email} />
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Position</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.positionChange} value={position} />
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Position Title</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.positionTitleChange} value={positionTitle} />
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Country</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.countryChange} value={country} />
                    </div>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text edit-user-modal-input-group-text' id=''>Portfolio</span>
                        </div>
                        <input type='text' className='form-control' onChange={this.portfolioChange} value={portfolio} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const EditUserModal = connect((state: UserManagementState) => ({
    currentUser: state.currentUser,
    showEditUserModal: state.showEditUserModal,
}))(EditUserModalBase as any);