import{ Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react"
import { useState } from "react"
import styles from "./styles/index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Guitarra from "./components/Guitarra"

export function meta(){
  return [
    {
      charset: 'utf-8',
      title:'Guitar LA - Remix Run',
      viewport: 'width=device-width, initial-scale=1'
    }
  ]
    
  
}

export function links(){
  return [
    {
      rel:"stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preconnect',
      href:"https://fonts.googleapis.com"
    },
    {
      rel:"preconnect",
      href:"https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel:"stylesheet",
      href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Roboto&display=swap"
    }
  ]
    
}

export default function App() {

  const [carrito, setCarrito] = useState([])

  const agregarCarrito = guitarra => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){


      const carritoUpdateado = carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoUpdateado)
    }else {
      setCarrito([...carrito, guitarra])
    }
  }


  return(
      <Document>
          <Outlet context={{
            agregarCarrito
          }}/>
      </Document>
  )
}

function Document({children}) {
  return (
      <html lang="es">
          <head>
              <Meta />
              <Links />
          </head>
          <body>
              <Header/>
              {children}
              <Footer/>
              
              <Scripts/>
              <LiveReload/>
          </body>
      </html>
  )
}

export function ErrorBoundary(){
  const error = useRouteError()

  if(isRouteErrorResponse(error)){
    return (
      <Document>
        <p className="error">{error.status} {error.statusText}</p>
        <Link className="error-enlace" to="/">Volver a la página principal</Link>
      </Document>
    )
  }
}