import React, { useState } from 'react';

function Character({ character }) {
  // State to hold whether the homeworld is visible or not
  const [showHomeworld, setShowHomeworld] = useState(false);

  // Toggle the visibility of the homeworld information
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };

  return (
    <div onClick={toggleHomeworld} className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>ID: {character.id}</p>
      <p>Birth Year: {character.birthYear}</p>
      {/* Conditionally render the homeworld name */}
      {showHomeworld && <p className="character-planet">Home World: {character.homeworld}</p>}
    </div>
  );
}

export default Character;
