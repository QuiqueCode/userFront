import React from 'react'
import "./style/style.css";

const About = () => {
  return (
    <>
      <div className="ps-page--single" id="about-us">
        <img src="assets/img/prueba2.png" alt="" style={{ width: "100%" }} />
        <div className="ps-about-intro">
          <div className="container">
            <div className="ps-section__header">
              <h3>Bienvenidos a Tico-Market</h3>
              <h4>"Donde los emprendedores brillan"</h4>
              <p>
                Conforme a los fundamentos académicos de la Universidad de Costa
                Rica y en el marco del curso de Análisis y Diseño Estructural de
                la carrera de Informática Empresarial, un grupo de estudiantes
                ha concebido y desarrollado Tico-Market. El sistema no solo es
                el producto tangible de conocimientos teóricos adquiridos, sino
                también la materialización de habilidades prácticas en el ámbito
                de la Informática Empresarial.{" "}
              </p>
            </div>
            <div className="ps-section__content">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="ps-block--icon-box">
                    <i className="icon-cube"></i>
                    <h4>45M</h4>
                    <p>Productos en Venta</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="ps-block--icon-box">
                    <i className="icon-store"></i>
                    <h4>1.8M</h4>
                    <p>Vendedores activos en Tico-Market</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="ps-block--icon-box">
                    <i className="icon-bag2"></i>
                    <h4>30.6M</h4>
                    <p>Comprador activo en TicoMarket</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="ps-block--icon-box">
                    <i className="icon-cash-dollar"></i>
                    <h4>$2.46M</h4>
                    <p>Ventas brutas anuales de mercancías</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-newsletter">
        <div className="container">
          <form className="ps-form--newsletter">
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
  )
}

export default About