import React from "react";
import AllSeaLife from "./AllSeaLife";
import "./styles/AllLocations.css"

export default function AllLocations(props) {



  return (
    <div>
      {props.allLocations.map((location) => {
        return (
          <div class="containter"onClick={()=> {props.setSelectedLocation(location); props.setShowAllLocations(false);}}>
            <h1>Explore {location.name}, {location.country}</h1>
            <div class="entryPhoto">
              <img src={location.photoURL} alt={location.name}></img>
            </div>
          </div>
        )
      })}
      <AllSeaLife />
    </div>
  )
}
