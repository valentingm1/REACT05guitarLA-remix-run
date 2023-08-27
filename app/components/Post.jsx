import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

function post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;

  return (
    <article className="post">
      <Link to={`/blog/${url}`}>
        <img
          className="imagen"
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen de ${titulo}`}
        />
      </Link>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
}

export default post;
