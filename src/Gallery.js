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
  Form,
} from "react-bootstrap";
import {
  useHistory,
} from "react-router-dom";

function Gallery() {
  const [products, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    getProductos();
  }, []);

  const history = useHistory();
  const handleClick = (product) => history.push(`/product/${product}`);

  function getProductos() {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products.products);
      });
  }

  const handleSearch = (search) => {
    fetch("http://localhost:8080/products/" + search)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.product);
      });
  };

  const handleCategory = (category) => {
    fetch("http://localhost:8080/products/category/" + category)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.product);
      });
  };

  const handlePrice = (min, max) => {
    fetch("http://localhost:8080/products/price/" + min + "/" + max)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.product);
      });
  };

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
        <Row className="text-center" style={{ padding: "3em" }}>
          <Col>
            <h3>Productos</h3>
          </Col>
        </Row>
        <Row>
          <Col xs md lg="3">
            <InputGroup className="mb-3">
              <InputGroup.Text
              // id="inputGroup-sizing-sm"
              />
              <FormControl
                aria-label="Small"
                placeholder="Buscar por nombre"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(ev) => setSearch(ev.target.value)}
              />
              <Button variant="secondary" onClick={() => handleSearch(search)}>
                Buscar
              </Button>
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
                onChange={(ev) => setMin(ev.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text />
              <FormControl
                aria-label="Small"
                placeholder="Maximo"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(ev) => setMax(ev.target.value)}
              />
            </InputGroup>
            <Button variant="secondary" onClick={() => handlePrice(min, max)}>
              Aplicar Filtro
            </Button>
            <Dropdown.Divider />
            <strong>Categoría</strong>
            <Form onChange={(ev) => handleCategory(ev.target.id)}>
              <Form.Check type="checkbox" label="Zapatos" id={"zapatos"} />
              <Form.Check type="checkbox" label="Bolsitos" id={"bolsitos"} />
              <Form.Check type="checkbox" label="Bolsos" id={"bolsos"} />
              <Form.Check type="checkbox" label="Carteras" id={"carteras"} />
            </Form>
          </Col>
          <Col xs md lg="9">
            <Row>
              {products.map((product) => (
                <Card
                  style={{
                    maxWidth: "25%",
                    padding: "1em",
                    border: "none",
                  }}
                >
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name.toUpperCase()}</Card.Title>
                    <Card.Text>$ {product.precio}</Card.Text>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        handleClick(product.id);
                      }}
                    >
                      Buy
                    </Button>
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

export default Gallery;