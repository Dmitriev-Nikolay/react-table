import React from 'react';
import { NavLink } from "react-router-dom";

const PaginationTable = (props) => {
    const { pageCount, selectPage } = props;
    const selectPages = (value) => selectPage(value);

    const links = Array.from({ length: pageCount }, (_, i) => {
        return <NavLink className="container__pagination-links" onClick={ () => selectPages(i + 1) } to={ `/${ i + 1 }` } key={ `link_${ i }` }>{ i + 1 }</NavLink>
    });

    return (
        <div className="container__pagination">
            {/* <NavLink className="container__pagination-links--lr" to={ `/${ 1}` }>вперед</NavLink> */}
            { links }
            {/* <NavLink className="container__pagination-links--lr" to={ `/${ 1}` }>назад</NavLink> */}
        </div>
    );
};

export default PaginationTable;