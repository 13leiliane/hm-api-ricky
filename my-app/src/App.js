import styles from "./App.module.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./db.js";

function App() {
  return (
    <div className={styles.app} style={{ padding: "25px" }}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      </div>
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;