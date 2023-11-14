import { useState, useEffect } from "react"

function FetchLocation() {

  const [locations, setLocations] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location')
      .then(res => {
        return res.json() //promise
      })
      .then((locations) => {
        setLocations(locations)
        console.log(locations)
      });
  }, []);

  let cityToFetch = ''
  
  return (
    <div>
      {locations && locations.results.map((location) => (  
        <div key={location.name}>
          <p onClick={(e) => {

            cityToFetch = e.target.innerText
            setLocations(null)
            console.log(cityToFetch)

          }}>{location.name}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchLocation;
