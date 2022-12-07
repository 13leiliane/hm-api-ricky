import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "././Detail.mosule.css";

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  console.log(detailId);

  // creamos el estado
  const [character, setCharacter] = useState();
  // Consologuea las informacion e redenrizando en nuestro componente
  //console.log(character)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  // importamos useNavigate para que usemos em el handleCkick para el button
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.detail}>
      <button onClick={handleClick}>Go Home</button>
      {character ? (
        <div>
          <div>
            <h1>{character.name}</h1>
            <h5>{character.status}</h5>
            <h5>{character.species}</h5>
            <h5>{character.gender}</h5>
            <h5>{character.origin?.name}</h5>
          </div>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
//
//  return (
//     <div> {character ? <div>
//       <h1>{character.name}</h1>
//       <h5>{character.status}</h5>
//       <h5>{character.specie}</h5>
//       <h5>{character.gender}</h5>
//       <h5>{character.origin}</h5>
//     </div> : ""} </div>
//   );
// }
