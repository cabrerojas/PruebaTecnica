import {
  FETCH_ALL_PERSONS,
  DELETE_PERSON,
  FETCH_PERSON,
  CREATE_PERSON,
  UPDATE_PERSON,
  CLEAN_PERSON_EDIT,
  ADD_MESSAGE,
  DELETE_PERSON_ID,
  SET_CONFIRM_MODAL_STATUS,
  CLEAN_DELETE_ID,
  ADD_ERROR_MESSAGE,
} from "../../constants/actionsTypes";
import * as API_PERSON from "../../api/Person";

export const getPersons = () => async (dispatch) => {
  try {
    const { data } = await API_PERSON.fetchPersons();

    dispatch({ type: FETCH_ALL_PERSONS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar obtener a las personas",
    });
  }
};

export const getPerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.fetchPerson(id);

    dispatch({ type: FETCH_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al internar obtener a la persona",
    });
  }
};

export const updatePerson = (id, personData) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.updatePerson(id, personData);
    dispatch({ type: ADD_MESSAGE, payload: "Persona editada con éxito" });
    dispatch({ type: UPDATE_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar actualizar",
    });
  }
};

export const createPerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.createPerson(id);
    dispatch({ type: ADD_MESSAGE, payload: "Persona creada con éxito" });
    dispatch({ type: CREATE_PERSON, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar crear",
    });
  }
};

export const deletePerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.deletePerson(id);
    dispatch({ type: DELETE_PERSON, payload: data.id });
    dispatch({ type: ADD_MESSAGE, payload: "Persona eliminada con éxito" });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar eliminar",
    });
  }
};

export const setShowConfirmModal = (status) => async (dispatch) => {
  try {
    dispatch({ type: SET_CONFIRM_MODAL_STATUS, payload: status });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar eliminar",
    });
  }
};
export const setDeleteId = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PERSON_ID, payload: id });
  } catch (error) {
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: "Ha ocurrido un error al intentar eliminar",
    });
  }
};
export const cleanDeleteId = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAN_DELETE_ID, payload: "" });
  } catch (error) {
    dispatch({ type: ADD_ERROR_MESSAGE, payload: "Ha ocurrido un error" });
  }
};
export const cleanPersonEdit = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAN_PERSON_EDIT, payload: "" });
  } catch (error) {
    dispatch({ type: ADD_ERROR_MESSAGE, payload: "Ha ocurrido un error" });
  }
};
