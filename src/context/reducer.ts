import { Reducer } from "react";
import type { LatLngExpression } from "leaflet";
import type { PropListDataModel } from "~/models";
import { TypesReducer } from "./type";

export type initialStateType = {
  dataInfo: PropListDataModel | any;
  basemap: string;
  markerType: string;
  position: LatLngExpression | any;
  layer: string[];
};

export const initialState = {
  position: null,
  dataInfo: {},
  basemap: "googlemap",
  markerType: "covid",
  layer: ["batas_prov"],
};

type ReducerActionType = { type: string; payload: {} | string };

export const reducer: Reducer<initialStateType | any, ReducerActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case TypesReducer.SET_BASE_MAP:
      return { ...state, basemap: action.payload };
    case TypesReducer.SET_LAYER:
      return { ...state, layer: action.payload };
    case TypesReducer.SET_DATA_INFO:
      return { ...state, dataInfo: action.payload };
    case TypesReducer.SET_POSITION:
      return { ...state, position: action.payload };
    case TypesReducer.SET_MARKER_TYPE:
      return { ...state, markerType: action.payload };
  }
};
