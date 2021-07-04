import type { LatLngExpression } from "leaflet";
import type { PropListDataModel } from "~/models";
import {
  SET_BASE_MAP,
  SET_DATA_INFO,
  SET_LAYER,
  SET_MARKER_TYPE,
  SET_POSITION,
} from "./type";

export const initalState = {
  position: null,
  dataInfo: {},
  basemap: "googlemap",
  markerType: "covid",
  layer: ["batas_prov"],
};

export type initialStateType = {
  dataInfo: PropListDataModel;
  basemap: string;
  markerType: string;
  position: LatLngExpression;
  layer: string[];
};

type ReducerAction = { type: string; payload: {} | string };

export const reducer = (state: initialStateType, action: ReducerAction) => {
  switch (action.type) {
    case SET_BASE_MAP:
      return { ...state, basemap: action.payload };
    case SET_LAYER:
      return { ...state, layer: action.payload };
    case SET_DATA_INFO:
      return { ...state, dataInfo: action.payload };
    case SET_POSITION:
      return { ...state, position: action.payload };
    case SET_MARKER_TYPE:
      return { ...state, markerType: action.payload };
  }
};
