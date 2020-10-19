import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
  Form,
  Pagination,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Gallery() {
  const [products, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPage, setSelectedPage] = useState(0);
  const [page, setPage] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    getProductos();
  }, [selectedPage]);

  const history = useHistory();
  const handleClick = (product) => history.push(`/product/${product}`);

  function getProductos() {
    fetch(`http://localhost:8080/products?page=${selectedPage}`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
        const pag = Array.from(Array(data.pages).keys());
        setPage(pag);
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

  console.log(selectedPage);
  return (
    <div>
      <Header />
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
            </InputGroup>
            <Button variant="secondary" onClick={() => handleSearch(search)}>
              Buscar
            </Button>
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
              <Pagination
                style={{
                  maxWidth: "25%",
                  padding: "1em",
                  border: "none",
                }}
              >
                {page.map((pag, index) => (
                  <Pagination.Item
                    key={index}
                    onClick={() => setSelectedPage(index)}
                    // active={selectedPage}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Row>
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
