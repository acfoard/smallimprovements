import React from 'react';

const UserName = (props) => {
    return (
        <option name={props.name} value={props.id}>{props.username}</option>
    )
}

export default UserName