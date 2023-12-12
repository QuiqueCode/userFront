import React from "react";
import "./style.css";

const CarritoCompras = () => {
  return (
    <div  style={{marginLeft:"4%"}}>
      <div className="ps-section--shopping ps-shopping-cart">
        <div className="container">
          <div className="ps-section__header">
            <h1>Carrito de Compra</h1>
          </div>
          <div className="ps-section__content">
            <div className="table-responsive">
              <table className="table ps-table--shopping-cart">
                <thead style={{alignContent:"center"}}>
                  <tr>
                    <th>PRODUCTO</th>
                    <th>PRECIO</th>
                    <th>COSTO ENVIO</th>
                    <th>CANTIDAD</th>
                    <th>TOTAL</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr style={{alignContent:"center"}}>
                    <td>
                      <div className="ps-product--cart">
                        <div className="ps-product__thumbnail">
                          <a href="/products">
                            <img src="src/img/products/detail/countdown/1.jpg" alt />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a href="/products">
                            Marshall Kilburn Wireless Bluetooth Speaker, Black
                            (A4819189)
                          </a>
                          <p>
                            Sold By:<strong> YOUNG SHOP</strong>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="price">$205.00</td>
                    <td className="text-center">$2</td>
                    <td>
                      <div className="form-group--number">
                        <button className="up">+</button>
                        <button className="down">-</button>
                        <input
                          className="form-control"
                          type="text"
                          placeholder={1}
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>$207.00</td>
                    <td>
                      <a href="#">
                        <i className="icon-cross" />
                      </a>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <hr />
            <div className="d-flex flex-row-reverse">
              <div className="p-2">
                <h3>
                  Total <span>$207.00</span>
                </h3>
              </div>
            </div>
            <div className="ps-section__cart-actions">
              <a className="ps-btn" href="/">
                <i className="icon-arrow-left" /> Back to Shop
              </a>
              <a className="ps-btn" href="/pago">
                Proceed to checkout <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
