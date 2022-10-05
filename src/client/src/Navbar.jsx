import React from "react";
import "./styles/Navbar.css"

export const Navbar = (props) => {

    return (
      <div>
  <section class="top-nav">
    <div id="title" >
      <h3 style={{cursor:'pointer'}} onClick={()=> props.setMainPageView("Locations")} > [divesite finder] </h3>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li style={{cursor:'pointer'}} onClick={() => props.setMainPageView("AllSeaLife")}>View All Sealife</li>
      <li style={{cursor:'pointer'}} >Find All SeaLife by Divesites</li>
      <li style={{cursor:'pointer'}} >Sign In</li>
      <li style={{cursor:'pointer'}} >Sign Up to log your dives!</li>
    </ul>
  </section>
      </div>
    );
  };

