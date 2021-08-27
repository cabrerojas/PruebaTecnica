import React from "react";
import { Link } from "react-router-dom";
const Nabvar = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/persons">Mantenedor Personas</Link>
    </div>
  );
};

export default Nabvar;
