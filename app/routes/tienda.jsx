import {getGuitarras} from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/ListadoGuitarras"

import styles from "~/styles/guitarras.css"
import Guitarra from "~/components/Guitarra"

export function meta(){
  return [{
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }]
}

export function links(){
  return [
    {
      rel:"stylesheet",
      href: styles
    }
  ]
}


export async function loader(){
  const guitarras = await getGuitarras()
  console.log(guitarras)

  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
    <ListadoGuitarras
    guitarras={guitarras}
    />
    </main>
  )
}

export default Tienda