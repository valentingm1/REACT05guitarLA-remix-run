import { Link } from "@remix-run/react"

function post({post}) {

  const {contenido, imagen, titulo, url, publishedAt} = post

  return (
    <article className="post">
      <img className="imagen" src={imagen.data.attributes.formats.medium.url} alt={`Imagen de ${titulo}`} />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className="fecha">{publishedAt}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/posts/${url}`}>Ver más</Link>
      </div>
    </article>
  )
}

export default post