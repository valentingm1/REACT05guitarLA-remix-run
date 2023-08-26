import {getGuitarras} from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import Guitarra from "~/components/Guitarra"

import styles from "~/styles/guitarras.css"

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
      <h2 className="heading">Nuestra Colección</h2>

      {guitarras.length &&(
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra
              guitarra={guitarra.attributes}
              key={guitarra.id}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda