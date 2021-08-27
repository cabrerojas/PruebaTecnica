import { API } from "./Index";

export const fetchPersons = () => API.get("/personas");
export const fetchPerson = (id) => API.get("/personas/" + id);
export const createPerson = (newPerson) => API.post("/personas", newPerson);
export const updatePerson = (id, updatedPerson) =>
  API.put("/personas/" + id, updatedPerson);
export const deletePerson = (id) => API.delete("/personas/" + id);
