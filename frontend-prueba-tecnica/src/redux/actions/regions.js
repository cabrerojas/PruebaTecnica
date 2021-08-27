import {
  FETCH_REGIONS,
  FETCH_CITIES,
  FETCH_COMMUNES,
  ADD_ERROR_MESSAGE,
} from "../../constants/actionsTypes";
import * as API_REGION from "../../api/Region";

export const getRegions = () => async (dispatch) => {
  try {
    const { data } = await API_REGION.fetchRegions();

    dispatch({ type: FETCH_REGIONS, payload: data });
  } catch (error) {
    //Manejar errores acá
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar obtener las regiones",
    });
  }
};

export const getCities = (regionCodigo) => async (dispatch) => {
  try {
    const { data } = await API_REGION.fetchCities(regionCodigo);

    dispatch({ type: FETCH_CITIES, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar obtener las ciudades",
    });
  }
};

export const getCommunes = (regionCodigo, ciudadCodigo) => async (dispatch) => {
  try {
    const { data } = await API_REGION.fetchCommunes(regionCodigo, ciudadCodigo);

    dispatch({ type: FETCH_COMMUNES, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar obtener las comunas",
    });
  }
};
