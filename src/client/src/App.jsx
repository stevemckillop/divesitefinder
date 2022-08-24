import logo from './logo.svg';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import { Navbar } from './Navbar'
import SingleLocation from './SingleLocation'
import AllLocations  from './AllLocations'
import IshigakiMap from './IshigakiMap'
import axios from "axios";
const { divesites } = require("./data/divesites.json");



function App() {


// for dummy data use 
  const siteNames = divesites.map((site) => site.name);
  const seaLife = divesites.map((site) => site.sealife);
  const dummydata = [
    {
      name: "Ishigaki",
      country: "JAPAN",
      sites: siteNames.slice(4),
      photoURL: "https://ippei-janine.com/travel-japan-islands/wp-content/uploads/aerial-view-of-ishigaki-island-with-coral-reefs-and-tropical-water-of-southern-japan-okinawa.jpg",
      map: IshigakiMap,
      chart: "hello",
      sealife: seaLife.slice(4),
      mapPhoto: "/Users/stephenmckillop/CCPreCourse/soloproject/src/client/src/data/photos/ishigakimap.jpg"
    },
    {
      name: "Nusa Penida",
      country: "INDONESIA",
      sites: siteNames.slice(0, 4),
      photoURL: "https://www.wandernesia.com/wp-content/uploads/2018/11/kelingking-beach.jpg", 
      map: IshigakiMap,
      chart: "hello",
      sealife: seaLife.slice(0,4),
      mapPhoto: "./data/photos/penidamap.jpg"
    }
  ]
    const [allLocations, setAllLocations] = useState(dummydata);
    const [selectedLocation, setSelectedLocation] = useState();
    const [showAllLocations, setShowAllLocations] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get('/api/sealife')
      .then(function (response) {
        setData(response.data);
      })
      console.log(typeof data);
      console.log(Array.isArray(data));
      console.log(data);
    }, []);


  return (
    <div className="App">
      <div>
          <Navbar allLocations={allLocations} setSelectedLocation={setSelectedLocation} setShowAllLocations={setShowAllLocations}/>
      </div>
        <div>
        {
          showAllLocations ? 
            <AllLocations allLocations={allLocations} setSelectedLocation={setSelectedLocation} setShowAllLocations={setShowAllLocations}/> : 
            <SingleLocation selectedLocation={selectedLocation} setShowAllLocations={setShowAllLocations}/>
        }
      </div>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data ? data.map(site => {
            return (
              <>
              <tr>
                <td>{site}</td>
              </tr>
              </>
            )
          }) : 
          <> </>}
      </header>
    </div>
    </div>
  );
}

export default App;

