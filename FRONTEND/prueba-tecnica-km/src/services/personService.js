import {
  get as _get,
  post as _post,
  getById as _getById,
  deleteById as _deleteById,
  put as _put,
} from "../services/entityService";

//This should come from config settings
const API_ENDPOINT = `https://localhost:44399`;
const ENTITY_URI = `${API_ENDPOINT}/Persona`;

export const get = async (extension = "") =>
  _get(`${ENTITY_URI}/${extension}`, undefined);

export const getRegiones = async (extension = "") =>
  _get(`${API_ENDPOINT}/${extension}`, undefined);

export const getById = async (id) => _getById(ENTITY_URI, id);

export const deleteById = async (id) => _deleteById(ENTITY_URI, id);

export const put = async (id, persona) => _put(`${ENTITY_URI}/${id}`, persona);

export const post = async (params) => {
  return _post(ENTITY_URI, params);
};
