import {
  GET_ALL_PERSONA,
  GET_PERSONA_BY_ID,
  CREATE_PERSONA,
  UPDATE_PERSONA,
  DELETE_PERSONA_BY_ID,
  SAVE_ALL_PERSONA,
} from "../constans/ActionTypes";

const initialPersona = {
    /*all_persona: null,
    get_persona: null,
    create_persona: null,
    update_persona: null,
    delete_persona: null,*/
    save_all_persona: null
};

export default (state = initialPromotion, action) => {
    switch (action.type) {
      /*case GET_ALL_PERSONA: {
        return {
          ...state,
          all_persona: action.payload,
        };
      }
      case GET_PERSONA_BY_ID: {
        return {
          ...state,
          get_persona: action.payload,
        };
      }
      case CREATE_PERSONA: {
        return {
          ...state,
          create_persona: action.payload,
        };
      }
      case UPDATE_PERSONA: {
        return {
          ...state,
          update_persona: action.payload,
        };
      }
      case DELETE_PERSONA_BY_ID: {
        return {
          ...state,
          delete_persona: action.payload,
        };
      }*/
      case SAVE_ALL_PERSONA: {
        return {
          ...state,
          save_all_persona: action.payload,
        };
      }
      default:
        return state;
    }
  };
  