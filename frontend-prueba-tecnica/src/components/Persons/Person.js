import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowConfirmModal, setDeleteId } from "../../redux/actions/persons";
import { useHistory } from "react-router-dom";

const Person = ({ person }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteAction = (id) => {
    dispatch(setShowConfirmModal(true));
    dispatch(setDeleteId(id));
  };

  const editPerson = (id) => {
    history.push("/person/" + id);
  };

  return (
    <>
      <td className="px-4 py-3 border">
        <div className=" text-sm ">
          <div>
            <p className="font-semibold text-black ">{person.nombre}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border text-center">
        {person.run}
      </td>
      <td className="px-4 py-3 text-xs border text-center">
        <button
          onClick={() => editPerson(person.id)}
          className="btn-primary p-2 mx-2"
        >
          Editar
        </button>
        <button
          onClick={() => deleteAction(person.id)}
          className="btn-warning p-2"
        >
          Eliminar
        </button>
      </td>
    </>
  );
};

export default Person;
