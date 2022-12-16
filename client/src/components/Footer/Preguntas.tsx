import React from "react";
import Footer from "./Footer";

export const Preguntas = () => {
  return (
    <div>
      <div>
        <h4>¿Es seguro comprar en el sitio?</h4>
        <p>
          Tus datos personales están resguardados y no serán utilizados para
          otros fines que no sean el de procesamiento de tu compra.
        </p>
      </div>
      <div>
        <h4>¿Cómo hago para cancelar mi compra?</h4>
        <p>
        Para cancelar tu compra debes enviar un mail a ventasonline@grid.com.ar o escribinos por WhatsApp acá.
        </p>
      </div>
      <div>
        <h4>¿Cuales son los medios de pago disponibles?</h4>
        <ul>
            <li>Tarjeta de crédito: Aprovechá las cuotas sin interés vigentes.</li>
            <li>Mercado Pago: Aplican todas las promociones disponibles en Mercado Pago.</li>
            <li>Efectivo: Podes abonar en cualquier sucursal de Rapipago, Pago Fácil o Carga Virtual seleccionando Mercado Pago y obetiendo el cupón de pago al finalizar la compra.</li>
            <li>Modo: podes abonar seleccionando la opción y serás redirigido a MODO o a tu HomeBanking. Debes estar adherido a MODO.</li>
            <li>GoCuotas: Posibilidad de abonar con tarjeta de débito en cuotas.</li>
        </ul>
    
      </div>
      <div>
        <h4>¿Cómo se si mi pago fue aprobado?</h4>
        <p>Una vez que tu pago fue acreditado recibirás un correo electrónico con la confirmación, luego de esto iniciaremos el proceso de facturación y despacho.</p>
      </div>
      <div>
        <h4>¿Puede otra persona recibir mi pedido?</h4>
        <p>Sí, cualquier persona de mayor de edad puede recibir la mercadería siempre que se encuentre en el domicilio de entrega indicado. Para retirar tu compra desde alguna de nuestras sucursales debes mostrar tu DNI y la confirmación de compra. Si retira un tercero, deberá acercarse a la sucursal seleccionada con una autorización firmada por el titular de la compra (sin excepción).</p>
      </div>
      <div>
        <h4>¿Que pasa si no hay nadie para recibir el pedido?</h4>
        <p>La empresa de correos dejará un aviso de visita y volverá al día siguiente nuevamente. Si en la segunda visita que realiza la empresa de correos tampoco encuentra a ninguna persona en el domicilio indicado por el usuario, se procederá a dejar la mercadería en la sucursal de la empresa de correos más cercana al domicilio indicado. Por 5 días la mercadería quedará en la sucursal de correos, cumplido este período de tiempo, si el cliente no pasó a retirarlo se devolverá la mercadería a nuestro depósito. En este caso, el comprador debe comunicarse con ATENCION AL CLIENTE, para coordinar una nueva entrega. La nueva entrega puede tener un costo adicional por reprocesamiento.</p>
      </div>
      <div>
        <h4>¿Puedo modificar la direccón de entrega?</h4>
        <p>Podes modificar tu dirección de entrega antes de concluir con un nuevo proceso de compra. Si querés cambiar la dirección de entrega una vez que tu pedido fue confirmado, debes enviarnos un mail en las primeras 24 hs a ventasonline@dash-deportes.com.ar indicando el nuevo domicilio de entrega y tu número de pedido. Si tu pedido ya fue despachado, ya no es posible cambiar la dirección de entrega.</p>
      </div>
      <div>
        <h4>¿Puedo reprogramar la entrega de mi pedido?</h4>
        <p>No es posible establecer una fecha exacta de entrega de tu pedido.</p>
      </div>
      <div>
        <h4>¿Recibiste un producto diferente al que pediste?</h4>
        <p>Si recibiste un producto distinto al solicitado en tu compra online, por favor contáctate vía mail a ventasonline@dash-deportes.com.ar o vía Whatsapp al 113673-5460 para poder ayudarte</p>
      </div>
      <div>
        <h4>¿Qué pasa si el producto viene fallado?</h4>
        <p>Si el producto presenta una falla de fábrica podes contactarte vía mail a ventasonline@dash-deportes.com.ar o vía Whatsapp al 113673-5460 para poder ayudarte</p>
      </div>
      <div>
            <h4>¿Te fue útil esta información?</h4>
            <button>SI</button>
            <button>NO</button>
        </div>
        <Footer/>
      
    </div>
  );
};
