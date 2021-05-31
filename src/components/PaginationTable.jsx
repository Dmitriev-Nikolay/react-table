import React from 'react';
import { NavLink } from "react-router-dom";

const PaginationTable = (props) => {
    const [page, setPage] = React.useState(null);
    const { pageCount, selectPage } = props;
    const selectPages = (value) => {
        selectPage(value);
        setPage(value);
    };

    const links = Array.from({ length: pageCount }, (_, i) => {
        return <NavLink className={ `container__pagination-links ${ i + 1 === page ? 'active' : ''}` } onClick={ () => selectPages(i + 1) } to={ `/${ page + 1 }` } key={ `link_${ i }` }>{ i + 1 }</NavLink>
    });

    return (
        <div className="container__pagination">
            { links }
        </div>
    );
};

export default PaginationTable;