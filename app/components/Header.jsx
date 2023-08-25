import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navegacion from "./Navegacion";

function Header() {

  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo de GuitarLA"/>
            </Link>
            <Navegacion/>
        </div>
        
    </header>
  )
}

export default Header