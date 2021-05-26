import React from 'react';

const UserData = React.memo((props) => {
    const { id, firstName, lastName, email, phone } = props; // { ...user }

    return (
        <>
            <td>{ id }</td>
            <td>{ firstName }</td>
            <td>{ lastName }</td>
            <td>{ email }</td>
            <td>{ phone }</td>
        </>
    );
});

export default UserData;