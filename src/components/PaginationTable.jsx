import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';

import { NavLink } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

const PaginationTable = (props) => {
    const { users, pageCount, currentPage, maxRowOnPage } = props;
    console.log(users);
    console.log(pageCount);
    console.log(currentPage);
    console.log(maxRowOnPage);
    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     const offset = selectedPage * perPage;
    
    //     currentPage = selectedPage,
    //     offset = offset;
    //     getSmall();
    //     return;
    // };

    // console.log(users);
    // const countLinks = Math.ceil((users.length - 1) / 50);
    // console.log(countLinks);
    const links = Array.from({ length: pageCount }, (_, i) => {
        return <NavLink className="container__pagination-links" to={ `/${i + 1}` } key={ `link_${i}` }>{ i + 1 }</NavLink>
    });

    // const classes = useStyles();
    return (
        <div className="container__pagination">
            { links }
        </div>
    );
}

export default PaginationTable;