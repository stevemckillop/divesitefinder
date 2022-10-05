import React from "react";
import LocationMap from './LocationMap';
import "./styles/SingleLocation.css"
import ishigakimap from "./data/photos/ishigakimap.jpeg"
import penidamap from "./data/photos/penidamap.jpeg"

export default function SingleLocation(props) {

  const {name, country, sites, sealife, mapPhoto} = props.selectedLocation;

  console.log(props)

  const joinObject = () => {
    let returnObj = {};
    for (let i = 0; i < sites.length; i++){
      returnObj[sealife[i]] = sites[i];
    }
    return returnObj;
  }
const tableObject = joinObject();

console.log(tableObject);

const tupletArray = () => {
  let returnArray = [];
  for (const keys in tableObject) {
    returnArray.push([keys, tableObject[keys]]);
  }
  return returnArray;
}

const diveArray = tupletArray();

console.log(diveArray);
console.log(mapPhoto);
  
  return (
    <div class="container">
      {/* <LocationMap selectedPage={props.selectedPage}/> */}
      <div>
        <h1>This is a MAP of {name}, {country}
        </h1>
        {name === "Ishigaki" ? <img src={ishigakimap}/> : <img src={penidamap}/>}
        
      </div>
      <div>
        <h1>This is a CHART of {name}, {country}
        </h1>
      </div>
      <table id="dive_site_table">
        <tr>
          <th>Dive Site Name</th>
          <th>Common SeaLife</th>
        </tr>
          {diveArray.map(site => {
            return (
              <>
              <tr>
                <td>{site[1]}</td>
                <td>{site[0]}, </td>
              </tr>
              </>
            )
          })}
      </table>
    </div>
  )
}