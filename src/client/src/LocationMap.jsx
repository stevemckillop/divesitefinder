import React from 'react'


export default function LocationMap (props) {
  const {name, country, mapPhoto, map} = props.selectedLocation
  return (
    <div>
      <h1>THIS IS A MAP OF {name}, {country} </h1>
      <div>{map}</div>
      <img src="./data/photos/ishigakimap.jpg" alt={name}></img>
      
    </div>
  )
}