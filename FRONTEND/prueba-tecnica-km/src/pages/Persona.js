import { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import BootstrapTable from "react-bootstrap-table-next";
import {
  tryGetPersons,
  tryDeletePerson,
} from "../redux/thunks/personsActionCreator";
import { confirmAlert } from "react-confirm-alert";
import { ConfirmDialog } from "../components/common/confirmDialog";
import "react-confirm-alert/src/react-confirm-alert.css";

const Persona = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tryGetPersons());
  }, [dispatch]);

  const personsReducer = useSelector((state) => state.personsReducer);
  const history = useHistory();
  const handleNewPersona = () => history.push("persona/0");

  const handleDelete = (id, name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            description={`¿Estas seguro de que deseas eliminar la persona ${name}?`}
            handleAction={() => {
              dispatch(tryDeletePerson(id));
            }}
            handleClose={onClose}
            buttonAction="Eliminar"
          ></ConfirmDialog>
        );
      },
    });
  };

  const handleEdit = (id) => {
    history.push(`persona/${id}}`);
  }

  const columns = [
    {
      dataField: "id",
      text: "Id",
      hidden: true,
    },
    {
      dataField: "nombre",
      text: "Nombre",
    },
    {
      dataField: "run",
      text: "R.U.T",
    },
    {
      text: "Acciones",
      formatter: (celContent, row) => (
        <div>
          <Button
            size="sm"
            variant="warning"
            onClick={() => {
              handleEdit(row.id);
            }}
          >
            <FontAwesomeIcon icon={faUserEdit} />
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              handleDelete(row.id, row.nombres);
            }}
          >
            <FontAwesomeIcon icon={faUserTimes} />
          </Button>
        </div>
      ),
      headerStyle: {
        width: "120px",
      },
    },
  ];

  return (
    <>
      <br></br>
      <h1 className="text-center">Mantenedor de Personas</h1>
      <br></br>
      <Row className="justify-content-md-center">
        <Col md="2"></Col>
        <Col md="8">
          <Button onClick={handleNewPersona}>Agregar Persona</Button>
          <BootstrapTable
            keyField="id"
            data={personsReducer.personas ? personsReducer.personas : []}
            columns={columns}
          />
        </Col>
        <Col md="2"></Col>
      </Row>
    </>
  );
};

export default Persona;
