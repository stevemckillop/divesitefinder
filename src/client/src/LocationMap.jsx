import React from 'react'

export default function LocationMap (props) {
  const {name, country, sites} = props.selectedLocation
  return (
    <div>
      <h1>THIS IS A MAP OF {name}, {country} </h1>
      {sites.map(site => {
        return (
          <div>{site}</div>
        )
      })}
    </div>
  )
}