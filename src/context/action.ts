import { TypesReducer } from "./type";

export const setBaseMap = (value: string) => ({
  type: TypesReducer.SET_BASE_MAP,
  payload: value,
});

export const setDataInfo = (dataInfo: object) => ({
  type: TypesReducer.SET_DATA_INFO,
  payload: dataInfo,
});

export const setMarkerType = (markerType: string) => ({
  type: TypesReducer.SET_MARKER_TYPE,
  payload: markerType,
});

export const setPosition = (position: object) => ({
  type: TypesReducer.SET_POSITION,
  payload: position,
});

export const setLayer = (layer: string[]) => ({
  type: TypesReducer.SET_LAYER,
  payload: layer,
});
