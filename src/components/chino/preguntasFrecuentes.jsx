import React from "react";

export function Preguntas(){

    return(
        <>
    <div>
  <div className="ps-faqs">
    <div className="container">
      <div className="ps-section__header">
        <h1>Preguntas mas frecuentes</h1>
      </div>
      <hr /><br />
      <div className="ps-section__content">
        <div className="faq-section">
          <h4>ENVÍO</h4><br />
          <div className="faq-content">
            <div className="question"> ¿Qué métodos de envío están disponibles?</div>
            <div className="answer"> Envío Estándar, Envío Encomienda (Guapileños), Envío Express</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Hacen envíos internacionales?</div>
            <div className="answer">Por el momento no estamos realizando, solo se realizan envíos a nivel
              nacional.</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Cuánto tiempo tomará recibir mi paquete?</div>
            <div className="answer">El tiempo de entrega dependerá del método de envío seleccionado por el
              comprador.</div>
          </div>
        </div><br />
        <div className="faq-section">
          <h4>PAGO</h4><br />
          <div className="faq-content">
            <div className="question"> ¿Qué métodos de pago se aceptan?</div>
            <div className="answer">Los medios de pagos disponibles son por transferencia bancaria, con
              cualquier entidad financiera nacional.</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Es seguro comprar en línea?</div>
            <div className="answer">Comprar en línea puede ser seguro si se toman precauciones adecuadas.</div>
          </div>
        </div><br />
        <div className="faq-section">
          <h4>Orden y Devoluciones</h4><br />
          <div className="faq-content">
            <div className="question"> ¿Cómo hago un pedido?</div>
            <div className="answer">Recuerda que si tienes alguna pregunta o encuentras dificultades durante el
              proceso de pedido, nuestro equipo de soporte al cliente está aquí para ayudarte. No dudes en
              contactarnos a través de nuestros canales de atención al cliente para obtener asistencia
              adicional. ¡Esperamos que tengas una experiencia de compra satisfactoria!</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Cómo puedo cancelar o cambiar mi pedido?</div>
            <div className="answer">Nuestro objetivo es proporcionarte una experiencia de compra satisfactoria,
              por lo que haremos todo lo posible para atender tu solicitud de cancelación o cambio en el
              pedido. No dudes en comunicarte con nosotros para cualquier duda o asistencia adicional que
              necesites.</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Necesito una cuenta para realizar un pedido?</div>
            <div className="answer">Si una cuenta puede brindarte una experiencia más cómoda y personalizada en
              nuestro mercado. Siempre respetamos la privacidad y seguridad de los datos de nuestros
              clientes, así que puedes estar seguro de que tu información estará protegida.</div>
          </div>
          <div className="faq-content">
            <div className="question">¿Cómo hago el seguimiento de mi pedido?</div>
            <div className="answer">
              Accede al estado del pedido en nuestro sitio web: Si tienes una cuenta en nuestro
              Marketplace, inicia sesión y busca la sección de "Historial de pedidos" o "Estado del
              pedido". Aquí podrás ver el estado actual de tu pedido y, si está disponible, un enlace de
              seguimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n.ps-section__content {\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n}\n.faq-section {\n    margin-bottom: 20px;\n}\n.faq-section h4 {\n    font-size: 1.2em;\n    margin-bottom: 10px;\n}\n.question {\n    font-weight: bold;\n}\n.answer {\n    margin-bottom: 15px;\n}\n/* Estilos adicionales para separar las preguntas y respuestas */\n.faq-content:not(:last-child) {\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 20px;\n}\nh4{\n\tfont-family:Georgia, 'Times New Roman', Times, serif;\n\tfont-size: 20px;\n}\n\t" }} />
</div>

        
        
        </>



    );
}