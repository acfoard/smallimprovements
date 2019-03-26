import React from 'react';
import * as $ from 'axios';
import {MDBRow, MDBCol} from 'mdbreact';
import AddKudo from './AddKudo';
import RenderKudo from './RenderKudo';


class KudoPage extends React.Component {

    state = {
        kudoList: []
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

    render() {
        return (
            <MDBRow className="row">
                <AddKudo 
                populateKudoList={this.populateKudoList}  />
                <MDBCol  size='12' md='8'>
                    <MDBRow>
                        {this.state.kudoList.map(kudo => 
                            <RenderKudo 
                            title={kudo.title}
                            body={kudo.body}
                            toUser={kudo.toUser}
                            fromUser={kudo.fromUser}
                            key={kudo._id} />)}
                    </MDBRow>
                </MDBCol>

            </MDBRow>

        )
    }
};

export default KudoPage