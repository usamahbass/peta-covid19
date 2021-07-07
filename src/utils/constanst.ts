import L from "leaflet";
import CovidIcon from "~/assets/png/covid.png";

type TIPEMARKERPROPS = {
  CIRCLE: string;
  DEFAULT: string;
  COVID: string;
};

export const TIPE_MARKER: TIPEMARKERPROPS = {
  CIRCLE: "circlemarker",
  DEFAULT: "marker",
  COVID: "covid",
};

export const COVID_MARKER = L.icon({
  iconUrl: CovidIcon,
  iconSize: [30, 30],
});
