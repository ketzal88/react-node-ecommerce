import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
// import { Container, Row } from "reactstrap";

function App() {
  const { products, setProductos } = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  function getProductos() {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products.products);
        console.log(products);
      })
      .catch(() => this.setState({}));
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Comprar</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">NOMADS</Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Productos</h2>
          </Col>
        </Row>
        <Row>
          <Col xs md lg="2">
            <h2>Menu</h2>
          </Col>
          <Col xs md lg="10">
            {/* {products.map((product) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
