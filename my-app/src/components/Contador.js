import styles from "./style/Contador.modules.css";
import { useState } from "react";

// los fusk solo se puede usar em componentes funcionales
// pudeo agregar varios states. lo unico que necesito es no repetir la variable
//(EL STATE ES SOLO LEITURA NO ES MLO MISMO QUE SETSTATE)
export default function Contador() {
  /* VAMOS A UTILIZAR EL FUSK.vamos hacer de la seguinte manera  */
  // const { state, setState }- el USESTATE. devuelve um array con 2 elementos. Una com el State e otra com el DISPACHE de la function seteadora. Lo cual uno es el ARRAY sub 0(zero e el OTRO ES el ARRAY sub 1(uno) UQUE ES LA FUNCTION SETEADORA NDEL STATE) e sacar las palabras repetidas.
  //( React.useState(10))este passo de este y igualo isso (useState(10);)
  const { counter, setState } = useState(10); // aca directamente guarda el valor e no el objeto como en los componentes de class
  // aca vamosa crear las function que vamos a necessitar
  ////
  function handlerAdd() {
    setState(counter + 1);
  }
  /////
  function handlerAddX2() {
    setState((state) => state + 1);
    setState((state) => state + 1);
  }
  ////
  function handlerRemove() {
    setState(counter - 1);
  }
  // en todas vamos hacer un setState e le vamosa passar counter es = state. couinter + 1
  return (
    <div>
      <button onClick={handlerRemove}>-</button>
      <span className={styles.span}>El valor del contador es :{counter}</span>
      <button onClick={handlerAdd}> +</button>
      <button onClick={handlerAddX2}> +2</button>
    </div>
  );
}
