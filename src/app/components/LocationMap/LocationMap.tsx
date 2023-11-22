import React from "react";
import "./LocationMap.scss";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@mui/icons-material/Room";
import { CONSTANTS } from "../../../constants";

function LocationMap() {
  return (
    <div className="map">
      <Map
        initialViewState={{
          longitude: 73.8669785,
          latitude: 18.4709063,
          zoom: 12,
        }}
        style={{ height: "100%", width: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={CONSTANTS.MAP_STR}
      >
        <NavigationControl />
        <Marker longitude={73.8669785} latitude={18.4709063} anchor="bottom">
          <RoomIcon style={{ color: "red", fontSize: "2rem" }} />
        </Marker>
      </Map>
    </div>
  );
}

export default LocationMap;
