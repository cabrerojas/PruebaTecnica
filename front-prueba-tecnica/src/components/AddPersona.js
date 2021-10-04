import React, { useState } from "react";
import PersonaDataService from "../services/PersonaService";

const AddPersona = () => {

    const initialPersonaState = {
        id: "",
        title: "",
        author: "",
        pages: "",
        published: false
    };


    const [Persona, setPersona] = useState(initialPersonaState);
    const [submitted, setSubmitted] = useState(false);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setPersona({ ...Persona, [name]: value });
    };


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

                    <div className="form-group">
                        <label htmlFor="run">R.U.N</label>
                        <input
                            type="text"
                            className="form-control"
                            id="run"
                            name="run"
                            value={Persona.runCuerpo}
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
                            value={Persona.nombres}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="apellidoPaterno"
                            name="apellidoPaterno"
                            value={Persona.apellidoPaterno}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="apellidoMaterno"
                            name="apellidoMaterno"
                            value={Persona.apellidoMaterno}
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
                            value={Persona.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="sexoCodigo"
                            id="femenino"
                            value="1" />
                        <label className="form-check-label" htmlFor="femenino">Femenino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="sexoCodigo"
                            id="masculino"
                            value="2" />
                        <label className="form-check-label" htmlFor="masculino">Masculino</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Fecha de nacimiento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            value={Persona.fechaNacimiento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Región</label>
                        <select className="form-select"
                            id="regionCodigo"
                            name="regionCodigo"
                            value={Persona.regionCodigo}
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
                            value={Persona.ciudadCodigo}
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
                            value={Persona.comunaCodigo}
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
                            value={Persona.direccion}
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
                            value={Persona.telefono}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="observaciones">Observaciones</label>

                        <textarea className="form-control"
                            id="observaciones"
                            name="observaciones"
                            value={Persona.observaciones}
                            onChange={handleInputChange}
                            rows="3">

                        </textarea>
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