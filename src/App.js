import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
  FormCheck,
} from "react-bootstrap";
// import { Container, Row } from "reactstrap";

function App() {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  function getProductos() {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products.products);
        console.log(products);
      });
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className='ml-5 mt-3 mb-3'>
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Comprar</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Navbar.Brand className='m-auto' href="#home"style={{ fontWeight: 'bold' }}>
          NOMADS
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="text-center" style={{ padding: "3em" }}>
          <Col>
            <h3>Productos</h3>
          </Col>
        </Row>
        <Row>
          <Col xs md lg="2">
            <InputGroup className="mb-3">
              <InputGroup.Text
              // id="inputGroup-sizing-sm"
              />
              <FormControl
                aria-label="Small"
                placeholder="Buscar por nombre"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Dropdown.Divider />
            <strong>Precio</strong>
            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text
              // id="inputGroup-sizing-sm"
              />
              <FormControl
                aria-label="Small"
                placeholder="Minimo"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text />
              <FormControl
                aria-label="Small"
                placeholder="Maximo"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Button variant="secondary">Aplicar Filtro</Button>
            <Dropdown.Divider />
            <strong>Categoría</strong>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox label="Zapatos" />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormCheck>zaasf</FormCheck>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox />
            </InputGroup>
          </Col>
          <Col xs md lg="10">
            <Row>
              {products.map((product) => (
                <Card
                  style={{ maxWidth: "25%", padding: "1em", border: "none" }}
                >
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name.toUpperCase()}</Card.Title>
                    <Card.Text>$ {product.precio}</Card.Text>
                    {/* <Button variant="primary">Buy</Button> */}
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
