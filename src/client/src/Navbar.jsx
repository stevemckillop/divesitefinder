import React from "react";
import "./styles/Navbar.css"

export const Navbar = ({
    
  }) => {
    return (
      <div>
  <section class="top-nav">
    <div id="title">
      [divesite finder]
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>Ishigaki Dive Site Map</li>
      <li>Penida Dive Site Map</li>
      <li>See All SeaLife</li>
      <li>Find All SeaLife by Divesites</li>
    </ul>
  </section>
      </div>
    );
  };

