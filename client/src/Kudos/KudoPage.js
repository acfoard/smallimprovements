import React from 'react';
import KudoForm from './KudoForm';
import * as $ from 'axios';
import {MDBRow, MDBCol} from 'mdbreact';
import AddKudo from './AddKudo';
import RenderKudo from './RenderKudo';


class KudoPage extends React.Component {

    state = {
        kudoList: [],
        kudoTitle: '',
        kudoBody: '',
        kudoTo: [],
        kudoFrom: [],
        modal: false
    };

    populateKudoList = () => {
        $.get('/api/kudo')
            .then(kudos => {
                this.setState({ kudoList: kudos.data })
            })
    };

    componentDidMount() {
        this.populateKudoList();
    };

    changeHandler = (e) => {
		const {name, value} = e.target;
		this.setState({ [name]: value });
    }
    
    toggleModal = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    addKudo = (e) => {
        e.preventDefault();
        const newKudo = {
            toId: this.state.kudoTo[0]._id,
            fromId: this.state.kudoFrom[0]._id,
            title: this.state.kudoTitle,
            body: this.state.kudoBody
        };
        $.post('/api/kudo', newKudo)
            .then(response => {
                this.setState({
                    kudoTitle: '',
                    kudoBody: '',
                    kudoTo: [],
                    kudoFrom: []
                });
                this.populateKudoList();
            })
    }

    render() {
        return (
            <MDBRow className="row">
                <AddKudo />
                <MDBCol  size='12' md='8'>
                    <MDBRow className="row" id="kudoList">
                        <KudoForm />
                    </MDBRow>
                    <MDBRow>
                        {this.state.kudoList.map(kudo => 
                            <RenderKudo 
                            title={kudo.title}
                            body={kudo.body}
                            toUser={kudo.toUser}
                            fromUser={kudo.fromUser} />)}
                    </MDBRow>
                </MDBCol>

            </MDBRow>

        )
    }
};

export default KudoPage