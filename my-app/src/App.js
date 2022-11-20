import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

//import { Rick } from "./db.js";

function App() {
  const [personajes, setPersonajes] = useState([]);
  function onSearch(personaje) {
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.data !== undefined) {
          const personaje = {
            id: recurso.id,
            name: recurso.name,
            species: recurso.species,
            gender: recurso.gender,
            image: recurso.image,
          };
          setPersonajes((oldPersonajes) => [...oldPersonajes, personaje]);
        } else {
          alert("Personajes no encontrado");
        }
      });
  }
  function onClose(id) {
    setPersonajes((oldPersonajes) => oldPersonajes.filter((p) => p.id !== id));
  }

  return (
    <div className={styles.app}>
      <div className={styles.img}>
        <div className={styles.container}>
          <div>
            <Nav onSearch={onSearch} />
          </div>
          <Cards personajes={personajes} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default App;

// //ANTES DE RENDERIZAR EL CICLO DE VIDA
// import { useState } from "react";
// import styles from "./App.module.css";
// // import Card from "./components/Card.jsx";
// import Cards from "./components/Cards.jsx";
// import Nav from "./components/Nav.jsx";
// import { Rick } from "./db.js";
// const url = process.env.REACT_APP_URL;
// // crier una constante com la ubicacion de la url assim solo me la traje la url
// function App() {
//   const [person, setPerson] = useState([]);
//   // por default por array defecto, pq vamos trabajar com array
//   function onSearch(character) {
//     fetch(url + character)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.name) {

//           setPersonaje((oldPersonajes) => [...oldPersonajes, personaje]);
//         } else {
//           alert("No hay personajes con ese ID");
//         }
//       });
//   }

//   return (
//     <div className={styles.app}>
//       <div className={styles.img}>
//         <div className={styles.container}>
//           <div>
//             <SearchBar onSearch={onSearch} />
//           </div>
//           <Card
//             name={Rick.name}
//             species={Rick.species}
//             gender={Rick.gender}
//             image={Rick.image}
//             onClose={() => alert("Emulamos que se cierra la card")}
//           />
//           <Cards characters={person} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
