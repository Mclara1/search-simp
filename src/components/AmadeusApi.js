import React from 'react';

export default function Api2(origem, destino, ida, volta) {
    var Amadeus = require('amadeus');

    var amadeus = new Amadeus({
      clientId: 'lhANIGnLtRogSWGjkoYsQUUYfwGHsURW',
      clientSecret: 'pUpqyVBSfNJubxwG'
    });
    
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origem,
        destinationLocationCode: destino,
        departureDate: ida,
        returnDate: volta,
        adults: '1'
    }).then(function(response){
      console.log(response.data);
    }).catch(function(responseError){
      console.log(responseError.code);
    });

    return (
        <div></div>
    )
}

