import './App.css';
import React, { useState } from 'react'
import FlightResults from './components/FlightResults';
import Form from './components/Form';

function App() {
  const [apiData, setApiData] = useState (null);

  return (
    <div className="App">
      <Form apiData={apiData} setApiData={setApiData} />
      <FlightResults apiData={apiData} />
    </div>
  );
}

export default App;
