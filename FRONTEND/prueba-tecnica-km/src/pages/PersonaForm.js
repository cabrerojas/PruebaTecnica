import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tryGetRegiones,
  tryCreatePerson,
  tryGetPersonById,
  tryUpdatePerson
} from "../redux/thunks/personsActionCreator";
import { useHistory, useParams } from "react-router-dom";

const PersonaForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tryGetRegiones());
  }, [dispatch]);

  const history = useHistory();

  let { id } = useParams();

  const [isNewUser] = useState(id === "0");

  useEffect(() => {
    if (!isNewUser) {
      dispatch(tryGetPersonById(id));
    }
  }, [isNewUser, dispatch, id]);

  const runInputRef = useRef();
  const nombresInputRef = useRef();
  const apellidoPaternoInputRef = useRef();
  const apellidoMaternoInputRef = useRef();
  const emailInputRef = useRef();
  const sexoInputRef = useRef();
  const fechaNacimientoInputRef = useRef();
  const direccionInputRef = useRef();
  const telefonoInputRef = useRef();
  const observacionesInputRef = useRef();

  const regiones = useSelector((state) => state.personsReducer.regiones);
  const personaEdit = useSelector((state) =>
    !isNewUser ? state.personsReducer.personaEdit : null
  );
  const [regionSelected, setRegion] = useState(0);
  const [ciudadSelected, setCiudad] = useState(0);
  const [comunaSelected, setComuna] = useState(0);
  const [ciudades, setCiudadesByRegion] = useState();
  const [comunas, setComunasByCiudad] = useState();
  const [fechaNacimiento, setFechaNacimiento] = useState();

  useLayoutEffect(() => {
    console.log(personaEdit);
    if (personaEdit)
      setFechaNacimiento(
        new Date(personaEdit?.fechaNacimiento).toISOString().split("T")[0]
      );
  }, [personaEdit]);

  let checkChileanRut = (rut) => {
    let rutValue = rut.replaceAll(".", "");
    rutValue = rutValue.replace("-", "");
    let firstDigits = rutValue.slice(0, -1);
    let dv = rutValue.slice(-1).toUpperCase();
    rut = firstDigits + "-" + dv;
    if (firstDigits.length < 7) {
      return false;
    }
    let sum = 0;
    let multiplier = 2;
    for (let i = 1; i <= firstDigits.length; i++) {
      let index = multiplier * rutValue.charAt(firstDigits.length - i);
      sum = sum + index;
      if (multiplier < 7) {
        multiplier = multiplier + 1;
      } else {
        multiplier = 2;
      }
    }
    let expectedDv = 11 - (sum % 11);
    expectedDv = expectedDv === 10 ? "K" : expectedDv === 11 ? "0" : expectedDv;
    if (expectedDv.toString() !== dv.toString()) {
      return false;
    } else {
      return { number: firstDigits, dv: dv, complete: rut };
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    let validRut = checkChileanRut(runInputRef.current.value);
    if(regionSelected === 0){
        alert('Debe seleccionar la region');
        return;
    }
    if(ciudadSelected === 0){
        alert('Debe seleccionar la ciudad');
        return;
    }
    if(comunaSelected === 0){
        alert('Debe seleccionar la comuna');
        return;
    }
    if(sexoInputRef.current.value === null){
        alert('Debe seleccionar el sexo');
        return;
    }
    if (validRut) {
      const persona = {
        run: validRut.complete,
        runCuerpo: validRut.number,
        runDigito: validRut.dv,
        nombre: `${nombresInputRef.current.value}, ${apellidoPaternoInputRef.current.value} ${apellidoMaternoInputRef.current.value}`,
        nombres: nombresInputRef.current.value,
        apellidoPaterno: apellidoPaternoInputRef.current.value,
        apellidoMaterno: apellidoMaternoInputRef.current.value,
        email: emailInputRef.current.value,
        sexoCodigo: sexoInputRef.current.value === "M" ? 1 : 2,
        fechaNacimiento: fechaNacimientoInputRef.current.value,
        regionCodigo: regionSelected,
        ciudadCodigo: ciudadSelected,
        comunaCodigo: comunaSelected,
        direccion: direccionInputRef.current.value,
        telefono: telefonoInputRef.current.value,
        observaciones: observacionesInputRef.current.value,
      };

      if(isNewUser){
        dispatch(tryCreatePerson(persona, history));
      }
      else {
          dispatch(tryUpdatePerson(persona, id, history));
      }
    } else {
      alert("El rut seleccionado es invalido");
    }
  };

  const regionesOptions = regiones.map((region) => (
    <option key={region.codigo} value={region.codigo}>
      {region.nombreOficial}
    </option>
  ));

  regionesOptions?.unshift(<option key={0}></option>);

  useEffect(() => {
    if (!isNewUser) {
      let currentRegion = regiones.filter((x) => x.codigo == personaEdit?.regionCodigo)[0];
      setCiudadesByRegion(currentRegion?.ciudads);
      setCiudad(personaEdit?.codigoCiudad);
      setComuna(personaEdit?.comunaCodigo);
    }
  }, [isNewUser, personaEdit, regiones]);

  useEffect(() => {
    let currentRegion = regiones.filter((x) => x.codigo == regionSelected)[0];
    setCiudadesByRegion(currentRegion?.ciudads);
    console.log(currentRegion);
  }, [regionSelected, regiones]);

  let optionCiudades = ciudades?.map((ciudad) => (
    <option key={ciudad.codigo} value={ciudad.codigo}>
      {ciudad.nombre}
    </option>
  ));

  optionCiudades?.unshift(<option key={0}></option>);

  useEffect(() => {
    let currentCiudad = ciudades?.filter((x) => x.codigo == ciudadSelected)[0];
    let optionComunas = currentCiudad?.comunas?.map((comuna) => (
      <option key={comuna.codigo} value={comuna.codigo}>
        {comuna.nombre}
      </option>
    ));
    optionComunas?.unshift(<option key={0}></option>);
    setComunasByCiudad(optionComunas);
  }, [ciudades, ciudadSelected, regiones]);

  const onChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const onChangeCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const onChangeComuna = (e) => {
    setComuna(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">Formulario de persona</h1>
      <br></br>
      <br></br>
      <form onSubmit={formSubmissionHandler}>
        <div className="form-group row">
          <label className="col-md-2 col-form-label">R.U.N.:</label>
          <div className="col-md-4">
            <input
              ref={runInputRef}
              defaultValue={personaEdit?.run}
              className="form-control"
              id="run"
              placeholder="11.111.111-1"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 col-form-label">Nombre:</label>
          <div className="col-md-3">
            <input
              ref={nombresInputRef}
              defaultValue={personaEdit?.nombres}
              className="form-control"
              id="nombre"
              placeholder="Nombres"
            ></input>
          </div>
          <div className="col-md-2">
            <input
              ref={apellidoPaternoInputRef}
              defaultValue={personaEdit?.apellidoPaterno}
              className="form-control"
              id="apellidoPaterno"
              placeholder="Apellido paterno"
            ></input>
          </div>
          <div className="col-md-2">
            <input
              ref={apellidoMaternoInputRef}
              defaultValue={personaEdit?.apellidoMaterno}
              className="form-control"
              id="apellidoMaterno"
              placeholder="Apellido materno"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="email" className="col-md-2 col-form-label">
            Email:
          </label>
          <div className="col-md-5">
            <input
              ref={emailInputRef}
              defaultValue={personaEdit?.email}
              className="form-control"
              id="email"
              type="email"
              placeholder="correo@correo.cl"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="sexo" className="col-md-2 col-form-label">
            Sexo:
          </label>
          <div className="col-md-5">
              &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              ref={sexoInputRef}
              className="form-check-input"
              type="radio"
              name="sexo"
              id="femenino"
              value="F"
              defaultValue={personaEdit?.sexoCodigo === 2}
            ></input>
            <label className="form-check-label" for="femenino">
              Femenino
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              ref={sexoInputRef}
              className="form-check-input"
              type="radio"
              name="sexo"
              id="masculino"
              value="M"
              defaultValue={personaEdit?.sexoCodigo === 1}
            ></input>
            <label className="form-check-label" for="masculino">
              Masculino
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label for="fechaNacimiento" className="col-md-2 col-form-label">
            Fecha de Nacimiento:
          </label>
          <div className="col-md-3">
            <input
              ref={fechaNacimientoInputRef}
              id="fechaNacimiento"
              className="form-control"
              type="date"
              defaultValue={fechaNacimiento}
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="region" className="col-md-2 col-form-label">
            Región:
          </label>
          <div className="col-md-3">
            <select
              defaultValue={personaEdit?.regionCodigo}
              className="form-control"
              onChange={onChangeRegion}
              id="region"
            >
              {regionesOptions ? regionesOptions : <option key={0}></option>}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="region" className="col-md-2 col-form-label">
            Ciudades:
          </label>
          <div className="col-md-3">
            <select
              defaultValue={personaEdit?.ciudadCodigo}
              className="form-control"
              onChange={onChangeCiudad}
              id="ciudad"
            >
              {optionCiudades}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="region" className="col-md-2 col-form-label">
            Comunas:
          </label>
          <div className="col-md-3">
            <select
              defaultValue={personaEdit?.comunaCodigo}
              className="form-control"
              onChange={onChangeComuna}
              id="comunas"
            >
              {comunas}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="direccion" className="col-md-2 col-form-label">
            Dirección:
          </label>
          <div className="col-md-7">
            <input
              ref={direccionInputRef}
              className="form-control"
              id="direccion"
              defaultValue={personaEdit?.direccion}
              placeholder="Dirección"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="telefono" className="col-md-2 col-form-label">
            Teléfono:
          </label>
          <div className="col-md-7">
            <input
              ref={telefonoInputRef}
              defaultValue={personaEdit?.telefono}
              className="form-control"
              id="telefono"
              placeholder="+569999999"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label for="telefono" className="col-md-2 col-form-label">
            Observaciones:
          </label>
          <div className="col-md-7">
            <textarea
              ref={observacionesInputRef}
              className="form-control"
              id="observaciones"
              defaultValue={personaEdit?.observaciones}
              rows="3"
              placeholder="Observaciones"
            ></textarea>
          </div>
        </div>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default PersonaForm;
