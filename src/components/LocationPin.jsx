/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const LocationPin = ({ text }) => (
  <div>
    <Icon className="map_icon" icon="teenyicons:pin-solid" />
    <p>{text}</p>
  </div>
);
export default LocationPin;
