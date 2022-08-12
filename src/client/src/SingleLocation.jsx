import React from "react";

import LocationMap from './LocationMap';

export default function SingleLocation(props) {
  const {name, country, sites} = props.selectedLocation;
  return (
    <div>
      <LocationMap selectedLocation={props.selectedLocation}/>
      <div>
        <h1>This is a CHART of {name}, {country}
        </h1>
      </div>
    </div>
  )
}