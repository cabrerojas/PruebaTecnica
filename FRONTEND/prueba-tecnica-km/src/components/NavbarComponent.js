import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/" className="navbar-brand">Prueba Tecnica MSF</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/persona">Gestion Persona</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
