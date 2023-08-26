import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta(){
  return [{
    title: "Guitar LA - Sobre Nosotros",
    description: "Venta de guitarras, blog de música"
  }]
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="conetenedor nosotros">
      <h2 className="heading"></h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen 'Sobre nosotros' " />
        <div>
          <p>
            Aliquam euismod metus non erat convallis, ac pellentesque ligula
            facilisis. Donec et efficitur sem, eget efficitur leo. Praesent
            dapibus, magna vestibulum varius accumsan, tortor purus condimentum
            lectus, vitae porta orci turpis eget orci. Curabitur vel mattis
            nisl, eget pellentesque felis. Aenean non eros pharetra ex mattis
            suscipit et in nisl. Mauris risus ligula, tincidunt malesuada
            suscipit vel, aliquam at ipsum. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a
            suscipit augue, sit amet volutpat est. Donec volutpat magna metus,
            in varius nisl eleifend in. Duis ipsum leo, condimentum eget iaculis
            vel, aliquet quis odio. Quisque non eros in ex dignissim sagittis.
            Quisque faucibus rhoncus varius. Curabitur iaculis lorem et augue
            fringilla vestibulum. Aliquam ultrices bibendum tortor ut rhoncus.
          </p>
          <p>
            Aliquam euismod metus non erat convallis, ac pellentesque ligula
            facilisis. Donec et efficitur sem, eget efficitur leo. Praesent
            dapibus, magna vestibulum varius accumsan, tortor purus condimentum
            lectus, vitae porta orci turpis eget orci. Curabitur vel mattis
            nisl, eget pellentesque felis. Aenean non eros pharetra ex mattis
            suscipit et in nisl. Mauris risus ligula, tincidunt malesuada
            suscipit vel, aliquam at ipsum. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. In a
            suscipit augue, sit amet volutpat est. Donec volutpat magna metus,
            in varius nisl eleifend in. Duis ipsum leo, condimentum eget iaculis
            vel, aliquet quis odio. Quisque non eros in ex dignissim sagittis.
            Quisque faucibus rhoncus varius. Curabitur iaculis lorem et augue
            fringilla vestibulum. Aliquam ultrices bibendum tortor ut rhoncus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
