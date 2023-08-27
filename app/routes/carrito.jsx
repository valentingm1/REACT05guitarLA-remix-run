import styles from "~/styles/carrito.css"


export function links(){
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

function Carrito() {
  return (
    <main className='contenedor'>
        <h1 className='heading'></h1>

        <div className='contenido'>

        <div className="carrito">
            <h2>Artículos</h2>
        </div>

        <aside className='resumen'>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $</p>
        
        </aside>
        </div>
        
    </main>
    
  )
}

export default Carrito