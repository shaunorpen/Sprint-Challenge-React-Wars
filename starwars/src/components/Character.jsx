import React from 'react';

function Character (props) {
    return (
        <div>
            <h2>ID Card</h2>
            <p>Name: {props.data.name}</p>
            <p>Gender:{props.data.gender}</p>
            <p>Height: {props.data.height}cm</p>
            <p>Weight: {props.data.mass}kg</p>
            <p>Number of Starships: {props.data.starships.length}</p>
            <p>Number of Vehicles: {props.data.vehicles.length}</p>
        </div>
    );
}

export default Character;