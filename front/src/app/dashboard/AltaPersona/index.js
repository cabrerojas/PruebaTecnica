import React, { useState, useEffect } from "react";
import Confirmacion from "../../components/Confirmacion";
import Alta from "../../components/dashboard/Alta";
import { Modal } from "antd";

const AltaPersona = () => {
  const [loadingOnClick, setLoadingOnClick] = useState(false);
  const [showConfirmationModal, setShowConfimacionModal] = useState(false);

  const valuesFormValidates = () => {
    setLoadingOnClick(true);
  };

  const hideModalConfirmacion = () => {
    setLoadingOnClick(false);
    setShowConfimacionModal(false)
  }

  useEffect(() => {
    if (loadingOnClick) {
      setShowConfimacionModal(true);
    }
  }, [loadingOnClick]);

  return (
    <>
      <Alta
        valuesFormValidates={valuesFormValidates}
        loadingOnClick={loadingOnClick}
      />
      {showConfirmationModal && (
        <Modal
          title={
            <div
              style={{
                width: "100%",
                cursor: "move",
              }}
            >
              Alta 
            </div>
          }
          onOk={() => hideModalConfirmacion}
          onCancel={() => hideModalConfirmacion}
          visible={false}
        >
          <Confirmacion />
        </Modal>
      )}
      ;
    </>
  );
};

export default AltaPersona;
