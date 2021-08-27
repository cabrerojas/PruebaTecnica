import React, { useEffect } from "react";
import Person from "../../components/Persons/Person";
import { useDispatch, useSelector } from "react-redux";
import { getPersons, cleanPersonEdit } from "../../redux/actions/persons";
import { useHistory } from "react-router-dom";

const PersonsIndex = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.person_list);

  useEffect(async () => {
    dispatch(getPersons());
  }, []);

  const addPerson = (id) => {
    dispatch(cleanPersonEdit());
    history.push("/person/" + id);
  };

  return (
    <div>
      <h1>Mantenedor de personas</h1>
      <button
        onClick={() => {
          addPerson(0);
        }}
      >
        Agregar Persona
      </button>
      {persons.length > 0 ? (
        persons.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))
      ) : (
        <h1>No hay ni madres 1</h1>
      )}
    </div>
  );
};

export default PersonsIndex;
