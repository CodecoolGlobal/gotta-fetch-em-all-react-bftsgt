import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setLocations(data.results);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h3>Locations: </h3>
      <ul>
        {locations && locations.map((location, index) => (
          <li key={index}>
            <Link to={`/encounter/${index + 1}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default LocationsList;