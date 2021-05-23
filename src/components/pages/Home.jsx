import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { setCategory, setSort } from '../store/actions/filters';
import { axiosUsers, setUsers } from '../../store/actions/users';
// import { setSort } from '../../store/actions/filters';

import { UserData, LoadingData, UserInfo } from '../../components';

import arrow from '../../assets/arrow-top.svg';

const theadArr = [
    { name: 'id', id: 1 },
    { name: 'firstName', id: 2 },
    { name: 'lastName', id: 3 },
    { name: 'email', id: 4 },
    { name: 'phone', id: 5 }
];

const Home = React.memo(() => {
    const { isLoaded, users } = useSelector(state => { // mapState
        return {
            isLoaded: state.userReducer.isLoaded,
            users: state.userReducer.items,
        };
    });

    const [sortDirection, setDirection] = React.useState(false);

    const dispatch = useDispatch(); // mapActions

    React.useEffect(() => {
        let timerId = setTimeout(() => {
            dispatch(axiosUsers())
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [dispatch]);

    const sortUsers = (type) => {
        const copyItems = [...users];
        const sortableUsers = copyItems.sort((first, second) => {
            switch (sortDirection) {
                case true: return first[type] < second[type] ? 1 : -1; // по убыванию
                case false: return first[type] < second[type] ? -1 : 1; // по возрастанию
                default: return false;
            }
        })
        dispatch(setUsers(sortableUsers));
        setDirection(!sortDirection);
    }

    return (
        <div className="container">
            {
                !users && <h2 className="content__title">Все пользователи</h2>
            }
            <div className="content__items">
                {
                    isLoaded
                        ? <table className="content__table">
                            <tbody>
                                <tr>
                                    {
                                        theadArr.map(({ name, id }) => {
                                            return (
                                                <th
                                                    className="content__table__strings--head"
                                                    key={ `${ id }_${ name }` }
                                                    onClick={ () => sortUsers(name) }
                                                >
                                                    { name }
                                                    <svg className={ sortDirection ? 'rotate' : '' } width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 
                                                        5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 
                                                        4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 
                                                        0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                                                    </svg>
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                                {
                                    users.map((user, i) => {
                                        return (
                                            <tr
                                                className="content__table__strings"
                                                key={ `${user.id}_${i}` }
                                            >
                                                <UserData { ...user } />
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        : <LoadingData />
                }
                {/* {
                stateVisibleInfo && users.map((user, i) => {
                    return <UserInfo key={`${user.id}_${i}`} {...user} />
                })
            } */}
            </div>
        </div>
    );
});

export default Home;