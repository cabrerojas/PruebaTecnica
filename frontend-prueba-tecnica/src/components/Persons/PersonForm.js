import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPerson,
  createPerson,
  updatePerson,
} from "../../redux/actions/persons";

import {
  getRegions,
  getCities,
  getCommunes,
} from "../../redux/actions/regions";

import Select from "react-select";

import validatePersonForm from "../utils/validatePersonForm";
import validateRut from "../utils/validateRut";

const PersonForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isCreating] = useState(id === "0");

  const [personData, setPersonData] = useState({
    run: "",
    runCuerpo: "",
    runDigito: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    sexoCodigo: "",
    fechaNacimiento: "",
    regionCodigo: "",
    ciudadCodigo: "",
    comunaCodigo: "",
    direccion: "",
    telefono: "",
    observaciones: "",
  });

  const [regionsOptions, setRegionsOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [communesOptions, setCommunesOptions] = useState([]);
  const [errors, setErrors] = useState({});

  const person = useSelector((state) => state.persons.person_edit);
  const regions = useSelector((state) => state.regions.regions);
  const cities = useSelector((state) => state.regions.cities);
  const communes = useSelector((state) => state.regions.communes);
  const [selectedRegionOption, setSelectedRegionOption] = useState();
  const [selectedCityOption, setSelectedCityOption] = useState();
  const [selectedCommuneOption, setSelectedCommuneOption] = useState();

  useEffect(() => {
    if (!isCreating) dispatch(getPerson(id));
    dispatch(getRegions());
  }, []);

  useEffect(() => {
    if (person) {
      setPersonData({
        ...personData,
        run: person.run ? person.run : "",
        runCuerpo: person.runCuerpo ? person.runCuerpo : "",
        runDigito: person.runDigito ? person.runDigito : "",
        nombres: person.nombres ? person.nombres : "",
        apellidoPaterno: person.apellidoPaterno ? person.apellidoPaterno : "",
        apellidoMaterno: person.apellidoMaterno ? person.apellidoMaterno : "",
        email: person.email ? person.email : "",
        sexoCodigo: person.sexoCodigo ? person.sexoCodigo : "",
        fechaNacimiento: person.fechaNacimiento
          ? new Date(person?.fechaNacimiento).toISOString().split("T")[0]
          : "",
        regionCodigo: person.regionCodigo ? person.regionCodigo : "",
        ciudadCodigo: person.ciudadCodigo ? person.ciudadCodigo : "",
        comunaCodigo: person.comunaCodigo ? person.comunaCodigo : "",
        direccion: person.direccion ? person.direccion : "",
        telefono: person.telefono ? person.telefono : "",
        observaciones: person.observaciones ? person.observaciones : "",
      });

      setSelectedRegionOption(
        regionsOptions.find((region) => region.value === person.regionCodigo)
      );
    }
  }, [person]);

  /*TRAER DATOS SI CAMBIA EL COMBO*/

  useEffect(() => {
    dispatch(getCities(personData.regionCodigo));
  }, [selectedRegionOption]);

  useEffect(() => {
    if (selectedCityOption) {
      dispatch(getCommunes(personData.regionCodigo, personData.ciudadCodigo));
    }
  }, [selectedCityOption]);

  /*SELECCIONAR OPCION SI CAMBIA EL COMBO*/

  useEffect(() => {
    if (person) {
      setSelectedCityOption(
        citiesOptions.find((city) => city.value === person.ciudadCodigo)
      );
    }
  }, [citiesOptions]);

  useEffect(() => {
    if (person) {
      setSelectedCommuneOption(
        communesOptions.find((commune) => commune.value === person.comunaCodigo)
      );
    }
  }, [communesOptions]);

  /*LLAMADAS REGIONES Y FORMATEO PARA EL SELECT*/

  useEffect(() => {
    if (regions) {
      setRegionsOptions(
        regions.map((region) => {
          return { value: region.codigo, label: region.nombreOficial };
        })
      );
    }
  }, [regions]);

  useEffect(() => {
    if (cities) {
      setCitiesOptions(
        cities.map((city) => {
          return { value: city.codigo, label: city.nombre };
        })
      );
    }
  }, [cities]);

  useEffect(() => {
    if (communes) {
      setCommunesOptions(
        communes.map((commune) => {
          return { value: commune.codigo, label: commune.nombre };
        })
      );
    }
  }, [communes]);

  /*CAMBIOS DE SELECT*/

  const radioChange = (e) => {
    setPersonData({
      ...personData,
      sexoCodigo: e.target.value == "M" ? 1 : 2,
    });
  };

  const regionOnChange = (e) => {
    setSelectedRegionOption(e);
    setPersonData({ ...personData, regionCodigo: e.value });
  };

  const cityOnChange = (e) => {
    setSelectedCityOption(e);
    setPersonData({ ...personData, ciudadCodigo: e.value });
  };

  const communeOnChange = (e) => {
    setSelectedCommuneOption(e);
    setPersonData({ ...personData, comunaCodigo: e.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { errorsRes, body, dv } = validatePersonForm(personData);
    console.log(dv);
    //const { runError, body, dv } = validateRut(personData.run);

    setErrors(errorsRes);

    if (Object.keys(errorsRes).length !== 0) {
      return false;
    }

    if (isCreating) {
      dispatch(
        createPerson({
          ...personData,
          runCuerpo: parseInt(body),
          runDigito: String(dv),
          sexoCodigo: parseInt(personData.sexoCodigo),
          regionCodigo: parseInt(personData.regionCodigo),
          comunaCodigo: parseInt(personData.comunaCodigo),
          ciudadCodigo: parseInt(personData.ciudadCodigo),
          telefono: parseInt(personData.telefono),
        })
      );
    } else {
      dispatch(
        updatePerson(person.id, {
          ...personData,
          id: person.id,
          runCuerpo: parseInt(body),
          runDigito: String(dv),
          sexoCodigo: parseInt(personData.sexoCodigo),
          regionCodigo: parseInt(personData.regionCodigo),
          comunaCodigo: parseInt(personData.comunaCodigo),
          ciudadCodigo: parseInt(personData.ciudadCodigo),
          telefono: parseInt(personData.telefono),
        })
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonData({ ...personData, [name]: value });
  };

  return (
    <>
      <div>{person ? "Editar usuario " + person.nombre : "Crear usuario"}</div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Rut</label>
        <br />
        <input
          type="text"
          name="run"
          value={personData.run}
          onChange={(e) => handleChange(e)}
          placeholder="11.111.111-1"
        />
        {errors.run && <p>{errors.run}</p>}
        <br />
        <label htmlFor="">Nombres</label>
        <br />
        <input
          type="text"
          name="nombres"
          value={personData.nombres}
          placeholder="Nombres"
          onChange={(e) => handleChange(e)}
        />
        {errors.nombres && <p>{errors.nombres}</p>}
        <label htmlFor="">Apellido Paterno</label>
        <input
          type="text"
          name="apellidoPaterno"
          value={personData.apellidoPaterno}
          placeholder="Apellido paterno"
          onChange={(e) => handleChange(e)}
        />
        {errors.apellidoPaterno && <p>{errors.apellidoPaterno}</p>}
        <label htmlFor="">Apellido Materno</label>
        <input
          type="text"
          name="apellidoMaterno"
          value={personData.apellidoMaterno}
          placeholder="Apellido materno"
          onChange={(e) => handleChange(e)}
        />
        {errors.apellidoMaterno && <p>{errors.apellidoMaterno}</p>}
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={personData.email}
          placeholder="correo@correo.cl"
          onChange={(e) => handleChange(e)}
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="">Sexo</label>
        <br />
        <input
          type="radio"
          value="M"
          name="gender"
          checked={personData?.sexoCodigo == 1}
          onChange={(e) => radioChange(e)}
        />{" "}
        Masculino
        <input
          type="radio"
          value="F"
          name="gender"
          checked={personData?.sexoCodigo == 2}
          onChange={(e) => radioChange(e)}
        />{" "}
        Femenino
        <br />
        {errors.sexoCodigo && <p>{errors.sexoCodigo}</p>}
        <label htmlFor="">Fecha Nacimiento</label>
        <br />
        <input
          type="date"
          name="fechaNacimiento"
          value={personData.fechaNacimiento}
          onChange={(e) => handleChange(e)}
        />
        {errors.fechaNacimiento && <p>{errors.fechaNacimiento}</p>}
        <br />
        <label htmlFor="">Región</label>
        <br />
        <Select
          options={regionsOptions}
          onChange={(e) => regionOnChange(e)}
          value={selectedRegionOption}
          placeholder="Seleccione"
          name="regionCodigo"
        />
        {errors.regionCodigo && <p>{errors.regionCodigo}</p>}
        <br />
        <label htmlFor="">Ciudad</label>
        <br />
        <Select
          options={citiesOptions}
          onChange={(e) => cityOnChange(e)}
          value={selectedCityOption}
          placeholder="Seleccione"
        />
        {errors.ciudadCodigo && <p>{errors.ciudadCodigo}</p>}
        <br />
        <label htmlFor="">Comuna</label>
        <br />
        <Select
          options={communesOptions}
          onChange={(e) => communeOnChange(e)}
          value={selectedCommuneOption}
          placeholder="Seleccione"
        />
        {errors.comunaCodigo && <p>{errors.comunaCodigo}</p>}
        <br />
        <label htmlFor="">Dirección</label>
        <br />
        <input
          type="text"
          name="direccion"
          value={personData.direccion}
          onChange={(e) => handleChange(e)}
          placeholder="Dirección"
        />
        {errors.direccion && <p>{errors.direccion}</p>}
        <br />
        <label htmlFor="">Teléfono</label>
        <br />
        <input
          type="text"
          name="telefono"
          value={personData.telefono}
          placeholder="+56999999999"
          onChange={(e) => handleChange(e)}
        />
        {errors.telefono && <p>{errors.telefono}</p>}
        <br />
        <label htmlFor="">Observaciones</label>
        <br />
        <input
          type="text"
          name="observaciones"
          value={personData.observaciones}
          placeholder="Observaciones"
          onChange={(e) => handleChange(e)}
        />
        {errors.observaciones && <p>{errors.observaciones}</p>}
        <br />
        <button onClick={() => history.push("/persons")}>Volver</button>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default PersonForm;
