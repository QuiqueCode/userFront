import React from "react";

const Categorias = () => {
  return (
    <>
      <div>
        <div className="container-fuid bg-white my-4">
          <div className="container">
            {/*=====================================
Diseño de Categorías
======================================*/}
            <div className="ps-layout--shop">
              <section>
                {/*=====================================
    Los Mejores Artículos en Venta
    ======================================*/}
                <div className="ps-block--shop-features">
                  <div className="ps-block__header">
                    <h3>Los Mejores Artículos en Venta</h3>
                    <div className="ps-block__navigation">
                      <a className="ps-carousel__prev" href="#recommended1">
                        <i className="icon-chevron-left" />
                      </a>
                      <a className="ps-carousel__next" href="#recommended1">
                        <i className="icon-chevron-right" />
                      </a>
                    </div>
                  </div>
                  <div className="ps-block__content">
                    <div
                      className="owl-slider"
                      id="recommended1"
                      data-owl-auto="true"
                      data-owl-loop="true"
                      data-owl-speed={10000}
                      data-owl-gap={30}
                      data-owl-nav="false"
                      data-owl-dots="false"
                      data-owl-item={6}
                      data-owl-item-xs={2}
                      data-owl-item-sm={2}
                      data-owl-item-md={3}
                      data-owl-item-lg={4}
                      data-owl-item-xl={5}
                      data-owl-duration={1000}
                      data-owl-mousedrag="on"
                    >
                      {/*=====================================
    							Producto
    							======================================*/}
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
                            Tienda Joven
                          </a>
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Camisa de Mezcla de Lino Caro Pane
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
                            <p className="ps-product__price">$22.99 - $32.99</p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Camisa de Mezcla de Lino Caro Pane
                            </a>
                            <p className="ps-product__price">$22.99 - $32.99</p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/2.jpg" alt />
                          </a>
                          <div className="ps-product__badge">-7%</div>
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
                              Reloj de Cuero Clásico MVMTH en Negro
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
                              $57.99 <del>$62.99 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Reloj de Cuero Clásico MVMTH en Negro
                            </a>
                            <p className="ps-product__price sale">
                              $57.99 <del>$62.99 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/3.jpg" alt />
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
                            Tienda Joven
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
                              $35.00 <del>$60.00 </del>
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
                              $35.00 <del>$60.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/4.jpg" alt />
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
                            Go Pro
                          </a>
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Audífonos Sound Intone I65 Versión Blanca
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
                              <span>23</span>
                            </div>
                            <p className="ps-product__price sale">
                              $100.00 <del>$105.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Audífonos Sound Intone I65 Versión Blanca
                            </a>
                            <p className="ps-product__price sale">
                              $100.00 <del>$105.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
                                          Producto
                                          ======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/5.jpg" alt />
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
                            Oficina Global
                          </a>
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Bolsa de Viaje de Cuero Herschel en Color Marrón
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
                              Bolsa de Viaje de Cuero Herschel en Color Marrón
                            </a>
                            <p className="ps-product__price">$125.30</p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/6.jpg" alt />
                          </a>
                          <div className="ps-product__badge hot">
                            Más Vendido
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
                              Controlador Inalámbrico Xbox One Color Negro
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
                              $1025.00 <del>$1422.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Controlador Inalámbrico Xbox One Color Negro
                            </a>
                            <p className="ps-product__price sale">
                              $1025.00 <del>$1422.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
                                          Producto
                                          ======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="img/products/shop/best/7.jpg" alt />
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
                              Samsung UHD TV 24 pulgadas
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
                            <p className="ps-product__price">$599.00</p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Samsung UHD TV 24 pulgadas
                            </a>
                            <p className="ps-product__price">$599.00</p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                    </div>
                  </div>
                </div>
                {/* Fin de los Mejores Artículos de Venta */}
                {/*=====================================
    				Artículos Recomendados
    				======================================*/}
                <div className="ps-block--shop-features">
                  <div className="ps-block__header">
                    <h3>Artículos Recomendados</h3>
                    <div className="ps-block__navigation">
                      <a className="ps-carousel__prev" href="#recomendados">
                        <i className="icon-chevron-left" />
                      </a>
                      <a className="ps-carousel__next" href="#recomendados">
                        <i className="icon-chevron-right" />
                      </a>
                    </div>
                  </div>
                  <div className="ps-block__content">
                    <div
                      className="owl-slider"
                      id="recomendados"
                      data-owl-auto="true"
                      data-owl-loop="true"
                      data-owl-speed={10000}
                      data-owl-gap={30}
                      data-owl-nav="false"
                      data-owl-dots="false"
                      data-owl-item={6}
                      data-owl-item-xs={2}
                      data-owl-item-sm={2}
                      data-owl-item-md={3}
                      data-owl-item-lg={4}
                      data-owl-item-xl={5}
                      data-owl-duration={1000}
                      data-owl-mousedrag="on"
                    >
                      {/*=====================================
                                    Producto
                                    ======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="assets/img/1r.jpg"
                              alt
                            />
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
                            Tienda Joven
                          </a>
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Labial Ciate Palemore Color Rojo Audaz
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
                              $42.99 <del>$60.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Labial Ciate Palemore Color Rojo Audaz
                            </a>
                            <p className="ps-product__price sale">
                              $42.99 <del>$60.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/2.jpg"
                              alt
                            />
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
                              Set de 30 Piezas de Mascarillas Naturales
                              StartSkin de Corea
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
                              $32.99 <del>$60.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Set de 30 Piezas de Mascarillas Naturales
                              StartSkin de Corea
                            </a>
                            <p className="ps-product__price sale">
                              $32.99 <del>$60.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
                                          Producto
                                          ======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/3.jpg"
                              alt
                            />
                          </a>
                          <div className="ps-product__badge">-25%</div>
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
                              Kit de Cuidado para el Cabello Baxter para Hombres
                              con Barba
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
                              $93.00 <del>$60.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Kit de Cuidado para el Cabello Baxter para Hombres
                              con Barba
                            </a>
                            <p className="ps-product__price sale">
                              $93.00 <del>$60.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/4.jpg"
                              alt
                            />
                          </a>
                          <div className="ps-product__badge">-46%</div>
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
                              Funda de Almohadón con Estampado de Letras de
                              Algodón
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
                              $13.00 <del>$20.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Funda de Almohadón con Estampado de Letras de
                              Algodón
                            </a>
                            <p className="ps-product__price sale">
                              $13.00 <del>$20.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/5.jpg"
                              alt
                            />
                          </a>
                          <div className="ps-product__badge">-46%</div>
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
                              Cámara de Seguridad Amcrest en Color Blanco
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
                              $13.00 <del>$20.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Cámara de Seguridad Amcrest en Color Blanco
                            </a>
                            <p className="ps-product__price sale">
                              $13.00 <del>$20.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
                                          Producto
                                          ======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/6.jpg"
                              alt
                            />
                          </a>
                          <div className="ps-product__badge">-28%</div>
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
                              Lavadora de Vapor Frontal LG en Color Blanco
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
                              $1025.00 <del>$1422.00 </del>
                            </p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Lavadora de Vapor Frontal LG en Color Blanco
                            </a>
                            <p className="ps-product__price sale">
                              $1025.00 <del>$1422.00 </del>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                      {/*=====================================
    							Producto
    							======================================*/}
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img
                              src="img/products/shop/recommended/7.jpg"
                              alt
                            />
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
                              Samsung UHD TV 24 pulgadas
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
                            <p className="ps-product__price">$599.00</p>
                          </div>
                          <div className="ps-product__content hover">
                            <a
                              className="ps-product__title"
                              href="product-default.html"
                            >
                              Samsung UHD TV 24 pulgadas
                            </a>
                            <p className="ps-product__price">$599.00</p>
                          </div>
                        </div>
                      </div>
                      {/* Fin del Producto */}
                    </div>
                  </div>
                </div>
                {/* Fin de Productos Recomendados */}
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
                          <li>
                            <a href="#tab-2">
                              <i className="icon-list4" />
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
                                  <img src="assets/1.jpg" alt />
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
                                  <img src="img/products/shop/1.jpg" alt />
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
                                  <img src="img/products/shop/2.jpg" alt />
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
                                  <img src="img/products/shop/3.jpg" alt />
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
                                  <img src="img/products/shop/4.jpg" alt />
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
                                  <img src="img/products/shop/5.jpg" alt />
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
                                  <img src="assets/6.jpg" alt />
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
                                  <img src="img/products/shop/7.jpg" alt />
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
                                  <img src="img/products/shop/8.jpg" alt />
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
                                  <img src="img/products/shop/9.jpg" alt />
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
                                  <img src="img/products/shop/10.jpg" alt />
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
                                  <img src="img/products/shop/11.jpg" alt />
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
                        {/* Fin de la Vista en Cuadrícula */}
                        {/*=====================================
Vista en Lista
======================================*/}
                        <div className="ps-tab" id="tab-2">
                          <div className="ps-shopping-product">
                            {/*=====================================
    Producto
    ======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/1.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__vendor">
                                    Vendido por:
                                    <a href="#">TIENDA DE ROBERT</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$1310.00</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
    Producto
    ======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/1.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Apple iPhone Retina 6s Plus 64GB
                                  </a>
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda Joven</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$1150.00</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
    Producto
    ======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/2.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Altavoz Inalámbrico Portátil Marshall
                                    Kilburn
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Ve Pro</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">
                                    $42.99 - $60.00
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
    Producto
    ======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/3.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Ve Pro</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$125.30</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/4.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Oficina Global</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$55.99</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/5.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-37%</div>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Novela de Salto de Interior Grand Slam
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda de Robert</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price sale">
                                    $32.99 <del>$41.00 </del>
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/6.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-5%</div>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Auriculares Sound Intone I65 en Color Blanco
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda Joven</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price sale">
                                    $100.99 <del>$106.00 </del>
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
    								Producto
    								======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/7.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-16%</div>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Sofá Largo de Corea en Tela Azul Marino
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Youngshop</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price sale">
                                    $567.89 <del>$670.20 </del>
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/8.jpg" alt />
                                </a>
                                <div className="ps-product__badge">-16%</div>
                              </div>
                              <div className="ps-product__container">
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda Joven</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price sale">
                                    $35.89 <del>$42.20 </del>
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/9.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Gafas de Sol Rayban Redondas en Color Marrón
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda Joven</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$35.89</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
    								Producto
    								======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/10.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Camisa de Manga Larga de Mezcla de Lino Caro
                                    Pane
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Go Pro</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">
                                    $29.39 - $39.99
                                  </p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                            {/*=====================================
Producto
======================================*/}
                            <div className="ps-product ps-product--wide">
                              <div className="ps-product__thumbnail">
                                <a href="product-default.html">
                                  <img src="img/products/shop/11.jpg" alt />
                                </a>
                              </div>
                              <div className="ps-product__container">
                                <div className="ps-product__content">
                                  <a
                                    className="ps-product__title"
                                    href="product-default.html"
                                  >
                                    Shorts de Running y Natación para Hombres
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
                                  <p className="ps-product__vendor">
                                    Vendido por:<a href="#">Tienda de Robert</a>
                                  </p>
                                  <ul className="ps-product__desc">
                                    <li>
                                      Altavoz estéreo activo portátil sin
                                      restricciones
                                    </li>
                                    <li>Libre de cables y cuerdas</li>
                                    <li>20 horas de capacidad portátil</li>
                                    <li>
                                      Cable de doble extremo con enchufes
                                      estéreo de 3.5 mm incluido
                                    </li>
                                    <li>
                                      Tweeters de cúpula de 3/4″: 2X y Woofer de
                                      4″: 1X
                                    </li>
                                  </ul>
                                </div>
                                <div className="ps-product__shopping">
                                  <p className="ps-product__price">$13.43</p>
                                  <a className="ps-btn" href="#">
                                    Agregar al carrito
                                  </a>
                                  <ul className="ps-product__actions">
                                    <li>
                                      <a href="#">
                                        <i className="icon-eye" />
                                        Ver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-heart" /> Lista de
                                        deseos
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* Fin del Producto */}
                          </div>
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
