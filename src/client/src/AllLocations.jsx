import React from "react";
import "./styles/AllLocations.css"

export default function AllLocations(props) {

  const { allLocations, setSelectedLocation } = props;

  
  return (
    <div>
      {allLocations.map((location) => {
        return (
          <div class="containter"onClick={()=> setSelectedLocation(location)}>
            <h1>Explore {location.name}, {location.country}</h1>
            <div class="entryPhoto">
              <img src={location.photoURL} alt={location.name}></img>
            </div>
          </div>
        )
      })}
    </div>
  )
}