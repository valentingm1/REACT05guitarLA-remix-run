
function Curso({curso}) {

    const {contenido, imagen, titulo} = curso

  return (
    <section className="curso">
        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso