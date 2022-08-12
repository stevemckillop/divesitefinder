import logo from './logo.svg';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import { Navbar } from './Navbar'
import SingleLocation from './SingleLocation'
import AllLocations  from './AllLocations'
import IshigakiMap from './IshigakiMap'
const { divesites } = require("./data/divesites.json");


function App() {

  const siteNames = divesites.map((site) => site.name);

  const dummydata = [
    {
      name: "Ishigaki",
      country: "JAPAN",
      sites: siteNames,
      photoURL: "https://ippei-janine.com/travel-japan-islands/wp-content/uploads/aerial-view-of-ishigaki-island-with-coral-reefs-and-tropical-water-of-southern-japan-okinawa.jpg",
      map: IshigakiMap
    },
    {
      name: "Nusa Penida",
      country: "Indonesia",
      sites: siteNames,
      photoURL: "https://www.wandernesia.com/wp-content/uploads/2018/11/kelingking-beach.jpg", 
      map: IshigakiMap
    }
  ]


    const [allLocations, setAllLocations] = useState(dummydata);
    const [selectedLocation, setSelectedLocation] = useState();




  return (
    <div className="App">
      <div>
          <Navbar/>
      </div>
        <div>
        {
          !selectedLocation ? 
            <AllLocations allLocations={allLocations} setSelectedLocation={setSelectedLocation}/> : 
            <SingleLocation selectedLocation={selectedLocation}/>
        }
      </div>
    </div>
  );
}

export default App;
