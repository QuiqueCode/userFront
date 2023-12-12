import React from "react";
import { Container, Card, Button, Row, Col, Carousel } from "react-bootstrap";

const Tecnologia = () => {
  return (
    <>

<div className="ps-vendor-banner bg--cover" style={{background: 'url(src/img/banner/top/technology.jpg)'}}>
      <div className="container">
        <h2>Millones de compradores no pueden esperar a ver lo que tienes en la tienda</h2><a className="ps-btn ps-btn--lg" href="#">Empieza a vender</a>
      </div>
    </div>
    
     <Container className="mt-4 pt-5">
        <h2>Productos de Tecnología</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="assets/img/tecnologia/1.jpg"
              />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/tecnologia/2.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/tecnologia/3.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/tecnologia/4.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/tecnologia/5.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/tecnologia/6.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Eos architecto explicabo, nihil quo similique quaerat sint vero dignissimos? Pariatur culpa praesentium voluptas omnis tenetur, adipisci dolorem quaerat fuga.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="ps-pagination pb-5">
              <ul className="pagination">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">Pagina siguiente<i className="icon-chevron-right" /></a></li>
              </ul>
            </div>

            <div className="ps-newsletter">
          <div className="container">
            <form
              className="ps-form--newsletter"
              action="do_action"
              method="post"
            >
              <div className="row">
                <div className="col-xl-5 col-12 ">
                  <div className="ps-form__left">
                    <h3>Boletin informativo</h3>
                    <p>
                      Suscríbete para obtener información sobre productos y
                      cupones.
                    </p>
                  </div>
                </div>
                <div className="col-xl-7 col-12 ">
                  <div className="ps-form__right">
                    <div className="form-group--nest">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email address"
                      />
                      <button className="ps-btn">Suscríbete</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

    </>
  );
}

export default Tecnologia;