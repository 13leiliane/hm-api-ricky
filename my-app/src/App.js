import styles from "./App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import About from "./components/About";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form";
import PageNotFound from "./components/PageNotFound";
import Favorites from "./components/favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "exemple@gmail.com";
  const password = "ae1234";

  if (useLocation().pathname === "/") {
    document.body.classList.add("bodyBlack");
  } else {
    document.body.classList.remove("bodyBlack");
  }

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("El usuario o la contraseña es incorrecta");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          if (characters.some((char) => char.id === data.id)) {
            window.alert("Ya agregaste a ese personaje!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters((characters) => characters.filter((char) => char.id !== id));
  };

  /* eslint-disable */
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  /* eslint-disable */

  return (
    <div className={styles.app}>
      <div className={styles.img}>
        <div className={styles.container}>
          <div className={styles.favorites}>
            <div>
              <div>
                {location.pathname !== "/" && (
                  <Nav onSearch={onSearch} logout={logout} />
                )}
              </div>
            </div>
            <Routes>
              <Route exact path="/" element={<Form login={login} />} />
              <Route
                path="/home"
                element={<Cards characters={characters} onClose={onClose} />}
              />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
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
