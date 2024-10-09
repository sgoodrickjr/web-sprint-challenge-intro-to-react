import React, { useState, useEffect } from 'react';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch data from both endpoints concurrently using `Promise.all`
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          fetch(urlPeople).then(res => res.json()),
          fetch(urlPlanets).then(res => res.json()),
        ]);

        // Combine the data from both endpoints
        const combinedData = peopleResponse.map(person => {
          const homeworld = planetsResponse.find(planet => planet.id === person.homeworld);
          return {
            ...person,
            homeworld: homeworld ? homeworld.name : 'Unknown',
          };
        });

        setCharacters(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div>
        {/* Map over the combined character data and render a Character for each */}
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
