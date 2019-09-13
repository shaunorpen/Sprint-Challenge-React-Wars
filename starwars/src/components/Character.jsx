import React from 'react';
import sc from 'styled-components';

const StyledCharacter = sc.div`
    min-width: 40rem;
    flex-grow: 1;
    border: 2px solid #443e3e;
    margin: 1rem;
    padding: 1rem;
    text-align: left;
    background: rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;

    .detailsDiv {
        display: flex;
    }

    .leftDiv, .rightDiv {
        flex-basis: 50%;
    }

    h2 {
        color: #443e3e;
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        color: #443e3e;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
    }
`;

function capitalizeFirstLetter(string) {
    if (string !== 'n/a') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return string;
    }
}

function Character (props) {
    return (
        <StyledCharacter>
            <h2>ID Card: {props.data.name}</h2>
            <div className='detailsDiv'>
                <div className='leftDiv'>
                    <p>Gender: {capitalizeFirstLetter(props.data.gender)}</p>
                    <p>Height: {props.data.height}cm</p>
                    <p>Weight: {props.data.mass}kg</p>
                </div>
                <div className='rightDiv'>
                    <p>Number of Starships: {props.data.starships.length}</p>
                    <p>Number of Vehicles: {props.data.vehicles.length}</p>
                </div>
            </div>
        </StyledCharacter>
    );
}

export default Character;