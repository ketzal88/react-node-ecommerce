import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Text,
  Image,
  Button,
  H1,
  H2,
  H4
} from "react-bootstrap";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product.product);
      });
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="ml-5 mt-3 mb-3">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Comprar</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Navbar.Brand
          className="m-auto"
          href="#home"
          style={{ fontWeight: "bold" }}
        >
          NOMADS
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs md lg="8">
            <Image src={product.img}></Image>
          </Col>
          <Col xs md lg="4">
            <Row>
              <H1>{product.name}</H1>
              <H2>{product.precio}</H2>
              <H4>{product.categoria}</H4>
              <Button variant="secondary">AGREGAR AL CARRITO</Button>
              <Button variant="dark">COMPRAR AHORA</Button>
              <Text>{product.descripcion}</Text>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
