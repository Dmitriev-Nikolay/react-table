import React from "react";

const UserInfo = (props) => {
    const { address, description, streetAddress, city, firstName, lastName, state, zip } = props; // { ...user }

    return (
        <div>
            {/* <span>{ description }</span>
            <span>{ address }</span> */}
            <span>{ firstName }</span>
            <span>{ lastName }</span>
            {/* <span>{ streetAddress }</span>
            <span>{ city }</span>
            <span>{ state }</span>
            <span>{ zip }</span> */}
        </div>
    );
};

export default UserInfo;