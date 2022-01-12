import React, { useEffect, useState } from "react";
import ReactMapGL, {
    GeolocateControl,
    Marker,
    NavigationControl,
  } from "react-map-gl";

function Map() {
  // Set up Mapbox credentials and map
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const [viewport, setViewport] = useState({
    height: "99vh",
    width: "99vw",
    latitude: 53.378025,
    longitude: -1.463758,
    zoom: 4,
    mapboxApiAccessToken: MAPBOX_TOKEN,
  });

  const geolocateControlStyle = {
    right: 10,
    top: 10
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/snowypigeon/cknzujve10eb517l37gtvlynl/draft" // insert choice of map style here from Mapbox Studio
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
}

export default Map;
