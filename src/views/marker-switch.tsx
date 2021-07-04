import React, { useContext } from "react";
import { Marker, CircleMarker, useMap } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "~/context";
import { PropListDataModel } from "~/models";
import { COVID_MARKER, TIPE_MARKER } from "~/utils/constanst";

interface MarkerSwitchProps {
  el: PropListDataModel;
  onOpen: () => {};
}

const MarkerSwitch = ({ el, onOpen }: MarkerSwitchProps) => {
  const map = useMap();

  const [context, setContext] = useContext(AppContext);

  const type = context?.markerType;

  switch (type) {
    case TIPE_MARKER.DEFAULT:
      return (
        <Marker
          key={uuidv4()}
          position={[el.lokasi?.lat, el.lokasi?.lon]}
          eventHandlers={{
            click: (e) => {
              map.flyTo(e.latlng, 10);
              onOpen();
              setContext((prevContext: any) => ({
                ...prevContext,
                dataInfo: el,
              }));
            },
          }}
        />
      );
    case TIPE_MARKER.CIRCLE:
      return (
        <CircleMarker
          key={uuidv4()}
          center={[el.lokasi?.lat, el.lokasi?.lon]}
          eventHandlers={{
            click: (e) => {
              map.flyTo(e.latlng, 10);
              onOpen();
              setContext((prevContext: any) => ({
                ...prevContext,
                dataInfo: el,
              }));
            },
          }}
        />
      );

    case TIPE_MARKER.COVID:
      return (
        <Marker
          key={uuidv4()}
          icon={COVID_MARKER}
          position={[el.lokasi?.lat, el.lokasi?.lon]}
          eventHandlers={{
            click: (e) => {
              map.flyTo(e.latlng, 10);
              onOpen();
              setContext((prevContext: any) => ({
                ...prevContext,
                dataInfo: el,
              }));
            },
          }}
        />
      );

    default:
      return (
        <CircleMarker
          key={uuidv4()}
          center={[el.lokasi?.lat, el.lokasi?.lon]}
          eventHandlers={{
            click: (e) => {
              map.flyTo(e.latlng, 10);
              onOpen();
              setContext((prevContext: any) => ({
                ...prevContext,
                dataInfo: el,
              }));
            },
          }}
        />
      );
  }
};

export default MarkerSwitch;
