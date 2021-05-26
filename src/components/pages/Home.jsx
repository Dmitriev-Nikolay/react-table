import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { axiosUsers, setUsers, viewUserInfo, addNewUser } from '../../store/actions/users';

import { UserData, LoadingData, UserInfo, NewUser, FilterForm, ToogleData } from '../../components';

const theadArr = [
    { name: 'id', id: 1 },
    { name: 'firstName', id: 2 },
    { name: 'lastName', id: 3 },
    { name: 'email', id: 4 },
    { name: 'phone', id: 5 }
];

const Home = React.memo(() => {
    const { isLoaded, users, userInfo } = useSelector(state => {
        return {
            isLoaded: state.userReducer.isLoaded,
            users: state.userReducer.items,
            userInfo: state.userReducer.item,
        };
    });

    const [sortDirection, setDirection] = React.useState(false);
    const [typeSort, setTypeSort] = React.useState('');
    const [modeSelectData, setModeData] = React.useState(false);

    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     let timerId = setTimeout(() => {
    //         dispatch(axiosUsers())
    //     }, 500);
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    // }, [dispatch]);

    const scrollToBottom = () => {
        window.scrollTo({ top: 2000, behavior: 'smooth' });
    };

    const sortUsers = (type) => {
        const copyItems = [...users];
        const sortableUsers = copyItems.sort((first, second) => {
            switch (sortDirection) {
                case true: return first[type] < second[type] ? 1 : -1; // по убыванию
                case false: return first[type] < second[type] ? -1 : 1; // по возрастанию
                default: return false;
            };
        });
        setTypeSort(type);
        setDirection(!sortDirection);
        dispatch(setUsers(sortableUsers));
    };

    const viewMoreInfo = (user) => {
        dispatch(viewUserInfo(user));
        let timerScroll = setTimeout(() => scrollToBottom(), 0);
        return () => {
            clearTimeout(timerScroll);
        };
    };

    const addNewPerson = React.useCallback((user) => {
        dispatch(addNewUser(user));
    }, [dispatch]);

    const searchHandler = (value) => {
        console.log(value);
    };

    const getSmall = (valueSmall) => {
        setModeData(true);
        let timerIdSmall = setTimeout(() => {
            dispatch(axiosUsers(valueSmall))
        }, 1500);
        return () => {
            clearTimeout(timerIdSmall);
        };
    };

    const getBig = (valueBig) => {
        setModeData(true);
        let timerIdBig = setTimeout(() => {
            dispatch(axiosUsers(valueBig))
        }, 1500);
        return () => {
            clearTimeout(timerIdBig);
        };
    };

    return (
        <div className="container">
            <div className="content__items">
                {
                    !modeSelectData 
                        ? <ToogleData 
                            getSmallData={ getSmall }
                            getBigData={ getBig }
                        />
                        :isLoaded
                            ? <>
                                <h1 className="content__title">React-table</h1>
                                <NewUser 
                                    addPerson={ addNewPerson }
                                    users = { users }
                                />
                                <FilterForm searchUser={ searchHandler } />
                                <table className="content__table">
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
                                                            {
                                                                typeSort === name
                                                                    ? <svg className={ sortDirection ? '' : 'rotate' } width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 
                                                                        5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 
                                                                        4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 
                                                                        0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"/>
                                                                    </svg>
                                                                    : null
                                                            }
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
                                                        onClick={ () => viewMoreInfo(user) }
                                                    >
                                                        <UserData { ...user } />
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                            : <LoadingData isLoaded={ isLoaded } />
                }
                {
                    userInfo && <UserInfo { ...userInfo } />
                }    
            </div>
        </div>
    );
});

export default Home;