import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sc from 'styled-components';
// import './App.css';
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

  const StyledApp = sc.div`
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    h1 {
      font-size: 5rem;
      font-weight: bold;
      color: #443e3e;
      text-shadow: 1px 1px 5px #fff;
      margin-bottom: 2rem;
    }
  `;
  
  if (apiResponse) {
    return (
      <StyledApp>
        <h1>React Wars</h1>
        <Characters characterData={apiResponse.data.results} />
      </StyledApp>
    );
  } else if (apiError) {
    return (
      <StyledApp>
        <h1>React Wars</h1>
        <p>There's been an error.</p>
      </StyledApp>
    );
  } else {
    return (
      <StyledApp>
        <h1>React Wars</h1>
        <p>Loading...</p>
      </StyledApp>
    );
  }

}

export default App;
