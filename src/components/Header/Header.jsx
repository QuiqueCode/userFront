import React from "react";
import "./linearIcons.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div
        className="ps-block--promotion-header bg--cover"
        style={{ background: "url(src/img/banner/top/header-promotion.jpg)" }}
      >
        <div className="container">
          <div className="ps-block__left">
            <h3>20%</h3>
            <figure>
              <p>Descuento</p>
              <h4>En Libros de Marzo</h4>
            </figure>
          </div>
          <div className="ps-block__center">
            <p>
              Introduce la Promoción<span>Sale2019</span>
            </p>
          </div>
          <a className="ps-btn ps-btn--sm" href="products.html">
            Compra ahora
          </a>
        </div>
      </div>
      {/*=====================================
	Encabezado
	======================================*/}
      <header
        className="header header--standard header--market-place-4"
        data-sticky="true"
      >
        {/*=====================================
		Encabezado SUPERIOR
		======================================*/}
        <div className="header__top">
          <div className="container">
            {/*=====================================
				Social 
				======================================*/}
            <div className="header__left">
              <ul className="d-flex justify-content-center">
                <li>
                  <a href="#" target="_blank">
                  <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                  <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                  <FaSquareXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                  <FaYoutubeSquare  />
                  </a>
                </li>
              </ul>
            </div>
            {/*=====================================
				Contacto e Idioma 
				======================================*/}
            <div className="header__right">
              <ul className="header__top-links">
                <li>
                  <i className="icon-telephone" /> Línea Directa:
                  <strong> 1-800-234-5678</strong>
                </li>
                <li>
                  <div className="ps-dropdown language">
                    <a href="#">
                      <img src="src/img/template/es.png" alt />
                      Español
                    </a>
                    <ul className="ps-dropdown-menu">
                      <li>
                        <a href="#">
                          <img src="src/img/template/en.png" alt /> Inglés
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Fin Contenedor */}
        </div>
        {/* Encabezado Superior */}
        {/*=====================================
		Contenido del Encabezado
		======================================*/}
        <div className="header__content">
          <div className="container">
            <div className="header__content-left">
              {/*=====================================
					Logotipo
					======================================*/}
              <a className="ps-logo" href="/">
                <img src="src/img/icons/ticoMarket.png" alt />
              </a>
              {/*=====================================
              Menú
              ======================================*/}
              <div className="menu--product-categories">
                <div className="menu__toggle">
                  <i className="icon-menu" />
                  <span> Comprar por Departamento</span>
                </div>
                <div className="menu__content">
                  <ul className="menu--dropdown">


                  <li>
                    <Link to="/serVendedor">
                      <i className="icon-star" /> Guía del comprador
                    </Link>  
                  </li>

                    <li className="menu-item-has-children has-mega-menu">
                      <a href="categories.html">
                        <i className="icon-laundry" /> Electrónica de Consumo
                      </a>
                      <div className="mega-menu">
                        <div className="mega-menu__column">
                          <h4>
                            Electrónica
                            <span className="sub-toggle" />
                          </h4>
                          <ul className="mega-menu__list">
                            <li>
                              <a href="categories.html">
                                Audio para el Hogar y Teatros
                              </a>
                            </li>
                            <li>
                              <a href="#">TV y Videos</a>
                            </li>
                            <li>
                              <a href="#">Cámaras, Fotos y Videos</a>
                            </li>
                            <li>
                              <a href="#">Celulares y Accesorios</a>
                            </li>
                            <li>
                              <a href="#">Auriculares</a>
                            </li>
                            <li>
                              <a href="#">Videojuegos</a>
                            </li>
                            <li>
                              <a href="#">Altavoces Inalámbricos</a>
                            </li>
                            <li>
                              <a href="#">Electrónica de Oficina</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>
                            Accesorios y Partes
                            <span className="sub-toggle" />
                          </h4>
                          <ul className="mega-menu__list">
                            <li>
                              <a href="#">Cables Digitales</a>
                            </li>
                            <li>
                              <a href="#">Cables de Audio y Video</a>
                            </li>
                            <li>
                              <a href="#">Baterías</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-shirt" /> Ropa y Accesorios
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-lampshade" /> Hogar, Jardín y Cocina
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart-pulse" /> Salud y Belleza
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-diamond2" /> Joyería y Relojes
                      </a>
                    </li>
                    <li className="menu-item-has-children has-mega-menu">
                      <a href="#">
                        <i className="icon-desktop" /> Computadoras y Tecnología
                      </a>
                      <div className="mega-menu">
                        <div className="mega-menu__column">
                          <h4>
                            Computadoras y Tecnologías
                            <span className="sub-toggle" />
                          </h4>
                          <ul className="mega-menu__list">
                            <li>
                              <a href="#">Computadoras y Tabletas</a>
                            </li>
                            <li>
                              <a href="#">Laptops</a>
                            </li>
                            <li>
                              <a href="#">Monitores</a>
                            </li>
                            <li>
                              <a href="#">Redes</a>
                            </li>
                            <li>
                              <a href="#">Almacenamiento y Unidades</a>
                            </li>
                            <li>
                              <a href="#">Componentes de Computadora</a>
                            </li>
                            <li>
                              <a href="#">Seguridad y Protección</a>
                            </li>
                            <li>
                              <a href="#">Laptops para Juegos</a>
                            </li>
                            <li>
                              <a href="#">Accesorios</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-baby-bottle" /> Bebés y Mamás
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-baseball" /> Deporte y Exterior
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-smartphone" /> Teléfonos y Accesorios
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-book2" /> Libros y Oficina
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-car-siren" /> Autos y Motocicletas
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-wrench" /> Mejoras para el Hogar
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-tag" /> Cupones y Servicios
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Fin del menú*/}
            </div>
            {/* Fin del Contenido Izquierdo del Encabezado*/}
            {/*=====================================
				Búsqueda
				======================================*/}
            <div className="header__content-center">
              <form
                className="ps-form--quick-search"
                action="index.html"
                method="get"
              >
                <div className="form-group--icon">
                  <i className="icon-chevron-down" />
                  <select className="form-control">
                    <option value={1}>Todos</option>
                    <option value={1}>Smartphone</option>
                    <option value={1}>Sonidos</option>
                    <option value={1}>Juguetes Tecnológicos</option>
                  </select>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Estoy buscando..."
                />
                <button>Buscar</button>
              </form>
            </div>
            <div className="header__content-right">
              <div className="header__actions">
                {/*=====================================
						Lista de Deseos
						======================================*/}
                <a className="header__extra" href="#">
                  <i className="icon-heart" />
                  <span>
                    <i>0</i>
                  </span>
                </a>
                {/*=====================================
						Carrito
						======================================*/}
                <div className="ps-cart--mini">
                  <a className="header__extra" href="#">
                    <i className="icon-bag2" />
                    <span>
                      <i>2</i>
                    </span>
                  </a>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src="src/img/products/clothing/5.jpg" alt />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <i className="icon-cross" />
                          </a>
                          <a href="product-default.html">
                            Reloj de Cuero Clásico MVMTH en Negro
                          </a>
                          <p>
                            <strong>Vendido por:</strong> YOUNG SHOP
                          </p>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src="src/img/products/clothing/1.jpg" alt />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <i className="icon-cross" />
                          </a>
                          <a href="product-default.html">
                            Camisa de Mezcla de Lino con Manga Caro Pane
                          </a>
                          <p>
                            <strong>Vendido por:</strong> YOUNG SHOP
                          </p>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__footer">
                      <h3>
                        Subtotal:<strong>$59.99</strong>
                      </h3>
                      <figure>
                        <a className="ps-btn" href="shopping-cart.html">
                          Ver Carrito
                        </a>
                        <a className="ps-btn" href="checkout.html">
                          Pagar
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
                {/*=====================================
						Inicio de Sesión y Registro
						======================================*/}
              </div>
              {/* Fin Acciones del Encabezado*/}
            </div>
            {/* Fin Contenido Derecho del Encabezado*/}
          </div>
          {/* Fin Contenedor*/}
        </div>
        {/* Fin Contenido del Encabezado*/}
      </header>
      {/*=====================================
	Encabezado Móvil
	======================================*/}
      <header className="header header--mobile" data-sticky="true">
        <div className="header__top">
          <div className="header__left">
            <ul className="d-flex justify-content-center">
              <li>
                <a href="#" target="_blank">
                <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaSquareXTwitter/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                <FaYoutubeSquare  />
                </a>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul className="navigation__extra">
              <li>
                <i className="icon-telephone" /> Línea Directa:
                <strong> 1-800-234-5678</strong>
              </li>
              <li>
                <div className="ps-dropdown language">
                  <a href="#">
                    <img src="src/img/template/en.png" alt />
                    Inglés
                  </a>
                  <ul className="ps-dropdown-menu">
                    <li>
                      <a href="#">
                        <img src="src/img/template/es.png" alt /> Español
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation--mobile" id="menu-movil">
          <div className="navigation__left">
            {/*=====================================
				Menu Móvil
				======================================*/}
            <div className="menu--product-categories">
              <div className="ps-shop__filter-mb mt-4" id="filter-sidebar">
                <i className="icon-menu " />
              </div>
              <div className="ps-filter--sidebar">
                <div className="ps-filter__header">
                  <h3>Categorías</h3>
                  <a className="ps-btn--close ps-btn--no-boder" href="#" />
                </div>
                <div className="ps-filter__content">
                  <aside className="widget widget_shop">
                    <ul className="ps-list--categories">
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Ropa y Accesorios</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{ display: "none" }}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Mujeres</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Hombres</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Bolsos</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Gafas de Sol</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Accesorios</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Moda Infantil</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Jardín y Cocina</a>
                        <span className="sub-toggle active">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{ display: "block" }}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Utensilios de Cocina</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Decoración</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Muebles</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">
                              Herramientas de Jardín
                            </a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">
                              Mejoras para el Hogar
                            </a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">
                              Herramientas Manuales y Eléctricas
                            </a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Utensilios y Gadgets</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Electrónica de Consumo</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">Aires Acondicionados</a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Accesorios</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Tipo Celda Colgante
                                </a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Tipo Pared Colgante
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">Audios y Teatros</a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Auriculares</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Sistema de Teatro en Casa
                                </a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Altavoces</a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">
                              Electrónica para Autos
                            </a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Audio y Video</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Seguridad para Autos
                                </a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Detector de Radar
                                </a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  GPS para Vehículos
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">
                              Electrónica de Oficina
                            </a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Impresoras</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Proyectores</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Escáneres</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Tienda y Negocios
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">Televisores</a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">TVs 4K Ultra HD</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">TVs LED</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">TVs OLED</a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item menu-item-has-children">
                            <a href="shop-default.html">Lavadoras</a>
                            <span className="sub-toggle">
                              <i className="fa fa-angle-down" />
                            </span>
                            <ul className="sub-menu" style={{}}>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">
                                  Tipo Secado de Ropa
                                </a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Tipo Horizontal</a>
                              </li>
                              <li className="current-menu-item ">
                                <a href="shop-default.html">Tipo Vertical</a>
                              </li>
                            </ul>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Refrigeradores</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Salud y Belleza</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Equipos</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Cuidado del Cabello</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Perfumería</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Cuidado de la Piel</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">
                          Computadoras y Tecnologías
                        </a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">PC de Escritorio</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Laptop</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Smartphones</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Joyería y Relojes</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Joyería con Gemas</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Relojes para Hombres</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Relojes para Mujeres</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Teléfonos y Accesorios</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Iphone 8</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Iphone X</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Sam Sung Note 8</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Sam Sung S8</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item menu-item-has-children">
                        <a href="shop-default.html">Deporte y Exterior</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu" style={{}}>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Quemador de Grasa</a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">
                              Refrigerador Portátil
                            </a>
                          </li>
                          <li className="current-menu-item ">
                            <a href="shop-default.html">Gabinetes para Vinos</a>
                          </li>
                        </ul>
                      </li>
                      <li className="current-menu-item ">
                        <a href="shop-default.html">Bebés y Mamás</a>
                      </li>
                      <li className="current-menu-item ">
                        <a href="shop-default.html">Libros y Oficina</a>
                      </li>
                      <li className="current-menu-item ">
                        <a href="shop-default.html">Autos y Motocicletas</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
            {/* Fin del menú*/}
          </div>
          <div className="navigation__center">
            <a className="ps-logo" href="index.html">
              <img
                src="src/img/icons/ticoMarket.png"
                alt="Logo de la Marketplace"
                className="img-fluid"
                width={150}
                height={100}
              />
            </a>
          </div>
          <div className="navigation__right">
            <div className="header__actions">
              {/*=====================================
                                              Carrito
                                              ======================================*/}
              <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                  <i className="icon-bag2" />
                  <span>
                    <i>0</i>
                  </span>
                </a>
                <div className="ps-cart__content">
                  <div className="ps-cart__items">
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#">
                          <img src="src/img/products/clothing/7.jpg" alt />
                        </a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#">
                          <i className="icon-cross" />
                        </a>
                        <a href="product-default.html">
                          Reloj de Cuero Clásico MVMTH en Negro
                        </a>
                        <p>
                          <strong>Vendido por:</strong> YOUNG SHOP
                        </p>
                        <small>1 x $59.99</small>
                      </div>
                    </div>
                    <div className="ps-product--cart-mobile">
                      <div className="ps-product__thumbnail">
                        <a href="#">
                          <img src="src/img/products/clothing/5.jpg" alt />
                        </a>
                      </div>
                      <div className="ps-product__content">
                        <a className="ps-product__remove" href="#">
                          <i className="icon-cross" />
                        </a>
                        <a href="product-default.html">
                          Camisa de Lino Mezclado con Manga Caro Pane
                        </a>
                        <p>
                          <strong>Vendido por:</strong> YOUNG SHOP
                        </p>
                        <small>1 x $59.99</small>
                      </div>
                    </div>
                  </div>
                  <div className="ps-cart__footer">
                    <h3>
                      Subtotal:<strong>$59.99</strong>
                    </h3>
                    <figure>
                      <a className="ps-btn" href="shopping-cart.html">
                        Ver Carrito
                      </a>
                      <a className="ps-btn" href="checkout.html">
                        Pagar
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              {/*=====================================
              Inicio de Sesión y Registro
              ======================================*/}
            </div>
          </div>
        </div>
        {/*=====================================
  Búsqueda
  ======================================*/}
        <div className="ps-search--mobile">
          <form
            className="ps-form--search-mobile"
            action="index.html"
            method="get"
          >
            <div className="form-group--nest">
              <input
                className="form-control"
                type="text"
                placeholder="Buscar algo..."
              />
              <button>
                <i className="icon-magnifier" />
              </button>
            </div>
          </form>
        </div>
      </header>{" "}
      {/* Fin del Encabezado Móvil */}
      {/*=====================================
  Migajas de Pan
  ======================================*/}

    </>
  );
};

export default Header;
