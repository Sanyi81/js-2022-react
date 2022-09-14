function Character(props) {
    let {character} = props;
    // id,name,status,species,gender,image
    return (
        <div>
            <h2>{character.id}: {character.name}</h2>
            <p>{character.status} <br/>
               {character.species} <br/>
               {character.gender}
            </p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
}

export default Character;