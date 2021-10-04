import React, { useState, useEffect } from "react";
import PersonaDataService from "../services/PersonaService";

const Persona = props => {
    const initialPersonaState = {
        id: "",
        title: "",
        author: "",
        pages: "",
        published: false
    };
    const [currentPersona, setCurrentPersona] = useState(initialPersonaState);
    const [message, setMessage] = useState("");

    const getPersona = id => {
        PersonaDataService.get(id)
            .then(response => {
                setCurrentPersona(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getPersona(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentPersona({ ...currentPersona, [name]: value });
    };


    const updatePersona = () => {
        PersonaDataService.update(currentPersona.id, currentPersona)
            .then(response => {
                console.log(response.data);
                setMessage("The Persona was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentPersona ? (
                <div className="edit-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="run">R.U.N</label>
                            <input
                                type="text"
                                className="form-control"
                                id="run"
                                name="run"
                                value={currentPersona.runCuerpo}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombres">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombres"
                                name="nombres"
                                value={currentPersona.nombres}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="apellidoPaterno"
                                name="apellidoPaterno"
                                value={currentPersona.apellidoPaterno}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="apellidoMaterno"
                                name="apellidoMaterno"
                                value={currentPersona.apellidoMaterno}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={currentPersona.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="sexoCodigo"
                                id="femenino"
                                value="1" />
                            <label className="form-check-label" for="femenino">Femenino</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="sexoCodigo"
                                id="masculino"
                                value="2" />
                            <label className="form-check-label" for="masculino">Masculino</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Fecha de nacimiento</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                value={currentPersona.fechaNacimiento}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Región</label>
                            <select className="form-select"
                                id="regionCodigo"
                                name="regionCodigo"
                                value={currentPersona.regionCodigo}
                                onChange={handleInputChange} >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Ciudad</label>
                            <select className="form-select"
                                id="ciudadCodigo"
                                name="ciudadCodigo"
                                value={currentPersona.ciudadCodigo}
                                onChange={handleInputChange} >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="email">Comuna</label>
                            <select className="form-select"
                                id="comunaCodigo"
                                name="comunaCodigo"
                                value={currentPersona.comunaCodigo}
                                onChange={handleInputChange} >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="direccion">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                id="direccion"
                                name="direccion"
                                value={currentPersona.direccion}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="direccion">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefono"
                                name="telefono"
                                value={currentPersona.telefono}
                                onChange={handleInputChange}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="observaciones">Observaciones</label>

                            <textarea className="form-control"
                                 id="observaciones"
                                 name="observaciones"
                                 value={currentPersona.observaciones}
                                 onChange={handleInputChange}
                                rows="3">

                            </textarea>
                        </div>

                    </form>

                    <button
                        type="submit"
                        className="badge bg-success"
                        onClick={updatePersona}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Persona...</p>
                </div>
            )}
        </div>
    );
};

export default Persona;
