import axios from 'axios';

// const API_SMALL = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
// const API_BIG = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

export const axiosUsers = (value) => dispatch => {
    axios.get(value)
        .then(({ data }) => {
            dispatch(setUsers(data));
            dispatch(setLoaded(true));
        })
        .catch((err) => {
            new Error(err);
        });
};

export const setUsers = (items) => ({
    type: 'SET_USERS',
    payload: items,
});

export const setLoaded = (status) => ({
    type: 'SET_LOADED',
    payload: status,
});

export const viewUserInfo = (item) => ({
    type: 'VIEW_USER',
    payload: item,
});

export const addNewUser = (newUser) => ({
    type: 'ADD_NEW_USER',
    payload: newUser,
});

export const setPage = (page) => ({
    type: 'SET_PAGE',
    payload: page,
});