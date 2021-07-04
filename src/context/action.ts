import {
  SET_BASE_MAP,
  SET_DATA_INFO,
  SET_LAYER,
  SET_MARKER_TYPE,
  SET_POSITION,
} from "./type";

export const setBaseMap = (value: string) => ({
  type: SET_BASE_MAP,
  payload: value,
});

export const setDataInfo = (dataInfo: object) => ({
  type: SET_DATA_INFO,
  payload: dataInfo,
});

export const setMarkerType = (markerType: string) => ({
  type: SET_MARKER_TYPE,
  payload: markerType,
});

export const setPosition = (position: object) => ({
  type: SET_POSITION,
  payload: position,
});

export const setLayer = (layer: string[]) => ({
  type: SET_LAYER,
  payload: layer,
});
