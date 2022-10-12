import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function IshigakiMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCyM8fv2b21b5UUvHiwbOIuOylbk0AprfA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}











// import React from "react";
// import { useMemo } from "react";
// //import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
// import googleMapReact from "google-map-react";


// export default function IshigakiMap () {


  // const isLoaded  = useLoadScript({ 
  //   googleMapsApiKey: "AIzaSyCyM8fv2b21b5UUvHiwbOIuOylbk0AprfA" 
  // });

  // console.log("Is Loaded", isLoaded)

  // if (!isLoaded) return <div>Loading...</div>;
  // return (
  //   <h1> Is loading</h1>
  //   {isLoaded ? <div>Loading.</div> : <div>oading.</div> }
  // )
    
  // function Map () {
  //   return ( 
  //     <GoogleMap 
  //       zoom={10}
  //       center={{lat:24.4064, lng:124.1754}} 
  //       mapContainerClassName="map-container">
  //     </GoogleMap> 
  //   )
  // }
// };


// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


// export default function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }


