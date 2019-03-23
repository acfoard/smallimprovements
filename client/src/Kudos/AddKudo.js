import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import UserName from './UserName';
import * as $ from 'axios';

class AddKudo extends Component {
    state = {
        modal: false,
        userList: []
    }

    populateUserList = () => {
        $.get('/api/user')
            .then(users => {
                this.setState({ userList: users.data })
            })
    };

    componentDidMount() {
        this.populateUserList();
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(props) {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Send a Kudo</MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
                                    <div>
                                        <select className="browser-default custom-select">
                                            <option>Choose your option</option>
                                            {this.state.userList.map(user => 
                                                <UserName name={user.username}/>
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <select className="browser-default custom-select">
                                            <option>Choose your option</option>
                                            {this.state.userList.map(user => 
                                                <UserName name={user.username}/>
                                            )}
                                        </select>
                                    </div>
                                    <br />
                                    <label
                                        htmlFor="defaultFormContactSubjectEx"
                                        className="grey-text"
                                    >
                                        Subject
            </label>
                                    <input
                                        type="text"
                                        id="defaultFormContactSubjectEx"
                                        className="form-control"
                                    />
                                    <br />
                                    <label
                                        htmlFor="defaultFormContactMessageEx"
                                        className="grey-text"
                                    >
                                        Your message
            </label>
                                    <textarea
                                        type="text"
                                        id="defaultFormContactMessageEx"
                                        className="form-control"
                                        rows="3"
                                    />
                                </form>
                            </MDBCol>
                        </MDBRow>
        </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default AddKudo