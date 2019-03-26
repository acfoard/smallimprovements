import React from 'react';

const UserName = (props) => {
    return (
        <option value={props.id}>{props.username}</option>
    )
}

export default UserName