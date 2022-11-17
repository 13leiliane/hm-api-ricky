import styles from "./App.module.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./db.js";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.img}>
        <div className={styles.container}>
          <div>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
          </div>
          <div className={styles.saim}>
            <Card
              name={Rick.name}
              species={Rick.species}
              gender={Rick.gender}
              image={Rick.image}
              onClose={() => window.alert("Emulamos que se cierra la card")}
            />
            <Cards characters={characters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
