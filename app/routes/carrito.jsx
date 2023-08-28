import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";

import styles from "~/styles/carrito.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Carrito() {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarProducto } = useOutletContext();

  useEffect(() => {
    const calcTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calcTotal);
  }, [carrito]);

  return (
    <main className="contenedor">
      <h1 className="heading"></h1>

      <div className="contenido">
        <div className="carrito">
          <h2>Artículos</h2>

          {carrito.length === 0
            ? "Carrito vacío"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt={`Imagen del producto ${producto.nombre}`}
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <select
                      className="select"
                      value={producto.cantidad}
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: +e.target.value,
                          id: producto.id,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="precio">
                      $ <span>{producto.precio}</span>
                    </p>

                    <p className="subtotal">
                      Subtotal: ${" "}
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                <button type="button" className="btn_eliminar" onClick={() => eliminarProducto(producto.id)}>
                    X
                </button>
                </div>
              ))}
        </div>

        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar:${total}</p>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;
