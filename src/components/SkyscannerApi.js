import React, { useState , useEffect} from 'react';
import axios from 'axios';

export default function Api() {
    const options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
        params: {query: 'France'},
        headers: {
          'x-rapidapi-key': 'd9e193afb7msh46254aecc3afa11p1c6f44jsnb125d6ff196c',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
      };
      
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
            
        </div>
    )
}
