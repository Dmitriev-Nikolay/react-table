import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';


const UserData = React.memo((props) => {
    const { id, firstName, lastName, email, phone } = props; // { ...user }

    // const [activeType, setActiveType] = React.useState(types[0]); // по умолчанию выбран первый
    // const typeNames = ["Классическая булочка", "Булочка с кунжутом"];

    // const onSelectedType = (i) => {
    //     setActiveType(i);
    // };
    // const [activeSize, setActiveSize] = React.useState(sizes[0]);
    // const sizeNames = {
    //     "S": 0, 
    //     "M": 50, 
    //     "XL": 100,
    // };

    // const finalPrice = !price ? 0 : price + Object.values(sizeNames)[activeSize];

    // const onSelectedSize = (i) => {
    //     setActiveSize(i);
    // };

    // const onAddBurger = () => {
    //     const cartItem = {
    //         id,
    //         imageUrl,
    //         name,
    //         finalPrice, // price
    //         size: Object.keys(sizeNames)[activeSize],
    //         type: typeNames[activeType],
    //     };
    //     onClickAddBurger(cartItem);
    // };

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