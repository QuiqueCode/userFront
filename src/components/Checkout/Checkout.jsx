import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div style={{marginLeft:"4%"}}>
      <div className="container mi-espacio-unico" style={{marginTop:"6%"}}>
        <header>
          <h1>Proceso de Pago</h1>
        </header>
        <main>
          <div className="container" style={{display:"flex",flexDirection:"column"}}>
            <section className="selection">
              <h2>Selección de productos</h2>
              <ul className="products" />
              <a href="/grupoTres/realizar_Proceso_Compras.html">
                <button className="btn-add" style={{width:"fit-content"}}>Agregar producto</button>
              </a>
            </section>
          </div>
          <section className="shipping">
            <div className="container" style={{display:"flex",flexDirection:"column"}}>
              <hr />
              <label id="subtotal">Subtotal</label>
              <input className="subTotal" type="text" disabled />
              <label id="metEnvios">Método de envío</label>
              <input className="metEnvio" type="text" disabled />
              <label id="Total">TOTAL</label>
              <input className="total" type="text" disabled />
              <hr />
            </div>
            <div className="container" style={{display:"flex",flexDirection:"column"}}>
              <h2>Opciones de envío</h2>
              <h4 id="if">INFORMACIÓN DE CONTACTO Y ENVÍO</h4>
              <div className="envio">
                <input className="Nombre" type="text" placeholder="Nombre" style={{marginRight:"2%"}}/>
                <input
                  className="Apellidos"
                  type="text"
                  placeholder="Apellidos"
                />
                <br />
                <input
                  className="Email"
                  type="email"
                  placeholder="Correo electrónico"
                />
                <br />
                <input
                  className="Cedula"
                  type="text"
                  placeholder="Número de cédula o ID"
                />
                <br />
                <input className="Telefono" type="tel" placeholder="Teléfono" />
                <br />
                <input
                  className="Direccion"
                  type="text"
                  placeholder="Dirección exacta"
                />
                <br />
                <input
                  className="Provincia"
                  type="text"
                  placeholder="Provincia"
                  style={{marginRight:"2%"}}
                />
                <input className="Canton" type="text" placeholder="Cantón" />
                <input
                  className="Distrito"
                  type="text"
                  placeholder="Distrito"
                />
                <div className="comboBox">
                  <select name="enviar" id="enviar">
                    <option defaultChecked value="select">
                      Seleccionar método de envío
                    </option>
                    <option value="select">Correos de CR</option>
                    <option value="select">Puerta a puerta</option>
                    <option value="select">FedEx</option>
                    <option value="select">
                      Encomienda (guapileños/caribeños)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <ul className="shipping-options"/>
            <div className="card" style={{background:"none",display:"flex",flexDirection:"column"}}>
              <ul className="list-group list-group-flush">
                <h4 id="tar">TARJETA</h4>
                <li className="list-group-item" />
                <li className="list-group-item">
                  <input
                    className="tarjeta"
                    type="text"
                    placeholder="Número de tarjeta"
                  />
                  <br />
                  <input
                    className="nombre"
                    type="text"
                    placeholder="Nombre del titular"
                  />
                  <br />
                  <input
                    className="fecha"
                    type="text"
                    placeholder="Mes de Vencimiento (MM)"
                  />
                  <input
                    className="fecha"
                    type="text"
                    placeholder="Año de Vencimiento (AA)"
                  />
                  <input
                    className="codigo"
                    type="text"
                    placeholder="Código de seguridad"
                  />
                </li>
                <button type="button" className="btn btn-primary" style={{fontSize:"14px"}}>
                  Pagar
                </button>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
