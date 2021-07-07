export type AreaUserAdress = {
  village: string;
  town: string;
  state: string;
  country: string;
  county: string;
  country_code: string;
};

export type AreaUserType = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  place_rank: 26;
  category: string;
  type: string;
  importance: number;
  addresstype: string;
  name: null;
  display_name: string;
  address: AreaUserAdress;
  boundingbox: string[];
};
