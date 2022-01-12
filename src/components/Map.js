import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from "react-map-gl";

function Map() {
  // Set up Mapbox credentials and map
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const MAP_STYLE = process.env.REACT_APP_MAP_STYLE_CHOICE;
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
    top: 10,
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={MAP_STYLE} // insert choice of map style here from Mapbox Studio
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
}

export default Map;
