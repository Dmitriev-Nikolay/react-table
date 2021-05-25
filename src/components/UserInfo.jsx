import React from "react";

const UserInfo = (props) => {
    const { firstName, lastName, description } = props;  // { ...userInfo }

    /* Доступ к вложенному объекту адреса */
    const streetAddress = props && props.address ? props.address.streetAddress : null;
    const city = props && props.address ? props.address.city : null;
    const state = props && props.address ? props.address.state : null;
    const zip = props && props.address ? props.address.zip : null;

    return (
        <div className="user-info">
            <span>Выбран пользователь: <b>{ firstName } { lastName }</b></span>
            <p>Описание:</p>
            <textarea readOnly="readonly" value={ description }></textarea>
            <span>Адрес проживания: <b>{ streetAddress }</b></span>
            <span>Город: <b>{ city }</b></span>
            <span>Провинция/штат: <b>{ state }</b></span>
            <span>Индекс: <b>{ zip }</b></span>
        </div>
    );
};

export default UserInfo;