import React from 'react'
import {MDBCol} from 'mdbreact'

const RenderKudo = (props) => {
    return (
        <MDBCol size='12' lg='6' className="mt-1 kudo">
            <h4 className="border-bottom border-dark">${props.title}</h4>
            <h6 className="border-bottom border-dark">To: ${props.toUser.username}<br />From: ${props.fromUser.username}</h6>
            <p>${props.body}</p>
        </MDBCol>
            )
        }
        
export default RenderKudo