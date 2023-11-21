import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin";
import "./map.css";

/**
 * Define the coordonates of the location
 * @address the label
 * @lat the latitude
 * @lng the longitude
 * @zoom the zoom level
 * @text the description
 */
function Map() {
  const coordinates = {
    location: {
      address: "GoMyCode, Point E, Dakar",
      lat: 14.696915190636549,
      lng: -17.456928251785076,
    },
    zoom: 17,
  };

  return (
    <div className="map">
      <GoogleMapReact
        className="map_iframe"
        bootstrapURLKeys={{ key: "AIzaSyAkb0z9URmiJzi2mi0B7wA0LoMbJGsGb-E" }}
        defaultCenter={coordinates.location}
        defaultZoom={coordinates.zoom}
      >
        <LocationPin
          lat={coordinates.location.lat}
          lng={coordinates.location.lng}
          text={coordinates.location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
