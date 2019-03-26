import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";
import UserName from "./UserName";
import * as $ from "axios";

class AddKudo extends Component {
  state = {
    modal: false,
    userList: [],
    kudoTitle: '',
    kudoBody: '',
    kudoTo: '',
    kudoFrom: ''
  };

  addKudo = e => {
    e.preventDefault();
    const newKudo = {
      toId: this.state.kudoTo,
      fromId: this.state.kudoFrom,
      title: this.state.kudoTitle,
      body: this.state.kudoBody
    };
    console.log(newKudo);
    $.post("/api/kudo", newKudo).then(response => {
      this.setState({
        kudoTitle: "",
        kudoBody: "",
        kudoTo: '',
        kudoFrom: ''
      });
      this.toggle();
      this.props.populateKudoList();
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  populateUserList = () => {
    $.get("/api/user").then(users => {
      this.setState({ userList: users.data });
    });
  };

  componentDidMount() {
    this.populateUserList();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Send a Kudo</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Send a Kudo</MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol md="6">
                <form>
                  <div>
                    <select name='kudoTo' className="browser-default custom-select" onChange={this.changeHandler}>
                      <option>Who is the Kudo for?</option>
                      {this.state.userList.map(user => (
                        <UserName username={user.username}
                        id={user._id}
                        key={user._id} />
                      ))}
                    </select>
                  </div>
                  <div>
                    <select onChange={this.changeHandler} name='kudoFrom' className="browser-default custom-select">
                      <option>Who is the Kudo from? </option>
                      {this.state.userList.map(user => (
                        <UserName username={user.username}
                        id={user._id}
                        key={user._id}
                        name='kudoFrom' />
                      ))}
                    </select>
                  </div>
                  <br />
                  <label
                    htmlFor="defaultFormContactSubjectEx"
                    className="grey-text"
                  >
                    Kudo Subject
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control"
                    value={this.state.kudoTitle}
                    onChange={this.changeHandler}
                    name="kudoTitle"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    className="grey-text"
                  >
                    Kudo text
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                    value={this.state.kudoBody}
                    onChange={this.changeHandler}
                    name="kudoBody"
                  />
                </form>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.addKudo}>Send Kudo</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddKudo;
