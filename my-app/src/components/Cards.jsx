// antes de usar el ciclo de vida
import Card from "./Card.jsx";
//import { useState } from "rect";
import styles from "./style/Cards.module.css";

export default function Cards({ personajes, onClose }) {
  //console.log(personajes);
  if (personajes) {
    return (
      <div className={styles.cards}>
        {personajes.map((pers) => (
          <Card
            name={pers.name}
            species={pers.species}
            gender={pers.gender}
            image={pers.image}
            onClose={() => onClose(pers.id)}
            id={pers.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin Personajes</div>;
  }
}

// // antes de usar el ciclo de vida
// import Card from "./Card.jsx";
// //import { useState } from "rect";
// import styles from "./style/Cards.module.css";

// export default function Cards({ characters }) {
//   //console.log(characters);
//   return (
//     <div className={styles.cards}>
//       {characters.map((char) => (
//         <Card
//           name={char.name}
//           species={char.species}
//           gender={char.gender}
//           image={char.image}
//           onClose={() => alert("Emulamos que se cierra la card")}
//         />
//       ))}
//     </div>
//   );
// }
