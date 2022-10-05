import React from 'react'
import ishigakimap from "./data/photos/ishigakimap.jpeg"
import penidamap from "./data/photos/penidamap.jpeg"


export default function LocationMap (props) {
  const {name, country, mapPhoto} = props.selectedLocation
  return (
    <div>
      <h1>THIS IS A MAP OF {name}, {country} </h1>
      {name=="Ishigaki" ? <img src={ishigakimap} alt={mapPhoto} /> :
      <img src={penidamap} alt={mapPhoto} />
    }
    </div>
  )
}

//needs to scale 