import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:44379/api/",
});
