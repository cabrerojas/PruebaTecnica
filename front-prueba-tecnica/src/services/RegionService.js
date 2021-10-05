
import http from "../http-common";

const getAll = () => {
  return http.get("/Regions");
};


const services = {
  getAll
};

export default services;
