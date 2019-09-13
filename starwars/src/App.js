import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sc from 'styled-components';
// import './App.css';
import Characters from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [apiUrl, setApiUrl] = useState('https://swapi.co/api/people/?page=1');
  const [apiResponse, setApiResponse] = useState();
  const [apiError, setApiError] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        // debugger
        setApiResponse(response);
      })
      .catch(error => {
        // debugger
        setApiError(error);
      });
  }, [apiUrl]);

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

    button {
      font-size: 3rem;
      margin: 1rem;
      padding: 1rem;
      width: 20rem;
      border-radius: 5rem;
      color: #443e3e;
      background: rgba(255,255,255,0.5);
      border: 1px solid white;
      margin-top: 2rem;

      :hover {
        background: rgba(255,255,255,0.7);
      }
    }
  `;
  
  if (apiResponse) {
    return (
      <StyledApp>
        <h1>React Wars</h1>
        <Characters characterData={apiResponse.data.results} />
        <div>
          <button onClick={() => setApiUrl(apiResponse.data.previous)} >Previous</button>
          <button onClick={() => setApiUrl(apiResponse.data.next)} >Next</button>
        </div>
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
