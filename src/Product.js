import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import {
  useParams
} from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    fetch("http://localhost:8080/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product[0]);
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
              <h1>{product.name}</h1>
              <h2>{product.precio}</h2>
              <h4>{product.categoria}</h4>
              <Button variant="secondary">AGREGAR AL CARRITO</Button>
              <Button variant="dark">COMPRAR AHORA</Button>
              <span>{product.descripcion}</span>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
