import React from 'react';

const FilterForm = ({ searchUser }) => {

    const [value, setValue] = React.useState('')

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const searchUsers = (strValue) => {
        searchUser(strValue);
    };

    return (
        <div className="container__search">
            <input
                type="text"
                onChange={ valueChangeHandler }
                value={ value }
            />
            <button 
                className="button" 
                onClick={ () => searchUsers(value) } 
            >
                Поиск
            </button>
        </div>
    );
};

export default FilterForm;