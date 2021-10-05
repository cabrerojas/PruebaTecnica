import React, { useState, useEffect } from "react";
import PersonaDataService from "../services/PersonaService";
import ComunaDataService from "../services/ComunaService";
import RegionDataService from "../services/RegionService";

const AddPersona = () => {

    const initialPersonaState = {
        id: "",
        runCuerpo: 0,
        runDigito: "",
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        email: "",
        sexoCodigo: 1,
        fechaNacimiento: "",
        regionCodigo: 0,
        ciudadCodigo: 0,
        comunaCodigo: 0,
        direccion: "",
        telefono: 0,
        observaciones: ""
    };

    const initialCiudadesState = [{"RegionCodigo":1,"Codigo":1,"Nombre":"Iquique"},{"RegionCodigo":1,"Codigo":2,"Nombre":"Del Tamarugal"},{"RegionCodigo":2,"Codigo":1,"Nombre":"Tocopilla"},{"RegionCodigo":2,"Codigo":2,"Nombre":"El Loa"},{"RegionCodigo":2,"Codigo":3,"Nombre":"Antofagasta"},{"RegionCodigo":3,"Codigo":1,"Nombre":"Chañaral"},{"RegionCodigo":3,"Codigo":2,"Nombre":"Copiapó"},{"RegionCodigo":3,"Codigo":3,"Nombre":"Huasco"},{"RegionCodigo":4,"Codigo":1,"Nombre":"Elqui"},{"RegionCodigo":4,"Codigo":2,"Nombre":"Limarí"},{"RegionCodigo":4,"Codigo":3,"Nombre":"Choapa"},{"RegionCodigo":5,"Codigo":1,"Nombre":"Petorca"},{"RegionCodigo":5,"Codigo":2,"Nombre":"Los Andes"},{"RegionCodigo":5,"Codigo":3,"Nombre":"San Felipe de Aconcagua"},{"RegionCodigo":5,"Codigo":4,"Nombre":"Quillota"},{"RegionCodigo":5,"Codigo":5,"Nombre":"Valparaíso"},{"RegionCodigo":5,"Codigo":6,"Nombre":"San Antonio"},{"RegionCodigo":5,"Codigo":7,"Nombre":"Isla de Pascua"},{"RegionCodigo":6,"Codigo":1,"Nombre":"Cachapoal"},{"RegionCodigo":6,"Codigo":2,"Nombre":"Colchagua"},{"RegionCodigo":6,"Codigo":3,"Nombre":"Cardenal Caro"},{"RegionCodigo":7,"Codigo":1,"Nombre":"Curicó"},{"RegionCodigo":7,"Codigo":2,"Nombre":"Talca"},{"RegionCodigo":7,"Codigo":3,"Nombre":"Linares"},{"RegionCodigo":7,"Codigo":4,"Nombre":"Cauquenes"},{"RegionCodigo":8,"Codigo":2,"Nombre":"Biobío"},{"RegionCodigo":8,"Codigo":3,"Nombre":"Concepción"},{"RegionCodigo":8,"Codigo":4,"Nombre":"Arauco"},{"RegionCodigo":9,"Codigo":1,"Nombre":"Malleco"},{"RegionCodigo":9,"Codigo":2,"Nombre":"Cautín"},{"RegionCodigo":10,"Codigo":1,"Nombre":"Ranco"},{"RegionCodigo":10,"Codigo":2,"Nombre":"Osorno"},{"RegionCodigo":10,"Codigo":3,"Nombre":"Llanquihue"},{"RegionCodigo":10,"Codigo":4,"Nombre":"Chiloé"},{"RegionCodigo":10,"Codigo":5,"Nombre":"Palena"},{"RegionCodigo":11,"Codigo":1,"Nombre":"Coihaique"},{"RegionCodigo":11,"Codigo":2,"Nombre":"Aisén"},{"RegionCodigo":11,"Codigo":3,"Nombre":"General Carrera"},{"RegionCodigo":11,"Codigo":4,"Nombre":"Capitán Prat"},{"RegionCodigo":12,"Codigo":1,"Nombre":"Ultima Esperanza"},{"RegionCodigo":12,"Codigo":2,"Nombre":"Magallanes"},{"RegionCodigo":12,"Codigo":3,"Nombre":"Tierra del Fuego"},{"RegionCodigo":12,"Codigo":4,"Nombre":"Antártica Chilena"},{"RegionCodigo":13,"Codigo":1,"Nombre":"Santiago"},{"RegionCodigo":13,"Codigo":2,"Nombre":"Chacabuco"},{"RegionCodigo":13,"Codigo":3,"Nombre":"Cordillera"},{"RegionCodigo":13,"Codigo":4,"Nombre":"Maipo"},{"RegionCodigo":13,"Codigo":5,"Nombre":"Melipilla"},{"RegionCodigo":13,"Codigo":6,"Nombre":"Talagante"},{"RegionCodigo":14,"Codigo":1,"Nombre":"Valdivia"},{"RegionCodigo":14,"Codigo":2,"Nombre":"Ranco"},{"RegionCodigo":15,"Codigo":1,"Nombre":"Arica"},{"RegionCodigo":15,"Codigo":2,"Nombre":"Parinacota"},{"RegionCodigo":16,"Codigo":1,"Nombre":"Diguillín"},{"RegionCodigo":16,"Codigo":2,"Nombre":"Punilla"},{"RegionCodigo":16,"Codigo":3,"Nombre":"Itata"}];
    const initialRegionesState = [];
    const initialComunasState = [];

    const [Persona, setPersona] = useState(initialPersonaState);
    const [currentRegiones, setCurrentRegiones] = useState(initialRegionesState);
    const [currentComunas, setCurrentComunas] = useState(initialComunasState);
    const [submitted, setSubmitted] = useState(false);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setPersona({ ...Persona, [name]: value });
    };

    const getComuna = () => {
        ComunaDataService.getAll()
            .then(response => {

                setCurrentComunas(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getRegion = () => {
        RegionDataService.getAll()
            .then(response => {

                setCurrentRegiones(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getRegion();
        getComuna();
        
        
    }, []);


    const savePersona = () => {
        var data = {
            id: Persona.id,
            title: Persona.title,
            author: Persona.author,
            pages: Persona.pages
        };


        PersonaDataService.create(data)
            .then(response => {
                setPersona({
                    id: response.data.id,
                    title: response.data.title,
                    author: response.data.author,
                    pages: response.data.pages,
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newPersona = () => {
        setPersona(initialPersonaState);
        setSubmitted(false);
    };


    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newPersona}>
                        Add
                    </button>
                </div>
            ) : (
                <div>

                   

<div className="form-group row">
                            <label htmlFor="runCuerpo" className="col-sm-2 col-form-label">R.U.N</label>
                            <div className="col-sm-4">


                                <div className="input-group mb-3 col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="runCuerpo"
                                        name="runCuerpo"
                                        value={Persona.runCuerpo}
                                        onChange={handleInputChange}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">-</span>
                                    </div>
                                    <div className="col-sm-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="runDigito"
                                            name="runDigito"
                                            maxLength="1"
                                            value={Persona.runDigito}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group row mt-1">
                            <label htmlFor="nombres"
                                className="col-sm-2 col-form-label">
                                Nombre
                            </label>
                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombres"
                                    name="nombres"
                                    value={Persona.nombres}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apellidoPaterno"
                                    name="apellidoPaterno"
                                    value={Persona.apellidoPaterno}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apellidoMaterno"
                                    name="apellidoMaterno"
                                    value={Persona.apellidoMaterno || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={Persona.email || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="femenino" className="col-sm-2 col-form-label">Sexo</label>
                            <div className="col-sm-10">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="sexoCodigo"
                                        id="femenino"
                                        checked={Persona.sexoCodigo == 1}
                                        onChange={handleInputChange}
                                        value="1" />
                                    <label className="form-check-label" htmlFor="femenino">Femenino</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="sexoCodigo"
                                        id="masculino"
                                        checked={Persona.sexoCodigo == 2}
                                        onChange={handleInputChange}
                                        value="2" />
                                    <label className="form-check-label" htmlFor="masculino">Masculino</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="fechaNacimiento"
                                className="col-sm-2 col-form-label">
                                Fecha de nacimiento
                            </label>
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    value={Persona.fechaNacimiento || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>


                        <div className="form-group row mt-1">
                            <label htmlFor="regionCodigo"
                                className="col-sm-2 col-form-label">
                                Región
                            </label>
                            <div className="col-sm-4">
                                <select className="form-select"
                                    id="regionCodigo"
                                    name="regionCodigo"
                                    value={Persona.regionCodigo || 1}
                                    onChange={handleInputChange} >
                                    {currentRegiones &&
                                        currentRegiones.map((region) => (
                                            <option key={region.codigo} value={region.codigo}>{region.nombreOficial}</option>
                                        ))}

                                </select>
                            </div>
                        </div>


                        <div className="form-group row mt-1">
                            <label htmlFor="ciudadCodigo"
                                className="col-sm-2 col-form-label">
                                Ciudad
                            </label>
                            <div className="col-sm-4">
                                <select className="form-select"
                                    id="ciudadCodigo"
                                    name="ciudadCodigo"
                                    value={Persona.ciudadCodigo || 1}
                                    onChange={handleInputChange} >
                                    {initialCiudadesState &&
                                        initialCiudadesState.filter(ciudad => ciudad.regionCodigo === Persona.regionCodigo)
                                        .map((ciudad) => (
                                            <option key={ciudad.codigo} value={ciudad.codigo}>{ciudad.nombre}</option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="comunaCodigo"
                                className="col-sm-2 col-form-label">
                                Comuna
                            </label>
                            <div className="col-sm-4">
                                <select className="form-select"
                                    id="comunaCodigo"
                                    name="comunaCodigo"
                                    value={Persona.comunaCodigo || 1}
                                    onChange={handleInputChange} >
                                    {currentComunas &&
                                        currentComunas.filter(comuna => comuna.ciudadCodigo == Persona.ciudadCodigo)
                                        .map((comuna) => (
                                            <option key={comuna.codigo} value={comuna.codigo}>{comuna.nombre}</option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="direccion"
                                className="col-sm-2 col-form-label">
                                Dirección
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="direccion"
                                    name="direccion"
                                    value={Persona.direccion || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="telefono"
                                className="col-sm-2 col-form-label">
                                Teléfono
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    value={Persona.telefono || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-1">
                            <label htmlFor="observaciones"
                                className="col-sm-2 col-form-label">
                                Observaciones
                            </label>
                            <div className="col-sm-10">
                                <textarea className="form-control"
                                    id="observaciones"
                                    name="observaciones"
                                    value={Persona.observaciones || ''}
                                    onChange={handleInputChange}
                                    rows="3">
                                </textarea>
                            </div>
                        </div>

                    <button onClick={savePersona} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    )

}


export default AddPersona;