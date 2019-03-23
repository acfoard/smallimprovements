import React from 'react';
import {MDBRow, MDBCol } from 'mdbreact'

const Header = () => {

    return(
        <MDBRow className="row">
            <MDBCol size="12" className='header'>
                    <h1 className='text-center'>Tiny Improvements</h1>
            </MDBCol>
        </MDBRow>
    )
}

export default Header

