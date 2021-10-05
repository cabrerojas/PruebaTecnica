
import http from "../http-common";

const getAll = () => {
  return http.get("/Comunas");
};

const services = {
  getAll
};

export default services;
