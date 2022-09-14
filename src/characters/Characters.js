import {useState} from "react";

import Character from "./Character";

function Characters () {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(1,7));
        });

    return (
        <div>
            {
                characters.map(character => <Character character={character} key={character.id}/>)
            }
        </div>
    );

}

export default Characters;