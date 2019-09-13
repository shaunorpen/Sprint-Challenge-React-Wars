import React from 'react';
import sc from 'styled-components';
import Character from './Character';

const StyledCharacters = sc.div`
    display: flex;
    flex-wrap: wrap;
`;

function Characters (props) {
    return (
        <StyledCharacters>
            {props.characterData.map(character => <Character data={character} key={character.name} />)}
        </StyledCharacters>
    );
}

export default Characters;