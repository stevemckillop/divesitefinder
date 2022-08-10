import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MyMap = withGoogleMap((props) => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={5}
      defaultCenter={{ lat: 38.7392, lng: -100.9903 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker) => (
        <Marker
          key={marker.id}
          onRightClick={() => props.handleActiveMarker(marker.id)}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        >
          {props.activeMarker === marker.id ? (
            <InfoWindow onCloseClick={() => props.setActiveMarker(null)}>
              <div>
                {marker.name}
                <br />
                <br />
  
                {marker.restaurants.map((el) => {
                  return el;
                })}
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ));

  export default function Map(props) {
    const { locations } = props;
    // console.log(locations);
  
    const { activeMarker } = props;
    const { setActiveMarker } = props;
  
    const { handleActiveMarker } = props;
  
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {
          setActiveMarker(null);
        }}
        markers={locations}
        onMarkerRightClick={() => {}}
        activeMarker={activeMarker}
        setActiveMarker={setActiveMarker}
        handleActiveMarker={handleActiveMarker}
      />
    );
  }  