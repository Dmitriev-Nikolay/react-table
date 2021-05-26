import React from 'react';

const ToogleData = ({ getSmallData, getBigData }) => {

    const API_SMALL = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
    const API_BIG = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

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

export default ToogleData;
