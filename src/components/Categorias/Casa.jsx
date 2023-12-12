import React from "react";
import { Container, Card, Button, Row, Col, Carousel } from "react-bootstrap";

const Casa = () => {
  return (
    <>

<div className="ps-vendor-banner bg--cover" style={{background: 'url(src/img/banner/top/casa.png)'}}>
      <div className="container">
        <h2></h2><a className="ps-btn ps-btn--lg" href="#">Empieza a vender</a>
      </div>
    </div>
    
    <Container className="mt-4 pt-5">
        <h2>Productos de Casa</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="assets/img/home/1.jpg"
              />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vero blanditiis. Deserunt, eligendi iure facere praesentium, rerum qui quasi cum, voluptate nemo fuga assumenda doloremque rem atque esse suscipit.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/home/2.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quia nihil explicabo voluptas, nesciunt fuga nemo iusto, tempore soluta vero harum eligendi ea odit maxime asperiores accusantium quaerat aliquid culpa.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/home/3.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, neque quia velit enim perspiciatis non blanditiis maxime culpa, dolorem magni accusamus cum corrupti ipsum. Nam corporis odit ullam rerum eius.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/home/4.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolores ad excepturi adipisci ipsa voluptatem aspernatur asperiores quasi placeat quia suscipit vitae nulla ea iure perspiciatis illo sint vero nobis?
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/home/5.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias qui praesentium eius eum possimus eveniet dolore dignissimos beatae quam quos, ullam exercitationem perferendis dolorum dolor pariatur est accusantium quibusdam?
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/home/6.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi maxime molestiae sapiente ex fuga aperiam et, deleniti nemo eos. Iste adipisci eos praesentium quam, doloribus error! Quibusdam, facere quos?
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

export default Casa;