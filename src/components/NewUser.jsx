import React from 'react';

const NewUser = ({ addPerson }) => {
    const [isShown, setIsShown] = React.useState(false);
    const [id, setId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const toggleFieldSet = () => setIsShown(!isShown);

    const handleChange = (event, setFunc) => setFunc(event.target.value);

    const addNewUserInTable = (e) => {
        e.preventDefault();
        const newUser = {
            'id': Number(id),
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'phone': phone,
            'discription': ''
        };
        if (id === '' || firstName === '' || lastName === '' || email === '' || phone === '') {
            return;
        };
        addPerson(newUser);
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div className="container__form">
            <button 
                className="button" 
                onClick={ toggleFieldSet }
            >
                Добавить пользователя
            </button>
            { 
                isShown &&
                <form className="container__add-form">
                    <input onChange={ (e) => handleChange(e, setId) } value={ id } type="number" min="1" placeholder="id" required />
                    <input onChange={ (e) => handleChange(e, setFirstName) } value={ firstName } type="text" placeholder="firstName" required />
                    <input onChange={ (e) => handleChange(e, setLastName) } value={ lastName } type="text" placeholder="lastName" required />
                    <input onChange={ (e) => handleChange(e, setEmail) } value={ email } type="email" placeholder="email" required />
                    <input onChange={ (e) => handleChange(e, setPhone) } value={ phone } type="tel" placeholder="phone" required />
                    <input className="button" type="submit" value="Добавить в таблицу" onClick={ addNewUserInTable } />
                </form>
            }
        </div>
    );
};

export default NewUser;