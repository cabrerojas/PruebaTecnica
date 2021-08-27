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
      <div>{person.nombre} </div>{" "}
      <button onClick={() => editPerson(person.id)}> Editar</button>{" "}
      <button onClick={() => deleteAction(person.id)}> Eliminar</button>{" "}
    </>
  );
};

export default Person;
