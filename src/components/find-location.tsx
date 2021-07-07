import React, { useContext, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { AppContext } from "~/context";
import CurrentLocationIcon from "~/assets/png/current-marker.png";
import type { AreaUserType } from "~/models";
import { setUserArea } from "~/context/action";
import axios from "axios";

const CurrentMarkerIcon = L.icon({
  iconUrl: CurrentLocationIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const YourLocation = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.position) {
      async function getUserArea() {
        const response = await axios.get<AreaUserType>(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${state?.position?.lat}&lon=${state.position?.lng}`
        );

        dispatch(setUserArea(response.data));
      }

      getUserArea();
    }
  }, [state.position]);

  return state?.position ? (
    <Marker icon={CurrentMarkerIcon} position={state?.position}>
      <Popup>Kamu disini</Popup>
    </Marker>
  ) : null;
};
