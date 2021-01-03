import React from 'react';

const FlightResults = ({apiData}) => {
    console.log(apiData);
    return(
        <>
        {apiData && (
            apiData.map((resultado) => (
            <div>
                <h3>{resultado.itineraries[0].segments[0].departure.iataCode} ➔ {resultado.itineraries[0].segments[0].arrival.iataCode}</h3>
                <h4>{resultado.itineraries[0].segments[0].arrival.at}</h4>
                <h4>{resultado.itineraries[0].duration}</h4>
                <h3>{resultado.itineraries[1].segments[0].departure.iataCode} ➔ {resultado.itineraries[1].segments[0].arrival.iataCode}</h3>
                <h4>{resultado.itineraries[1].segments[0].arrival.at}</h4>
                <h4>{resultado.itineraries[1].duration}</h4>
                <h4>{resultado.price.total}€</h4>
                <p>Seats left: {resultado.numberOfBookableSeats}</p>
            </div>))
        )}

        </>
    )
};


export default FlightResults;