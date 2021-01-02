import React from 'react';

const FlightResults = ({apiData}) => {
    return(
        <>
        {apiData && (
            apiData.map((resultado) => (
            <div>
                <h1>Lista de voos</h1>
                <p>{resultado.id}</p>
            </div>))
        )}

        </>
    )
};


export default FlightResults;