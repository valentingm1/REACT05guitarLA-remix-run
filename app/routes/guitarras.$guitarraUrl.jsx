import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

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
  const guitarra = useLoaderData();

  const { nombre, precio, imagen, descripcion } = guitarra.data[0].attributes;

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
      </div>
    </div>
  );
}

export default Guitarra;
