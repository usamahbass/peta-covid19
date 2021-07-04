export type GeometryType = {
  type: string;
  coordinates: number[][];
};

export type PropertiesType = {
  ID: number;
  kode: number;
  Propinsi: string;
  SUMBER: string;
};

export type GeoJsonType = {
  type: string;
  geometry: GeometryType;
  properties: PropertiesType;
};
