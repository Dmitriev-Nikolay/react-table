import React from 'react';

const ToggleData = ({ getSmallData, getBigData }) => {

    const API_SMALL = `https://raw.githubusercontent.com/Dmitriev-Nikolay/fake-api-for-projects/main/fake-json/react-table/small_data.json`;
    const API_BIG = `https://raw.githubusercontent.com/Dmitriev-Nikolay/fake-api-for-projects/main/fake-json/react-table/big_data.json`;

    const getSmall = () => {
        getSmallData(API_SMALL);
    };

    const getBig = () => {
        getBigData(API_BIG);
    };

    return (
        <div className="container__toogle-data">
            <button 
                className="button button--select-data" 
                onClick={ getSmall }>
                SMALL DATA
            </button>
            <button 
                className="button button--select-data" 
                onClick={ getBig }>
                BIG DATA
            </button>
        </div>
    );
};

export default ToggleData;
