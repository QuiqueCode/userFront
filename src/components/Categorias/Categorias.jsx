import React from "react";
import { Container, Card, Button, Row, Col, Carousel } from "react-bootstrap";

const Categorias = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/slider/horizontal/4.jpg"
            alt="Primer slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Los Mejores Artículos en Venta</h3>
            <p>Aprovecha nuestras ofertas exclusivas. ¡No te lo pierdas!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/img/slider/horizontal/3.jpg"
            alt="Segundo slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Los Mejores Artículos en Venta</h3>
            <p>Descubre nuestra última colección de productos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-4">
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
      <Container className="mt-4">
        <h2>Productos de Ropa</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="assets/img/clothing/1.jpg"
              />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima ipsum expedita sed, eveniet accusantium corporis alias, mollitia deleniti voluptatibus, velit illum officia. Id in odit ullam autem est sed!
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/clothing/2.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt dolorem culpa reprehenderit, et numquam eum illo ad magni delectus assumenda incidunt libero inventore ullam iste blanditiis dicta reiciendis quam.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/clothing/3.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet magnam nostrum ipsum quos itaque earum vitae amet officia, ex magni quas voluptate harum placeat possimus dolorem labore. Aliquam, asperiores!
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/clothing/4.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus totam excepturi adipisci vero obcaecati hic tempore consequatur nulla recusandae eius consectetur, veniam facilis sapiente dolores cumque ipsa odit odio.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/clothing/5.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis consequatur officiis, repudiandae maxime eius sapiente? Nostrum optio eaque sit possimus, minima facere officia error iure molestiae esse exercitationem enim delectus?
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="assets/img/clothing/6.jpg" />
              <Card.Body>
                <Card.Title>Sofá largo</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi a quod fugit! Enim ipsam at ratione cum maxime debitis assumenda possimus! Aliquam, earum facere porro quae itaque recusandae ad.
                </Card.Text>
                <Button variant="dark">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
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
      <div>

        <div className="container-fuid bg-white my-4">
          <div className="container">
            {/*=====================================
Diseño de Categorías
======================================*/}
            <div className="ps-layout--shop">
              <section>
                {/*=====================================
                              Productos encontrados
                              ======================================*/}
                <div className="ps-shopping ps-tab-root">
                  {/*=====================================
                                  Cabecera de Compras
                                  ======================================*/}
                  <div className="ps-shopping__header">
                    <p>
                      <strong> 36</strong> Productos encontrados
                    </p>
                    <div className="ps-shopping__actions">
                      <select
                        className="ps-select"
                        data-placeholder="Ordenar Artículos"
                      >
                        <option>Ordenar por más recientes</option>
                        <option>Ordenar por popularidad</option>
                        <option>Ordenar por calificación promedio</option>
                        <option>Ordenar por precio: de bajo a alto</option>
                        <option>Ordenar por precio: de alto a bajo</option>
                      </select>
                      <div className="ps-shopping__view">
                        <p>Ver</p>
                        <ul className="ps-tab-list">
                          <li className="active">
                            <a href="#tab-1">
                              <i className="icon-grid" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*=====================================
    					Cuerpo de Compras
    					======================================*/}
                  <div className="ps-tabs">
                    {/*=====================================
				Vista de Cuadrícula
				======================================*/}
                    <div className="ps-tab active" id="tab-1">
                      <div className="ps-shopping-product">
                        <div className="row">
                          {/*=====================================
							Producto
							======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/1.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  TIENDA DE ROBERT
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__price">$1310.00</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__price">$1310.00</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
							Producto
							======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/1.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Young Shop
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__price">$1150.00</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__price">$1150.00</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
							Producto
							======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/2.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Go Pro
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Marshall Kilburn Altavoz Portátil
                                    Inalámbrico
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price">
                                    $42.99 - $60.00
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Marshall Kilburn Altavoz Portátil
                                    Inalámbrico
                                  </a>
                                  <p className="ps-product__price">
                                    $42.99 - $60.00
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
    									Producto
    									======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/3.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Go Pro
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Bolso de Cuero Herschel en Color Marrón
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price">$125.30</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Bolso de Cuero Herschel en Color Marrón
                                  </a>
                                  <p className="ps-product__price">$125.30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                                      Producto
                                                      ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/4.jpg" alt />
                                </a>
                                <div className="ps-product__badge hot">
                                  ¡Caliente!
                                </div>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Oficina Global
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Controlador Inalámbrico Xbox One en Color
                                    Negro
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price">$55.99</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Controlador Inalámbrico Xbox One en Color
                                    Negro
                                  </a>
                                  <p className="ps-product__price">$55.99</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                                      Producto
                                                      ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/5.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-37%</div>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Tienda de Robert
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Gran Slam Interior de Novela de Salto
                                    Ecuestre
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price sale">
                                    $32.99 <del>$41.00 </del>
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Gran Slam Interior de Novela de Salto
                                    Ecuestre
                                  </a>
                                  <p className="ps-product__price sale">
                                    $32.99 <del>$41.00 </del>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
    									Producto
    									======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/6.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-5%</div>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Youngshop
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Auriculares Sound Intone I65 Versión Blanca
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price sale">
                                    $100.99 <del>$106.00 </del>
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Auriculares Sound Intone I65 Versión Blanca
                                  </a>
                                  <p className="ps-product__price sale">
                                    $100.99 <del>$106.00 </del>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                                      Producto
                                                      ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/7.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-16%</div>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Youngshop
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Sofá Largo de Corea en Color Azul Marino
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price sale">
                                    $567.89 <del>$670.20 </del>
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Sofá Largo de Corea en Color Azul Marino
                                  </a>
                                  <p className="ps-product__price sale">
                                    $567.89 <del>$670.20 </del>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                                      Producto
                                                      ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/8.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-16%</div>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Young shop
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Mochila Clásica Militar Unero
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>02</span>
                                  </div>
                                  <p className="ps-product__price sale">
                                    $35.89 <del>$42.20 </del>
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Mochila Clásica Militar Unero
                                  </a>
                                  <p className="ps-product__price sale">
                                    $35.89 <del>$42.20 </del>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
    									Producto
    									======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/9.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Tienda Joven
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Gafas de Sol Rayban Redondas Color Marrón
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>02</span>
                                  </div>
                                  <p className="ps-product__price">$35.89</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Gafas de Sol Rayban Redondas Color Marrón
                                  </a>
                                  <p className="ps-product__price">$35.89</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                    Producto
                                    ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/10.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Ve Pro
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Camisa de Manga Larga de Lino y Mezcla de
                                    Caro
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price">
                                    $29.39 - $39.99
                                  </p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Camisa de Manga Larga de Lino y Mezcla de
                                    Caro
                                  </a>
                                  <p className="ps-product__price">
                                    $29.39 - $39.99
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          {/*=====================================
                                    Producto
                                    ======================================*/}
                          <div className="col-lg-2 col-md-4 col-6">
                            <div className="ps-product">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="assets/img/11.jpg" alt />
                                </a>
                                <ul className="ps-product__actions">
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar al Carrito"
                                    >
                                      <i className="icon-bag2" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Vista Rápida"
                                    >
                                      <i className="icon-eye" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Agregar a Favoritos"
                                    >
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="ps-product__container">
                                <a className="ps-product__vendor" href="#">
                                  Tienda de Robert
                                </a>
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Shorts Deportivos de Hombre para Correr y
                                    Nadar
                                  </a>
                                  <div className="ps-product__rating">
                                    <select
                                      className="ps-rating"
                                      data-read-only="true"
                                    >
                                      <option value={1}>1</option>
                                      <option value={1}>2</option>
                                      <option value={1}>3</option>
                                      <option value={1}>4</option>
                                      <option value={2}>5</option>
                                    </select>
                                    <span>01</span>
                                  </div>
                                  <p className="ps-product__price">$13.43</p>
                                </div>
                                <div className="ps-product__content hover">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Shorts Deportivos de Hombre para Correr y
                                    Nadar
                                  </a>
                                  <p className="ps-product__price">$13.43</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Fin del Producto */}
                          <div className="ps-pagination">
                            <ul className="pagination">
                              <li className="active">
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">
                                  Página Siguiente
                                  <i className="icon-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Fin de Categorías de Diseño */}
          </div>
          {/* Fin de Contenedor */}
        </div>
        {/* Fin de Contenedor Fluido */}
        {/*=====================================
	Newletter
	======================================*/}
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
      </div>
    </>
  );
};

export default Categorias;
