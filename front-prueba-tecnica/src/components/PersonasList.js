import React, { useState, useEffect } from "react";
import PersonaDataService from "../services/PersonaService";
import { Link } from "react-router-dom";

const PersonasList = () => {

  const [Personas, setPersonas] = useState([]);

  useEffect(() => {
    retrievePersonas();
  }, []);


  const retrievePersonas = () => {
    PersonaDataService.getAll()
      .then(response => {
        setPersonas(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletePersona = (id) => {
    PersonaDataService.remove(id)
      .then(response => {
        retrievePersonas()
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="list row">

      <h1 className="display-4">Personas</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">R.U.T.</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {Personas &&
            Personas.map((Persona) => (
              <tr key={Persona.id}>
                <td >
                  {Persona.nombres} {Persona.apellidoMaterno} {Persona.apellidoPaterno}
                </td>
                <td>
                  {Persona.runCuerpo}-{Persona.runDigito}
                </td>
                <td>
                  <Link
                    to={"/Personas/" + Persona.id}
                    className="badge bg-warning"
                  >
                    Editar
                  </Link>
                  <button className="badge bg-danger" onClick={()=> deletePersona(Persona.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>
  );

}

export default PersonasList;
