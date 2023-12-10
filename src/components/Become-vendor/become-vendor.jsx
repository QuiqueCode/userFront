import React from "react";
import './style.css';
import './fontawesome-stars.css';
import './fontawesome.min.css';

const beacomeVendor = () => {
    return (
        <div>
  {/*=====================================
    Breadcrumb
    ======================================*/}
  <div className="ps-breadcrumb">
    <div className="container">
      <ul className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li>Conviértete en vendedor</li>
      </ul>
    </div>
  </div>
  {/*=====================================
    Become a Vendor Content
    ======================================*/}
  <div className="container-fluid p-0">
    {/*=====================================
  Become a Vendor Banner
  ======================================*/}
    <div className="ps-vendor-banner bg--cover" style={{background: 'url(assets/vendor/vendor.jpg)'}}>
      <div className="container">
        <h2>Millones de compradores no pueden esperar a ver lo que tienes en la tienda</h2><a className="ps-btn ps-btn--lg" href="#">Empieza a vender</a>
      </div>
    </div>
    {/*=====================================
  Become a Vendor About
  ======================================*/}
    <div className="ps-section--vendor ps-vendor-about">
      <div className="container">
        <div className="ps-section__header">
          <p>POR QUÉ VENDER EN TicoMarket</p>
          <h4>Únase a un mercado donde casi 50 millones de compradores en todo <br /> el mundo compran artículos
            únicos
          </h4>
        </div>
        <div className="ps-section__content">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
              <div className="ps-block--icon-box-2">
                <div className="ps-block__thumbnail"><img src="assets/icons/vendor-1.png" alt /></div>
                <div className="ps-block__content">
                  <h4>Tarifas bajas</h4>
                  <div className="ps-block__desc" data-mh="about-desc" style={{height: 75}}>
                    <p>No se necesita mucho para enumerar sus artículos y, una vez que realiza una
                      venta, TicoMarket
                      la tarifa de transacción es solo del 2,5%.</p>
                  </div><a href="#">Aprende más</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
              <div className="ps-block--icon-box-2">
                <div className="ps-block__thumbnail"><img src="assets/icons/vendor-2.png" alt /></div>
                <div className="ps-block__content">
                  <h4>herramientas poderosas</h4>
                  <div className="ps-block__desc" data-mh="about-desc" style={{height: 75}}>
                    <p>Nuestras herramientas y servicios facilitan la gestión, la promoción y el
                      crecimiento de su
                      negocio.</p>
                  </div><a href="#">Aprende más</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
              <div className="ps-block--icon-box-2">
                <div className="ps-block__thumbnail"><img src="assets/icons/vendor-3.png" alt /></div>
                <div className="ps-block__content">
                  <h4>Soporte 24/7</h4>
                  <div className="ps-block__desc" data-mh="about-desc" style={{height: 75}}>
                    <p>Nuestras herramientas y servicios facilitan la gestión, la promoción y el
                      crecimiento de su
                      negocio.</p>
                  </div><a href="#">Aprende más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=====================================
  Become a Vendor Milestone
  ======================================*/}
    <div className="ps-section--vendor ps-vendor-milestone">
      <div className="container">
        <div className="ps-section__header">
          <p>Cómo funciona</p>
          <h4>Es fácil empezar a vender online en TicoMarket en solo 4 sencillos pasos</h4>
        </div>
        <div className="ps-section__content">
          <div className="ps-block--vendor-milestone">
            <div className="ps-block__left">
              <h4>Regístrate y publica tus productos</h4>
              <ul>
                <li>Registra tu negocio gratis y crea un catálogo de productos. Obtenga capacitación
                  gratuita sobre
                  cómo administrar su negocio en línea</li>
                <li>Nuestros asesores de TicoMarket lo ayudarán en cada paso y lo asistirán completamente
                  para tomar
                  tu negocio en linea</li>
              </ul>
            </div>
            <div className="ps-block__right"><img src="assets/vendor/milestone-1.png" alt /></div>
            <div className="ps-block__number"><span>1</span></div>
          </div>
          <div className="ps-block--vendor-milestone reverse">
            <div className="ps-block__left">
              <h4>Recibe pedidos y vende tu producto.</h4>
              <ul>
                <li>Registra tu negocio gratis y crea un catálogo de productos. Obtenga capacitación
                  gratuita sobre
                  cómo administrar su negocio en línea</li>
                <li>Nuestros asesores de TicoMarket lo ayudarán en cada paso y lo asistirán completamente
                  para tomar
                  tu negocio en linea</li>
              </ul>
            </div>
            <div className="ps-block__right"><img src="assets/vendor/milestone-2.png" alt /></div>
            <div className="ps-block__number"><span>2</span></div>
          </div>
          <div className="ps-block--vendor-milestone">
            <div className="ps-block__left">
              <h4>Recibe pedidos y vende tu producto.</h4>
              <ul>
                <li>Registra tu negocio gratis y crea un catálogo de productos. Obtenga capacitación
                  gratuita sobre
                  cómo administrar su negocio en línea</li>
                <li>Nuestros asesores de TicoMarket lo ayudarán en cada paso y lo asistirán completamente
                  para tomar
                  tu negocio en linea</li>
              </ul>
            </div>
            <div className="ps-block__right"><img src="assets/vendor/milestone-3.png" alt /></div>
            <div className="ps-block__number"><span>3</span></div>
          </div>
          <div className="ps-block--vendor-milestone reverse">
            <div className="ps-block__left">
              <h4>Recibe pedidos y vende tu producto.</h4>
              <ul>
                <li>Registra tu negocio gratis y crea un catálogo de productos. Obtenga capacitación
                  gratuita sobre
                  cómo administrar su negocio en línea</li>
                <li>Nuestros asesores de TicoMarket lo ayudarán en cada paso y lo asistirán completamente
                  para tomar
                  tu negocio en linea</li>
              </ul>
            </div>
            <div className="ps-block__right"><img src="assets/vendor/milestone-4.png" alt /></div>
            <div className="ps-block__number"><span>4</span></div>
          </div>
        </div>
      </div>
    </div>
    {/*=====================================
	Newletter
	======================================*/}
    <div className="ps-newsletter">
      <div className="container">
        <form className="ps-form--newsletter" action="do_action" method="post">
          <div className="row">
            <div className="col-xl-5 col-12 ">
              <div className="ps-form__left">
                <h3>Boletin informativo</h3>
                <p>Suscríbete para obtener información sobre productos y cupones.</p>
              </div>
            </div>
            <div className="col-xl-7 col-12 ">
              <div className="ps-form__right">
                <div className="form-group--nest">
                  <input className="form-control" type="email" placeholder="Email address" />
                  <button className="ps-btn">Suscríbete</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div></div>
    );
}

export default beacomeVendor;