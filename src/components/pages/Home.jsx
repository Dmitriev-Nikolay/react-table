import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { axiosUsers, setUsers, viewUserInfo, addNewUser, setPage } from '../../store/actions/users';

import { UserData, LoadingData, UserInfo, NewUser, FilterForm, ToggleData, PaginationTable } from '../../components';

const theadArr = [
    { name: 'id', id: 1 },
    { name: 'firstName', id: 2 },
    { name: 'lastName', id: 3 },
    { name: 'email', id: 4 },
    { name: 'phone', id: 5 }
];

const Home = React.memo(() => {
    const { isLoaded, users, userInfo, pageCount, currentPage, maxRowOnPage } = useSelector(state => {
        return {
            isLoaded: state.userReducer.isLoaded,
            users: state.userReducer.items,
            userInfo: state.userReducer.item,
            pageCount: state.userReducer.pageCount,
            currentPage: state.userReducer.currentPage,
            maxRowOnPage: state.userReducer.maxRowOnPage,
        };
    });

    const [valueFilter, setValueFilter] = React.useState('');
    const [sortDirection, setDirection] = React.useState(false);
    const [typeSort, setTypeSort] = React.useState('');
    const [modeSelectData, setModeData] = React.useState(false); // выбор загрузки данных
    const [stateVisibleUserInfo, setVisibleUserInfo] = React.useState(false); // видимость меню сортировки
    const downPage = React.useRef(null);
    const notTable = React.useRef();
    const dispatch = useDispatch();
    
    const scrollToMyRef = () => window.scrollBy(0, downPage.current.scrollHeight); // скролл на UserInfo


    /* Получение данных */
    
    const getSmall = (valueSmall) => {
        setModeData(true);
        let timerIdSmall = setTimeout(() => {
            dispatch(axiosUsers(valueSmall))
        }, 2000);
        return () => {
            clearTimeout(timerIdSmall);
        };
    };

    const getBig = (valueBig) => {
        setModeData(true);
        let timerIdBig = setTimeout(() => {
            dispatch(axiosUsers(valueBig))
        }, 2000);
        return () => {
            clearTimeout(timerIdBig);
        };
    };

    /* Сортировка данных по столбцам */

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

    /* Просмотр подробных данных о пользователе */

    const viewMoreInfo = (user) => {
        setVisibleUserInfo(true);
        dispatch(viewUserInfo(user));
        let timerScroll = setTimeout(() => scrollToMyRef(), 0);
        return () => {
            clearTimeout(timerScroll);
        };
    };

    /* Добавление нового пользователя */

    const addNewPerson = React.useCallback((user) => {
        dispatch(addNewUser(user));
    }, [dispatch]);

    const filteredItems = users.slice(currentPage * maxRowOnPage - maxRowOnPage, currentPage * maxRowOnPage).filter(user => {
        return user.firstName.toLowerCase().includes(valueFilter.toLowerCase()) 
            || user.lastName.toLowerCase().includes(valueFilter.toLowerCase())
            || user.email.toLowerCase().includes(valueFilter.toLowerCase())
            || user.phone.toLowerCase().includes(valueFilter.toLowerCase());
    });

    /* Отлов состояния инпута фильтра */

    const valueChangeHandler = (event) => {
        setValueFilter(event.target.value);
    };

    /* Выбор страницы */

    const selectPage = (value) => dispatch(setPage(value));

    /* Отлов клика для отображения/скрытия инфо о пользователе */

    React.useEffect(() => {
        const clickedOut = (event) => {
            const target = event.target;
            const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(target); // для всех браузеров
            if (!path.includes(notTable.current)) {
                setVisibleUserInfo(false);
            };
        };
        document.addEventListener('click', clickedOut);
        return () => document.removeEventListener('click', clickedOut);
    }, [dispatch]);

    return (
        <div className="container" ref={ downPage }>
            <div className="content__items">
                {
                    !modeSelectData 
                        ? <ToggleData 
                            getSmallData={ getSmall }
                            getBigData={ getBig }
                        />
                        : isLoaded
                            ? <>
                                <h1 className="content__title">React-table</h1>
                                <NewUser addPerson={ addNewPerson } />
                                <FilterForm 
                                    searchUsers={ valueChangeHandler } 
                                    valueFilter={ valueFilter } 
                                />
                                <table className="content__table">
                                    <tbody ref={ notTable }>
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
                                            filteredItems.map((user, i) => {
                                                return (
                                                    <tr
                                                        className="content__table__strings"
                                                        key={ `${ user.id }_${ i }` }
                                                        onClick={ () => viewMoreInfo(user) }
                                                    >
                                                        <UserData { ...user } />
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <PaginationTable 
                                    pageCount={ pageCount } 
                                    selectPage={ selectPage } 
                                />
                            </>
                            : <LoadingData isLoaded={ isLoaded } />
                }
                {
                    stateVisibleUserInfo && <UserInfo { ...userInfo } />
                }
            </div>
        </div>
    );
});

export default Home;