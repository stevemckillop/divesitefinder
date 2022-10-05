import React from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"



function Map () {
  return <GoogleMap zoom={10} center={{lat:24.4064, lng:124.1754}} mapContainerClassName="mapContainer">
  </GoogleMap> 
}

export default function IshigakiMap () {

  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  });
    
  if (!isLoaded) return <div>Loading...</div>
  return (
     <div>Hello</div>
    );
  };


