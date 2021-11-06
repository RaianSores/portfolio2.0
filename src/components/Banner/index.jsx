import { useEffect } from "react";
import styles from "./styles.module.scss";

export const Banner = () => {
  useEffect(() => {
    const typeWrite = (elemento) => {
      const textoArray = elemento.innerHTML.split("");
      elemento.innerHTML = " ";
      textoArray.forEach(function (letra, i) {
        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 90 * i);
      });
    };

    const titulo = document.getElementById("titleBio");
    typeWrite(titulo);
  }, []);
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.imgWrapper}>
        <h1 id="titleBio">
          Sou um dev apaixonado pela inumeras possibilidades que as tecnologias
          pode proporciar, por meio dela é possível criar coisas incriveis e
          transformar ideias em soluções!
        </h1>
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
};
