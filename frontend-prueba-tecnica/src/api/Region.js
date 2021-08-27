import { API } from "./Index";

export const fetchRegions = () => API.get("/regions");
export const fetchCities = (regionCodigo) =>
  API.get("/regions/" + regionCodigo);
  export const fetchCommunes = (regionCodigo, ciudadCodigo) =>
  API.get("/regions/" + regionCodigo + "/city/" + ciudadCodigo);
