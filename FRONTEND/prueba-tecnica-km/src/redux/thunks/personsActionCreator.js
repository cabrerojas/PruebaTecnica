import {
  get,
  getRegiones,
  put,
  getById,
  post,
  deleteById,
} from "../../services/personService";
import { success, error } from "react-notification-system-redux";

import {
  getPersonsRequest,
  getPersonsSuccess,
  getPersonsFailure,
  getRegionesRequest,
  getRegionesSuccess,
  getRegionesFailure,
  deletePersonRequest,
  deletePersonSuccess,
  deletePersonFailure,
  createPersonFailure,
  createPersonRequest,
  createPersonSuccess,
  getPersonById,
  getPersonByIdRequest,
  putPersonRequest,
  putPersonSuccess
} from "../actions/personsActions";

const notification = {
  title: "Generic Title",
  message: "Generic Message",
  position: "tr",
};

export const tryGetPersons = () => {
  return async (dispatch, getState) => {
    dispatch(getPersonsRequest());
    let response = await get();
    if (!response.success) {
      dispatch(getPersonsFailure());
      showError(response);
      return;
    }

    dispatch(getPersonsSuccess(response));
  };
};

export const tryUpdatePerson = (person, id, history) => {
  return async (dispatch, getState) => {
      dispatch(putPersonRequest(person));

      let response = await put(id.replace('}', ''), person);
      if (response.hasOwnProperty("error")) {
          dispatch(error({
              ...notification,
              title: 'Error!',
              message: `Ocurrio un error al tratar de actualizar la persona. Detalle ${response.error}`
          }));           
      }
      else
      {
          dispatch(putPersonSuccess(response.data));
          tryGetPersons();
          history.push("/persona");
          dispatch(success({
              ...notification,
              title: 'Actualización exitosa!',
              message: 'Se ha actualizado exitosamente la persona'
          }));
      }
  }
}

export const tryCreatePerson = (person, history) => {
  return async (dispatch, getState) => {
    dispatch(createPersonRequest(person));

    let response = await post(person);
    if (response.hasOwnProperty("error")) {
      dispatch(createPersonFailure(person));
      dispatch(
        error({
          ...notification,
          title: "Error!",
          message: `Ocurrio un error al tratar de crear la persona. Detalle ${response.error}`,
        })
      );
    } else {
      dispatch(createPersonSuccess(person));
      dispatch(
        success({
          ...notification,
          title: "Actualización exitosa!",
          message: "Se ha creado exitosamente el Usuario",
        })
      );
      history.push("/persona");
    }
  };
};

export const tryGetPersonById = (id) => {
  return async (dispatch, getState) => {
    dispatch(getPersonByIdRequest());
    let response = await getById(id.replace('}', ''));
    if (!response.success) {
      showError(response);
      return;
    }
    dispatch(getPersonById(response.data));
  }
}

export const tryGetRegiones = () => {
  return async (dispatch, getState) => {
    dispatch(getRegionesRequest());
    let response = await getRegiones("Regiones");
    if (!response.success) {
      dispatch(getRegionesFailure());

      showError(response);

      return;
    }

    dispatch(getRegionesSuccess(response));
  };
};

export const tryDeletePerson = (id) => {
  return async (dispatch, getState) => {
    dispatch(deletePersonRequest());

    let response = await deleteById(id);
    if (!response.success) {
      dispatch(deletePersonFailure(id));
      dispatch(
        error({
          ...notification,
          title: "Error!",
          message: `Ocurrio un error al tratar de eliminar la persona. Detalle ${response.error}`,
        })
      );
    } else {
      dispatch(deletePersonSuccess(id));

      dispatch(
        success({
          ...notification,
          title: "Persona eliminada!",
          message: "Se ha eliminado exitosamente el Usuario",
        })
      );
    }
  };
};

const showError = (response) => {
  return async (dispatch) => {
    dispatch(
      error({
        ...notification,
        title: "Oops!",
        message: `Ha ocurrido un error! Detalle: '${response.error.message}'`,
      })
    );
  };
};
