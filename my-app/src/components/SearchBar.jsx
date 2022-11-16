// import styles from "./style/SearchBar.module.css";

// export default function SearchBar(props) {
//   const { onSearch } = props;
//   return (
//     <div className={styles.searchBar}>
//       <input type="search" />
//       <button onClick={() => onSearch()}>Agregar</button>
//     </div>
//   );
// }

import { IoMdCloseCircle } from "react-icons/io";
import styles from "./style/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // const handleOnSearch = () =>
  //   onSearch(document.getElementById("search-bar-input").value);

  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
    }
  }
  return (
    <div className={styles.SearchBar}>
      <input
        className={styles.input}
        id="search-bar-input"
        placeholder="Agregar Personaje"
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoMdCloseCircle />
      </button>
    </div>
  );
}
