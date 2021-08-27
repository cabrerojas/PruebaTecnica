import {
  FETCH_ALL_PERSONS,
  DELETE_PERSON,
  FETCH_PERSON,
  CREATE_PERSON,
  UPDATE_PERSON,
  CLEAN_PERSON_EDIT,
  ADD_MESSAGE,
} from "../../constants/actionsTypes";
import * as API_PERSON from "../../api/Person";

export const getPersons = () => async (dispatch) => {
  try {
    const { data } = await API_PERSON.fetchPersons();

    dispatch({ type: FETCH_ALL_PERSONS, payload: data });
  } catch (error) {
    //Manejar errores acá
    console.log(error.message);
  }
};

export const getPerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.fetchPerson(id);

    dispatch({ type: FETCH_PERSON, payload: data });
  } catch (error) {
    //Manejar errores acá
    console.log(error.message);
  }
};

export const updatePerson = (id, personData) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.updatePerson(id, personData);
    console.log("gola");

    dispatch({ type: ADD_MESSAGE, payload: "Persona editada con éxito" });
    dispatch({ type: UPDATE_PERSON, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.createPerson(id);
    dispatch({ type: ADD_MESSAGE, payload: "Persona creada con éxito" });
    dispatch({ type: CREATE_PERSON, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePerson = (id) => async (dispatch) => {
  try {
    const { data } = await API_PERSON.deletePerson(id);
    dispatch({ type: DELETE_PERSON, payload: data.id });
    dispatch({ type: ADD_MESSAGE, payload: "Persona eliminada con éxito" });
  } catch (error) {
    console.log(error);
  }
};

export const cleanPersonEdit = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAN_PERSON_EDIT, payload: "" });
  } catch (error) {
    console.log(error);
  }
};
