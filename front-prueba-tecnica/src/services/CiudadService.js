
import http from "../http-common";

const getAll = () => {
  return http.get("/Ciudads");
};


const services = {
  getAll
};

export default services;
