import {
  GET_PERSONS_REQUEST,
  GET_PERSONS_SUCCESS,
  GET_PERSON_BY_ID,
  PUT_PERSON_REQUEST,
  PUT_PERSON_SUCCESS,
  GET_PERSON_BY_ID_REQUEST,
  GET_REGIONES_REQUEST,
  GET_REGIONES_SUCCESS,
  CREATE_PERSON_REQUEST,
  CREATE_PERSON_SUCCESS,
  DELETE_PERSON_FAILURE,
  DELETE_PERSON_REQUEST,
  DELETE_PERSON_SUCCESS,
} from "../actions/personsActionsType";

const initialState = {
  hasError: false,
  isFetching: false,
  personas: [],
  regiones: [],
  personaEdit: null
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS_REQUEST: {
      return {
        ...state,
        personaEdit: null,
        hasError: false,
      };
    }
    case GET_PERSONS_SUCCESS: {
      return {
        ...state,
        personaEdit: null,
        hasError: false,
        personas: action.payload.data,
      };
    }
    case PUT_PERSON_REQUEST: {
        return {
          ...state,
          personaEdit: null,
          hasError: false,
        };
      }
      case PUT_PERSON_SUCCESS: {
        return {
            ...state,
            isFetching: false,
        };
    }
    case GET_PERSON_BY_ID_REQUEST: {
        return {
            ...state,
            personaEdit: null
         }
    }
    case GET_PERSON_BY_ID: {
        return {
           ...state,
           personaEdit: action.payload.person
        }
    }
    case CREATE_PERSON_REQUEST: {
        return {
          ...state,
          hasError: false,
        };
      }
      case CREATE_PERSON_SUCCESS: {
        let currentPersonas = state.personas;
        let recentAddedPerson = action.payload.person;
        currentPersonas = currentPersonas.concat(recentAddedPerson);
        return {
          ...state,
          hasError: false,
          personas: currentPersonas,
        };
      }
    case GET_REGIONES_REQUEST: {
        return {
          ...state,
          hasError: false,
        };
      }
      case GET_REGIONES_SUCCESS: {
        return {
          ...state,
          hasError: false,
          regiones: action.payload.data,
        };
      }
    case DELETE_PERSON_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case DELETE_PERSON_SUCCESS: {
      let personsList = getAllOtherPersons(state.personas, action.payload.id);
      return {
        ...state,
        isFetching: false,
        personas: personsList,
      };
    }
    case DELETE_PERSON_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
};

const getAllOtherPersons = (allPersons, id) => {
  return allPersons.filter((x) => x.id !== id);
};

export default personsReducer;
