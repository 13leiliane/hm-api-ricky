import Card from "./Card";
import styles from "./style/Cards.module.css";
//import characters, { Rick } from "..db.js";

export default function Cards(props) {
  const { characters } = props;
  //console.log(characters);
  return (
    <div className={styles.cards}>
      <div className={styles.img}>
        <div className={styles.container}>
          {characters.map((Rick) => (
            <Card
              name={Rick.name}
              species={Rick.species}
              gender={Rick.gender}
              image={Rick.image}
              onClose={() => window.alert("Emulamos que se cierra la card")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// antes de usar el ciclo de vida

// export default function Cards(props) {
//   const { characters } = props;
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
// };
