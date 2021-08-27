const validateRut = (rut) => {
  // Despejar Puntos
  let errors = {};
  let valor = rut.replaceAll(".", "");
  // Despejar Guión
  valor = valor.replace("-", "");

  // Aislar Cuerpo y Dígito Verificador
  const cuerpo = valor.slice(0, -1);
  let dv = valor.slice(-1).toUpperCase();
  let returnDv = dv;

  // Formatear RUN
  rut = cuerpo + "-" + dv;

  // Si no cumple con el mínimo ej. (n.nnn.nnn)
  if (cuerpo.length < 7) {
    errors.run = "RUT Incompleto";
    return { errors: errors };
  }

  // Calcular Dígito Verificador
  let suma = 0;
  let multiplo = 2;

  // Para cada dígito del Cuerpo
  for (let i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    let index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  let dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

  // Validar que el Cuerpo coincide con su Dígito Verificador
  if (dvEsperado != dv) {
    errors.run = "RUT Incorrecto";
    return { errors: errors };
  } else {
    return { errors: {}, body: cuerpo, dv: returnDv };
  }
};

export default validateRut;
