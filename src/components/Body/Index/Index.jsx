import React from "react";
import { Container, Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Index() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/slider/horizontal/4.jpg"
            alt="Primer slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Oferta Especial</h3>
            <p>Aprovecha nuestras ofertas exclusivas. ¡No te lo pierdas!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/slider/horizontal/3.jpg"
            alt="Segundo slide"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Nuevos Productos</h3>
            <p>Descubre nuestra última colección de productos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <h2>Productos Destacados</h2>
        <Row>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/detail/countdown/1.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Link to="/products">
                <Button variant="dark">Ver Detalles</Button>
                 </Link>  
              </Card.Body>
            </Card>
            
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/electronic/2.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
            
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/clothing/4.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
            
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/electronic/6.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
            
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/clothing/1.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
            
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="src/img/products/electronic/7.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Sofá largo de tela de Corea en color azul marino
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
            
          </Col>
         
        </Row>
      </Container>
    </>
  );
}
