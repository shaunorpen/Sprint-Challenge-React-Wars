import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const apiUrl = 'https://swapi.co/api/people/';
  const [apiResponse, setApiResponse] = useState();
  const [apiError, setApiError] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setApiResponse(response);
      })
      .catch(error => {
        setApiError(error);
      });
  }, []);

  
  if (apiResponse) {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters characterData={apiResponse.data.results} />
      </div>
    );
  } else if (apiError) {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <p>There's been an error.</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <p>Loading...</p>
      </div>
    );
  }

}

export default App;
