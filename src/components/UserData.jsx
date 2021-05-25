import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';


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