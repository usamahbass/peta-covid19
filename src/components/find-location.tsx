import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { AppContext } from "~/context";
import CurrentLocationIcon from "~/assets/png/current-marker.png";

const CurrentMarkerIcon = L.icon({
  iconUrl: CurrentLocationIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const YourLocation = () => {
  const [context] = useContext(AppContext);

  return context?.position ? (
    <Marker icon={CurrentMarkerIcon} position={context?.position}>
      <Popup>Kamu disini</Popup>
    </Marker>
  ) : null;
};
