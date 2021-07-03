import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { save_all_persona } from "../actions/persona";
import {
  controllerGetPersonaById,
  controllerCreatePersona,
  controllerUpdatePersona,
  controllerDeletePersonaById,
  controllerGetAllPersona,
} from "../app/service/service";
import {
  GET_ALL_PERSONA,
  GET_PERSONA_BY_ID,
  CREATE_PERSONA,
  UPDATE_PERSONA,
  DELETE_PERSONA_BY_ID,
} from "../constans/ActionTypes";

const getallPersonaRequest = async () =>
  await controllerGetAllPersona()
    .then((response) => response)
    .catch((error) => error);

const getPersonaByIdRequest = async (id) =>
  await controllerGetPersonaById(id)
    .then((response) => response)
    .catch((error) => error);

const deletePersonaByIdRequest = async (id) =>
  await controllerDeletePersonaById(id)
    .then((response) => response)
    .catch((error) => error);

const createPersonaRequest = async (data) =>
  await controllerCreatePersona(data)
    .then((response) => response)
    .catch((error) => error);

const updatePersonaRequest = async (data) =>
  await controllerUpdatePersona(data)
    .then((response) => response)
    .catch((error) => error);

function* getAllPersonaData() {
  try {
    const all = yield call(getallPersonaRequest);
    if (all != null) {
      yield put(save_all_persona(all));
    }
  } catch (error) {
    return error;
  }
}

function* deletePersonaByIdData(id) {
  try {
    const isDelete = yield call(deletePersonaByIdRequest, id);
    if (all != null) {
      return isDelete;
    }
  } catch (error) {
    return error;
  }
}

function* createPersonaData(persona) {
  try {
    const persona_response = yield call(createPersonaRequest, persona);
    if (persona_response != null) {
      return persona_response;
    }
  } catch (error) {
    return error;
  }
}

function* updatePersonaData(persona) {
  try {
    const persona_update_response = yield call(updatePersonaRequest, persona);
    if (persona_update_response != null) {
      return persona_update_response;
    }
  } catch (error) {
    return error;
  }
}

function* getPersonaByIdData(id) {
    try {
      const persona_response = yield call(getPersonaByIdRequest, id);
      if (persona_response != null) {
        return persona_response;
      }
    } catch (error) {
      return error;
    }
  }

export function* getAllPersona() {
  yield takeEvery(GET_ALL_PERSONA, getAllPersonaData);
}

export function* deletePersonaById() {
  yield takeEvery(DELETE_PERSONA_BY_ID, deletePersonaByIdData);
}

export function* createPersona() {
  yield takeEvery(CREATE_PERSONA, createPersonaData);
}

export function* updatePersona() {
  yield takeEvery(UPDATE_PERSONA, updatePersonaData);
}

export function* getPerosnaById() {
  yield takeEvery(GET_PERSONA_BY_ID, getPersonaByIdData);
}

export default function* rootSaga() {
  yield all([
    fork(getPerosnaById),
    fork(getAllPersona),
    fork(deletePersonaById),
    fork(createPersona),
    fork(updatePersona),
  ]);
}
