import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import { useState } from "react";

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: `GuitarLA - Guitarra no encontrada`,
        description: `Guitarras, Venta de guitarras, Guitarra no encontrada, Tienda de guitarras`,
      },
    ];
  }

  return [
    {
      title: `GuitarLA - Guitarra ${data.data[0].attributes.nombre}`,
      description: `Guitarras, Venta de guitarras, Guitarra ${data.data[0].attributes.nombre}, Tienda de guitarras`,
    },
  ];
}

export async function loader({ request, params }) {
  const { guitarraUrl } = params;

  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return guitarra;
}

function Guitarra() {

  const {agregarCarrito} = useOutletContext()
  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, precio, imagen, descripcion } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Se debe seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };

    agregarCarrito(guitarraSeleccionada)

  };
  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            name="cantidad"
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">Seleccionar Cantidad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
