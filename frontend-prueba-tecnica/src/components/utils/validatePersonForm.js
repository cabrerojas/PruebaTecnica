import validateRut from "./validateRut";

const validatePersonForm = (personData) => {
  //let errors = {};
  const { errors, body, dv } = validateRut(personData.run);
  console.log(errors);
  /*if (!personData.run.trim()) {
    errors.run = "El RUT es requerido";
  } else {
    
  }*/

  if (!personData.nombres.trim()) {
    errors.nombres = "El campo Nombres es requerido";
  }

  if (!personData.apellidoPaterno.trim()) {
    errors.apellidoPaterno = "El campo Apellido paterno es requerido";
  }
  if (!personData.apellidoMaterno.trim()) {
    errors.apellidoMaterno = "El campo Apellido materno es requerido";
  }
  if (!personData.email) {
    errors.email = "El campo email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(personData.email)) {
    errors.email = "El correo es incorrecto";
  }

  if (!personData.sexoCodigo) {
    errors.sexoCodigo = "Debe seleccionar un sexo";
  }
  if (!personData.fechaNacimiento) {
    errors.fechaNacimiento = "Debe seleccionar una fecha de nacimiento";
  }
  if (!personData.regionCodigo) {
    errors.regionCodigo = "Debe seleccionar una región";
  }
  if (!personData.ciudadCodigo) {
    errors.ciudadCodigo = "Debe seleccionar una ciudad";
  }
  if (!personData.comunaCodigo) {
    errors.comunaCodigo = "Debe seleccionar una comuna";
  }
  if (!personData.direccion) {
    errors.direccion = "Debe agregar una dirección";
  }

  if (!Number.isInteger(personData.telefono)) {
    errors.telefono = "El campo teléfono solo acepta números";
  } else if (!personData.telefono) {
    errors.telefono = "Debe agregar un teléfono";
  }

  if (!personData.observaciones) {
    errors.observaciones = "Debe agregar una observación";
  }

  return { errorsRes: errors, body, dv };
};

export default validatePersonForm;

/*


    runCuerpo: "",
    runDigito: "",
    observaciones: "",

*/
