import React, { useEffect } from "react";
import "./politicas.css";

const PoliticasUsuarios = () => {

    return (
        <>
         <div id="politicasBody"> 
         <h1 id="titulo">TicoMarket - Políticas de la tienda</h1>

                <div id="contenido">
                    <p>Bienvenido a TicoMarket, una marketplace que conecta a compradores y vendedores de Costa Rica.</p>

                    <h2>1. Registro y uso de la cuenta</h2>
                    <p>Para usar TicoMarket, debe crear una cuenta. Al crear una cuenta, acepta los términos de servicio y la
                        política de privacidad de TicoMarket.</p>
                    <p>Usted es responsable de mantener la seguridad de su cuenta y contraseña.</p>
                    <p>No debe compartir su cuenta con nadie más.</p>

                    <h2>2. Publicación de productos y servicios</h2>
                    <p>Los vendedores deben publicar productos y servicios que sean legales, auténticos y que cumplan con las leyes
                        y regulaciones aplicables.</p>
                    <p>Los vendedores deben proporcionar información precisa sobre sus productos y servicios, incluidas las
                        imágenes, las descripciones y los precios.</p>
                    <p>Los vendedores no pueden publicar productos y servicios que sean engañosos, fraudulentos o que infrinjan los
                        derechos de propiedad intelectual de terceros.</p>

                    <h2>3. Compras y ventas</h2>
                    <p>Los compradores y vendedores deben cumplir con los términos del contrato de compraventa.</p>
                    <p>Los compradores tienen derecho a devolver un producto o servicio si no está satisfecho con él.</p>
                    <p>Los vendedores tienen derecho a rechazar una devolución si el producto o servicio no se encuentra en buenas
                        condiciones.</p>

                    <h2>4. Pagos y reembolsos</h2>
                    <p>TicoMarket utiliza un sistema de pago seguro para proteger los datos financieros de los compradores y
                        vendedores.</p>
                    <p>Los compradores deben pagar el precio total del producto o servicio al momento de la compra.</p>
                    <p>Los vendedores deben reembolsar el precio total del producto o servicio al comprador si el producto o
                        servicio no se encuentra en buenas condiciones.</p>

                    <h2>5. Soporte al cliente</h2>
                    <p>TicoMarket ofrece soporte al cliente a través de correo electrónico, chat en vivo y teléfono.</p>
                    <p>Los compradores y vendedores pueden ponerse en contacto con el servicio de atención al cliente para obtener
                        ayuda con cualquier problema que puedan tener.</p>

                    <h2>6. Cambios a las políticas</h2>
                    <p>TicoMarket puede cambiar estas políticas en cualquier momento. Las políticas actualizadas se publicarán en
                        este sitio web.</p>

                </div>

                <div id="pie">
                    <p>&copy; 2023 TicoMarket. Todos los derechos reservados.</p>
                </div>



                <p>Gracias por usar TicoMarket.</p>


         </div>
       
         
        </>
    );
};

export default PoliticasUsuarios;