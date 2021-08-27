import {
  FETCH_REGIONS,
  FETCH_CITIES,
  FETCH_COMMUNES,
} from "../../constants/actionsTypes";

export default (
  regions = { regions: [], cities: [], communes: [] },
  action
) => {
  switch (action.type) {
    case FETCH_REGIONS:
      return { ...regions, regions: action.payload };
      break;
    case FETCH_CITIES:
      return { ...regions, cities: action.payload };
      break;
    case FETCH_COMMUNES:
      return { ...regions, communes: action.payload };
      break;

    default:
      return regions;
  }
};
