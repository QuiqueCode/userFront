import React from "react";
import './footer2.css'
import './footer.css'
import imagen from './img/ticoMarket.png'
import { Link } from "react-router-dom";


export function Footer(){

    return(
        <>
        
    <footer className="ps-footer">
  <div className="container" style={{backgroundColor: 'whitesmoke'}}>
    <div className="row">
      {/* Logo */}
      <div className="col-md-3 mb-5">
        <img src={imagen} alt="Logo de la Marketplace" className="img-fluid" width={200} height={150} />
      </div>
      {/* Contacto */}
      <div className="col-md-3 mb-5">
        <aside className="widget widget_footer widget_contact-us">
          <h4 className="widget-title">Contáctanos</h4>
          <div className="widget_content">
            <p>UCR Sede del Caribe <br />
              <a href="mailto:contact@marketplace.co">ticoMarket@gmail.com</a>
            </p>
            <ul className="ps-list--social">
              <li><a className="facebook" href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a className="instagram" href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </aside>
      </div>
      {/* Enlaces Rápidos */}
      <div className="col-md-3 mb-5">
        <aside className="widget widget_footer">
          <h4 className="widget-title">Enlaces rápidos y Recursos</h4>
          <ul className="ps-list--link">
            <Link to="./politicas">
            <li><a href="politicas.html">Política</a></li>
            </Link>
   
            <li><a href="contact-us.html">Términos y condiciones</a></li>
            <li><a href="faqs.html">Preguntas frecuentes</a></li>
            <li><a href="about-us.html">Blog</a></li>
            <li><a href="/SerVendedor">Guías del comprador</a></li>
          </ul>
        </aside>
      </div>
      {/* Negocios */}
      <div className="col-md-3 mb-5">
        <aside className="widget widget_footer">
          <h4 className="widget-title">Negocios y Servicios</h4>
          <ul className="ps-list--link">
            <li><a href="/pago">Pagar</a></li>
            <li><a href="my-account_my-sales.html">Mi cuenta</a></li>
            <Link to="/listaTiendas">
            <li><a href="store-list.html">Tienda</a></li>
            </Link>
     \
            <li><a href="index.html">Publicidad</a></li>
          </ul>
        </aside>
      </div>
      {/* Copright */}
      <div className="row border-top mt-4 pt-4 d-flex justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <p className="font-weight-bold">© 2023 TicoMarket. Todos los derechos reservados. | <a href="/politicas">Políticas</a></p>
        </div>
      </div>
    </div>
    </div>
    </footer>

        </>


    );
}