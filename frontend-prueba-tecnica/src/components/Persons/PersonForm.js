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

const PersonForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isCreating] = useState(id === "0");

  const initPersonData = {
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
  };
  const [personData, setPersonData] = useState(initPersonData);

  const [regionsOptions, setRegionsOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [communesOptions, setCommunesOptions] = useState([]);

  const person = useSelector((state) => state.persons.person_edit);
  const regions = useSelector((state) => state.regions.regions);
  const cities = useSelector((state) => state.regions.cities);
  const communes = useSelector((state) => state.regions.communes);
  const [selectedRegionOption, setSelectedRegionOption] = useState();
  const [selectedCityOption, setSelectedCityOption] = useState();
  const [selectedCommuneOption, setSelectedCommuneOption] = useState();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isCreating) dispatch(getPerson(id));
    dispatch(getRegions());
  }, []);

  useEffect(() => {
    if (person && regions.length > 0) {
      //Parseo datos evitar enviar null a un componente controlado
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
  }, [person, regions]);

  /*TRAER DATOS SI CAMBIA EL COMBO*/

  useEffect(() => {
    dispatch(getCities(personData.regionCodigo));
    /**/
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

    setErrors(errorsRes);

    if (Object.keys(errorsRes).length !== 0) {
      return false;
    }

    const preSave = {
      ...personData,
      runCuerpo: parseInt(body),
      runDigito: String(dv),
      sexoCodigo: parseInt(personData.sexoCodigo),
      regionCodigo: parseInt(personData.regionCodigo),
      comunaCodigo: parseInt(personData.comunaCodigo),
      ciudadCodigo: parseInt(personData.ciudadCodigo),
      telefono: parseInt(personData.telefono),
    };

    if (isCreating) {
      dispatch(createPerson(preSave));
      //Clean form
      setPersonData(initPersonData);
      setSelectedCommuneOption(0);
      setSelectedCityOption(0);
      setSelectedRegionOption(0);
    } else {
      dispatch(
        updatePerson(person.id, {
          ...preSave,
          id: person.id,
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
      <section className="container mx-auto p-6 font-mono">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <p className="pb-4 text-lg font-bold">
            {isCreating ? "Crear Persona" : "Editar Persona"}
          </p>

          <form action="" onSubmit={handleSubmit}>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/4 px-3 flex-col">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  R.U.N:
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  name="run"
                  type="text"
                  placeholder="11.111.111-1"
                  value={personData.run}
                  onChange={(e) => handleChange(e)}
                />
                {errors.run && (
                  <p className="text-red-600 text-xs italic">{errors.run}</p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-first-name"
                >
                  Nombres
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-1"
                  name="nombres"
                  type="text"
                  placeholder="Nombres"
                  value={personData.nombres}
                  onChange={(e) => handleChange(e)}
                />

                {errors.nombres && (
                  <p className="text-red-600 text-xs italic">
                    {errors.nombres}
                  </p>
                )}
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-last-name"
                >
                  Apellido Paterno
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  name="apellidoPaterno"
                  type="text"
                  value={personData.apellidoPaterno}
                  placeholder="Apellido paterno"
                  onChange={(e) => handleChange(e)}
                />

                {errors.apellidoPaterno && (
                  <p className="text-red-600 text-xs italic">
                    {errors.apellidoPaterno}
                  </p>
                )}
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-last-name"
                >
                  Apellido Materno
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  name="apellidoMaterno"
                  type="text"
                  value={personData.apellidoMaterno}
                  placeholder="Apellido materno"
                  onChange={(e) => handleChange(e)}
                />

                {errors.apellidoMaterno && (
                  <p className="text-red-600 text-xs italic">
                    {errors.apellidoMaterno}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  name="email"
                  type="text"
                  value={personData.email}
                  placeholder="correo@correo.cl"
                  onChange={(e) => handleChange(e)}
                />

                {errors.email && (
                  <p className="text-red-600 text-xs italic">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Sexo
                </label>
                <div className="flex">
                  <div className="px-2">
                    <input
                      type="radio"
                      value="M"
                      name="gender"
                      checked={personData?.sexoCodigo == 1}
                      onChange={(e) => radioChange(e)}
                    />{" "}
                    Masculino
                  </div>
                  <div className="px-2">
                    <input
                      type="radio"
                      value="F"
                      name="gender"
                      checked={personData?.sexoCodigo == 2}
                      onChange={(e) => radioChange(e)}
                    />{" "}
                    Femenino
                  </div>
                </div>
                {errors.sexoCodigo && (
                  <p className="text-red-600 text-xs italic">
                    {errors.sexoCodigo}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/6 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Fecha Nacimiento
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  type="date"
                  name="fechaNacimiento"
                  value={personData.fechaNacimiento}
                  onChange={(e) => handleChange(e)}
                />

                {errors.fechaNacimiento && (
                  <p className="text-red-600 text-xs italic">
                    {errors.fechaNacimiento}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Región
                </label>

                <Select
                  options={regionsOptions}
                  onChange={(e) => regionOnChange(e)}
                  value={selectedRegionOption}
                  placeholder="Seleccione"
                  name="regionCodigo"
                />

                {errors.regionCodigo && (
                  <p className="text-red-600 text-xs italic">
                    {errors.regionCodigo}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Ciudad
                </label>

                <Select
                  options={citiesOptions}
                  onChange={(e) => cityOnChange(e)}
                  value={selectedCityOption}
                  placeholder="Seleccione"
                />

                {errors.ciudadCodigo && (
                  <p className="text-red-600 text-xs italic">
                    {errors.ciudadCodigo}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Comuna
                </label>

                <Select
                  options={communesOptions}
                  onChange={(e) => communeOnChange(e)}
                  value={selectedCommuneOption}
                  placeholder="Seleccione"
                />

                {errors.comunaCodigo && (
                  <p className="text-red-600 text-xs italic">
                    {errors.comunaCodigo}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Dirección
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  type="text"
                  name="direccion"
                  value={personData.direccion}
                  onChange={(e) => handleChange(e)}
                  placeholder="Dirección"
                />

                {errors.direccion && (
                  <p className="text-red-600 text-xs italic">
                    {errors.direccion}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-3">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Teléfono
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1"
                  type="text"
                  name="telefono"
                  value={personData.telefono}
                  placeholder="999999999"
                  onChange={(e) => handleChange(e)}
                />

                {errors.telefono && (
                  <p className="text-red-600 text-xs italic">
                    {errors.telefono}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-1">
              <div className="md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  forhtml="grid-password"
                >
                  Observaciones
                </label>
                <textarea
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-1 "
                  type="textarea"
                  name="observaciones"
                  value={personData.observaciones}
                  placeholder="Observaciones"
                  onChange={(e) => handleChange(e)}
                />

                {errors.observaciones && (
                  <p className="text-red-600 text-xs italic">
                    {errors.observaciones}
                  </p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow"></div>
              <div className="">
                <button
                  className="btn-secondary p-2 m-2"
                  onClick={() => history.push("/persons")}
                >
                  Volver
                </button>
                <button className="btn-primary p-2 m-2" type="submit">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default PersonForm;
