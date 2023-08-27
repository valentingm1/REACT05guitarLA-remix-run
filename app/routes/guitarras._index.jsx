import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/ListadoGuitarras";

export function meta() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
      description: "GuitarLA - Nuestra colección de guitarras",
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
