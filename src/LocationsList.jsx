
import { useState, useEffect } from 'react';

const LocationsList = ({ onLocationsClick }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/location');
        const data = await response.json();
        setLocations(data.results);
      } catch (error) {
        console.error('fetch error', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className='locationsListContainer'>
      <h3>Locations: </h3>
      <ul>
        {locations &&
          locations.map((location, index) => (
            <li key={index} onClick={() => onLocationsClick(index + 1)}>
              {location.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocationsList;




