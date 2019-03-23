import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import Header from './header';
import KudoPage from './Kudos/KudoPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <MDBContainer> 
        <Header />
        <KudoPage />
      </MDBContainer>

    );
  }
}

export default App;
