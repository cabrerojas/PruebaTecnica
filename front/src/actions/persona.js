import {
  GET_ALL_PERSONA,
  GET_PERSONA_BY_ID,
  CREATE_PERSONA,
  UPDATE_PERSONA,
  DELETE_PERSONA_BY_ID,
  SAVE_ALL_PERSONA,
} from "../constans/ActionTypes";

export const get_all_persona = () => {
  return {
    type: GET_ALL_PERSONA,
    payload: null,
  };
};

export const get_persona_by_id = (id) => {
  return {
    type: GET_PERSONA_BY_ID,
    payload: id,
  };
};

export const create_persona = (persona) => {
  return {
    type: CREATE_PERSONA,
    payload: persona,
  };
};

export const update_persona = (persona) => {
  return {
    type: UPDATE_PERSONA,
    payload: persona,
  };
};

export const delete_persona_by_id = (id) => {
  return {
    type: DELETE_PERSONA_BY_ID,
    payload: id,
  };
};

export const save_all_persona = (data) => {
    return {
      type: SAVE_ALL_PERSONA,
      payload: data,
    };
  };
