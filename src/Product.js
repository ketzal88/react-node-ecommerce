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
import { useParams } from "react-router-dom";
import Header from "./Header";

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
      <Header />
      <Container>
        <Row>
          <Col xs md lg="8">
            <Image
              src={product.img}
              style={{ width: "400px", margin: "5em" }}
            ></Image>
          </Col>
          <Col xs md lg="4">
            <Row
              style={{
                marginTop: "5em",
                marginRight: "5em",
                marginLeft: "-10em",
              }}
            >
              <div>
                <h1>{product.name}</h1>
                <h2 style={{ fontWeight: "bold" }}>$ {product.precio}</h2>
                <div>
                  <Button
                    variant="light"
                    block
                    style={{
                      marginTop: "1em",
                    }}
                  >
                    AGREGAR AL CARRITO
                  </Button>
                </div>
                <div>
                  <Button
                    variant="dark"
                    block
                    style={{
                      marginTop: "1em",
                    }}
                  >
                    COMPRAR AHORA
                  </Button>
                </div>
                <div
                  style={{
                    marginTop: "1em",
                  }}
                >
                  {product.descripcion}
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
