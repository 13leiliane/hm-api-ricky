// antes de usar el ciclo de vida
import Card from "./Card.jsx";
//import { useState } from "rect";
import styles from "./style/Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  //console.log(characters);

  return (
    <div className={styles.cards}>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
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
