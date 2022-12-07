import styles from "./App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import About from "./components/About";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form";

//import { Rick } from "./db.js";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "exemple@gmail.com";
  const password = "ae1234";

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("usuario o contraseña incorrecta");
    }
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    console.log(id);
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className={styles.app}>
      <div className={styles.img}>
        <div className={styles.container}>
          <div>
            <div>
              {location.pathname !== "/" && <Nav onSearch={onSearch} />}
            </div>
            <Form login={login} />
          </div>
          <Routes>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:datailId" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
// <Route path="/" element={<Form />} />
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
