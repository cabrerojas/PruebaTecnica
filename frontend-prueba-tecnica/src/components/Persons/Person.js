import React, { useState } from "react";
import ConfirmModal from "./../common/ConfirmModal";
import { useDispatch } from "react-redux";
import { deletePerson } from "../../redux/actions/persons";
import { useHistory } from "react-router-dom";

const Person = ({ person }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [deleteId, setDeleteId] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const confirmDelete = () => {
    dispatch(deletePerson(deleteId));
    console.log("eliminando id:" + deleteId);
  };

  const closeModal = () => {
    setShowConfirmModal(false);
  };

  const deleteAction = (id) => {
    setDeleteId(id);
    setShowConfirmModal(true);
  };

  const editPerson = (id) => {
    history.push("/person/" + id);
  };

  return (
    <>
      {showConfirmModal ? (
        <ConfirmModal
          textAcceptButton="Sí"
          textCancelButton="No"
          uppetText="Confirmar"
          bodyText="¿Desea eliminar el usuario?"
          onConfirm={confirmDelete}
          onClose={closeModal}
        ></ConfirmModal>
      ) : null}
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
