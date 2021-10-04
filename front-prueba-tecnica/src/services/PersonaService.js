
import http from "../http-common";

const getAll = () => {
  return http.get("/Personas");
};

const get = id => {
  return http.get(`/Personas/${id}`);
};

const create = data => {
  return http.post("/Personas", data);
};

const update = (id, data) => {
  return http.put(`/Personas/${id}`, data);
};

const remove = id => {
  return http.delete(`/Personas/${id}`);
};

const findByTitle = title => {
  return http.get(`/Personas?title=${title}`);
};

const services = {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};

export default services;
