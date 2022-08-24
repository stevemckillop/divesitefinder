import React from "react";
import "./styles/Navbar.css"

export const Navbar = (props) => {

  const { allLocations, setSelectedLocation, setShowAllLocations } = props;
    return (
      <div>
  <section class="top-nav">
    <div id="title" >
      <h1 style={{cursor:'pointer'}} onClick={()=> setShowAllLocations(true)}> [divesite finder] </h1>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>View All Sealife</li>
      <li>Find All SeaLife by Divesites</li>
      <li>Sign In</li>
      <li>Sign Up to log your dives!</li>
    </ul>
  </section>
      </div>
    );
  };

