import Footer from "./Footer";

export const Compras = () => {
  return (
    <div>
    <div className= "">
   
    <div className= "container bg-white pb-2">
      <ul>
        <li>
          <h3>Regístrate</h3>
        </li>

        <li>
          <h3>Busca tu producto en el buscador o en el Menú de Categorías</h3>
        </li>
        <li>
          <h3>
            Una vez encontrado el producto deseado, puedes ver el detalle y
            agregarlo a una lista para comprarlo más tarde, o agregarlo al
            carrito directamente clickeando en el botón Agregar.
          </h3>
        </li>
        <li>
          <h3>
            Si ya tienes todos los productos que necesitas en tu carrito,
            clickea en el botón Finalizar Compra.
          </h3>
        </li>
        <li>
          <h3>
            Para finalizar tu compra, solo tienes que completar los datos del
            método de entrega que prefieres y elegir tu método de pago.
          </h3>
        </li>
        <li>
          <h3>
            Clickea en el botón Comprar Ahora y ¡Listo! Muy pronto recibirás tus
            productos.
          </h3>
        </li>
      </ul>
      </div>
      </div>
      <Footer />
    </div>
  );
};
