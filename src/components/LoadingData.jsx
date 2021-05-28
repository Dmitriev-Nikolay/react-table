import React from "react";

const LoadingData = () => {
    return (
        <div className="loading">
            <div className="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="text-loading">Загрузка данных</span>
        </div>
    );
};

export default LoadingData;