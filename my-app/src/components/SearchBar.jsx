import { IoSearchSharp } from "react-icons/io5";
import styles from "./style/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // const handleOnSearch = () =>
  //   onSearch(document.getElementById("search-bar-input").value);

  const handleOnSearch = () => {
    onSearch(document.getElementById("searchInput").value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        id="searchInput"
        placeholder="Agregar Personaje"
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoSearchSharp />
      </button>
    </div>
  );
}
