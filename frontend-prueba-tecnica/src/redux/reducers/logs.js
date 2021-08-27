import {
  ADD_ERROR_MESSAGE,
  ADD_MESSAGE,
  CLEAN_MESSAGES,
} from "../../constants/actionsTypes";

export default (logs = { errorMessage: null, message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR_MESSAGE:
      return { ...logs, errorMessage: action.payload };

    case ADD_MESSAGE:
      return { ...logs, message: action.payload };

    case CLEAN_MESSAGES:
      return { ...logs, errorMessage: null, message: null };

    default:
      return logs;
  }
};
