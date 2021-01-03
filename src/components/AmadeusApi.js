import React, { useState } from 'react';

export default function Api(origem, destino, ida, volta) {
  var Amadeus = require('amadeus');

  var amadeus = new Amadeus({
    clientId: 'lhANIGnLtRogSWGjkoYsQUUYfwGHsURW',
    clientSecret: 'pUpqyVBSfNJubxwG'
  });
    
  return amadeus.shopping.flightOffersSearch.get({
    originLocationCode: origem,
    destinationLocationCode: destino,
    departureDate: ida, 
    returnDate: volta,
    adults: '1',
    currencyCode: 'EUR',
    max: '5'
  }).then(function(response){
    return response.data;
  }).catch(function(responseError){
    console.log(responseError.code);
    alert("ERROR: Invalid city or date. Try again.")
  });

}

