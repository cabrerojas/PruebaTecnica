import React, { useEffect } from "react";
import Person from "../../components/Persons/Person";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersons,
  cleanPersonEdit,
  setShowConfirmModal,
  deletePerson,
  cleanDeleteId,
} from "../../redux/actions/persons";
import { useHistory } from "react-router-dom";
import ConfirmModal from "../../components/common/ConfirmModal";
const PersonsIndex = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.person_list);
  const deleteId = useSelector((state) => state.persons.person_id_delete);
  const confirmModalStatus = useSelector(
    (state) => state.persons.confirm_modal_status
  );

  useEffect(() => {
    dispatch(getPersons());
  }, []);

  const addPerson = (id) => {
    dispatch(cleanPersonEdit());
    history.push("/person/" + id);
  };

  const confirmDelete = () => {
    dispatch(deletePerson(deleteId));
    closeModal();
  };

  const closeModal = () => {
    dispatch(setShowConfirmModal(false));
    dispatch(cleanDeleteId());
  };

  return (
    <>
      {confirmModalStatus ? (
        <ConfirmModal
          textAcceptButton="Sí"
          textCancelButton="No"
          uppetText="Confirmar"
          bodyText="¿Desea eliminar el usuario?"
          onConfirm={confirmDelete}
          onClose={closeModal}
        ></ConfirmModal>
      ) : null}
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <div className="flex  items-center">
              <p className="p-4 text-lg font-bold flex-none">
                Mantenedor de Personas
              </p>
              <p className="flex-grow"></p>
              <button
                className="btn-primary p-2 px-4 m-4  flex-none"
                onClick={() => {
                  addPerson(0);
                }}
              >
                Agregar Persona
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3 text-center">R.U.T</th>
                  <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {persons.length > 0 ? (
                  persons.map((person) => (
                    <tr key={person.id} className="text-gray-700 ">
                      <Person person={person}></Person>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td key={1}> No hay datos para mostrar</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonsIndex;
