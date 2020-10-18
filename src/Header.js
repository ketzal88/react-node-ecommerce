import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="ml-5 mt-3 mb-3">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/">Comprar</Nav.Link>
          <Nav.Link href="/">Blog</Nav.Link>
        </Nav>
        <Navbar.Brand
          className="m-auto"
          href="/"
          style={{ fontWeight: "bold" }}
        >
          NOMADS
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
