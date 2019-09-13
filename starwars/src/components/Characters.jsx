import React from 'react';
import Character from './Character';

function Characters (props) {
    console.log(props);
    return (
        <div>
            {props.characterData.map(character => <Character data={character} key={character.name} />)}
        </div>
    );
}

export default Characters;