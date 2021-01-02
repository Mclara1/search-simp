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
    departureDate: '2021-02-02', //mudar isto para ida
    returnDate: '2021-03-02', //mudar isto para volta
    adults: '1',
    currencyCode: 'EUR',
    max: '30'
  }).then(function(response){
    return response.data;

    // for (let index = 0; index < response.data.length; index++) {
    //   const element = response.data[index];
    //   var info = element.price.total
    //   console.log(element.price.total);
    // }

  }).catch(function(responseError){
    console.log(responseError.code);
    alert("ERROR: Invalid code city. Try again.")
  });

}

