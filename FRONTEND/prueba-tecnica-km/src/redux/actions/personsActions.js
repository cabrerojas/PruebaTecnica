import {
  GET_PERSONS_REQUEST,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAILURE,
  PUT_PERSON_REQUEST,
  PUT_PERSON_SUCCESS,
  CREATE_PERSON_REQUEST,
  CREATE_PERSON_SUCCESS,
  CREATE_PERSON_FAILURE,
  GET_REGIONES_REQUEST,
  GET_REGIONES_SUCCESS,
  GET_REGIONES_FAILURE,
  DELETE_PERSON_REQUEST,
  DELETE_PERSON_SUCCESS,
  DELETE_PERSON_FAILURE,
  GET_PERSON_BY_ID_REQUEST,
  GET_PERSON_BY_ID,
} from "./personsActionsType";

export const getPersonsRequest = () => ({
  type: GET_PERSONS_REQUEST,
  payload: {
    isFetching: true,
    hasError: false,
  },
});

export const getPersonsSuccess = (response) => ({
  type: GET_PERSONS_SUCCESS,
  payload: {
    isFetching: false,
    hasError: false,
    data: response.data,
  },
});

export const getPersonsFailure = (response) => ({
  type: GET_PERSONS_FAILURE,
  payload: {
    isFetching: false,
    hasError: true,
    response,
  },
});

export const putPersonRequest = (person, id) => ({
  type: PUT_PERSON_REQUEST,
  payload: {
    person,
    id,
    isFetching: true
  }
});

export const putPersonSuccess = (person) => ({
  type: PUT_PERSON_SUCCESS,
  payload: {
    person
  }
})

export const getPersonById = (person) => ({
  type: GET_PERSON_BY_ID,
  payload: {
    person,
  },
});

export const getPersonByIdRequest = () => ({
  type: GET_PERSON_BY_ID_REQUEST,
  payload: {
    isFetching: true,
  },
});

export const createPersonRequest = (person) => ({
  type: CREATE_PERSON_REQUEST,
  payload: {
    person,
  },
});

export const createPersonSuccess = (person) => ({
  type: CREATE_PERSON_SUCCESS,
  payload: {
    isFetching: false,
    hasError: false,
    person,
  },
});

export const createPersonFailure = (response) => ({
  type: CREATE_PERSON_FAILURE,
  payload: {
    isFetching: false,
    hasError: true,
    response,
  },
});

export const getRegionesRequest = () => ({
  type: GET_REGIONES_REQUEST,
  payload: {
    isFetching: true,
    hasError: false,
  },
});

export const getRegionesSuccess = (response) => ({
  type: GET_REGIONES_SUCCESS,
  payload: {
    isFetching: false,
    hasError: false,
    data: response.data,
  },
});

export const getRegionesFailure = (response) => ({
  type: GET_REGIONES_FAILURE,
  payload: {
    isFetching: false,
    hasError: true,
    response,
  },
});

export const deletePersonRequest = (id) => ({
  type: DELETE_PERSON_REQUEST,
  payload: {
    id,
  },
});

export const deletePersonSuccess = (id) => ({
  type: DELETE_PERSON_SUCCESS,
  payload: {
    id,
  },
});

export const deletePersonFailure = (id) => ({
  type: DELETE_PERSON_FAILURE,
  payload: {
    id,
  },
});
