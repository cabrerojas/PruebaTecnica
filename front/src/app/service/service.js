import axios from "axios";

const controllerCreatePersona = async (data) => {
  try {
    const response = await axios.post("/api/autenticar", data);
    if (response.data !== null) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};

const controllerUpdatePersona = async (data) => {
  try {
    const response = await axios.post("/api/autenticar", data);
    if (response.data !== null) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};

const controllerGetAllPersona = async (data) => {
  try {
    const response = await axios.post("/api/autenticar", data);
    if (response.data !== null) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};

const controllerGetPersonaById = async (data) => {
  try {
    const response = await axios.post("/api/autenticar", data);
    if (response.data !== null) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};

const controllerDeletePersonaById = async (data) => {
  try {
    const response = await axios.post("/api/autenticar", data);
    if (response.data !== null) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};

export {
  controllerGetAllPersona,
  controllerCreatePersona,
  controllerGetPersonaById,
  controllerUpdatePersona,
  controllerDeletePersonaById,
};
