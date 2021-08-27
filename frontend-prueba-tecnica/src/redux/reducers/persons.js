import {
  FETCH_ALL_PERSONS,
  DELETE_PERSON,
  DELETE_PERSON_ID,
  FETCH_PERSON,
  CREATE_PERSON,
  UPDATE_PERSON,
  CLEAN_PERSON_EDIT,
  SET_CONFIRM_MODAL_STATUS,
  CLEAN_DELETE_ID,
} from "../../constants/actionsTypes";

const initialState = {
  person_list: [],
  person_edit: null,
  person_id_delete: null,
  confirm_modal_status: false,
};

export default (persons = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PERSONS:
      return { ...persons, person_list: action.payload };
      break;
    case DELETE_PERSON_ID:
      return { ...persons, person_id_delete: action.payload };
      break;
    case SET_CONFIRM_MODAL_STATUS:
      return { ...persons, confirm_modal_status: action.payload };
      break;
    case DELETE_PERSON:
      return {
        ...persons,
        person_list: persons.person_list.filter(
          (person) => person.id !== action.payload
        ),
      };
      break;
    case FETCH_PERSON:
      return { ...persons, person_edit: action.payload };

      break;
    case UPDATE_PERSON:
      return {
        ...persons,
        person_list: persons.person_list.map((person) =>
          person.id === action.payload.id ? action.payload : person
        ),
      };

      break;
    case CREATE_PERSON:
      return { ...persons, person_list: persons.push(action.payload) };

      break;
    case CLEAN_PERSON_EDIT:
      return { ...persons, person_edit: null };

      break;
    case CLEAN_DELETE_ID:
      return { ...persons, person_id_delete: null };

      break;

    default:
      return persons;
  }
};
