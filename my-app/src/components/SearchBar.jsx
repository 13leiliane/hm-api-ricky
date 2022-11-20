import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [person, setPerson] = useState("");
  return (
    <form
      onSubmit={(lei) => {
        lei.preventDefault();
        onSearch(person);
        setPerson("");
      }}
    >
      <input
        type="text"
        placeholder="Person..."
        value={person}
        onChange={(lei) => setPerson(lei.target.value)}
      />
      <input type="subimit" value="ingresar" />
    </form>
  );
}
// className={styles.button}
// import { IoSearchSharp } from "react-icons/io5";
// import styles from "./style/SearchBar.module.css";

// export default function SearchBar({ onSearch }) {
//   // const handleOnSearch = () =>
//   //   onSearch(document.getElementById("search-bar-input").value);

//   const handleOnSearch = () => {
//     onSearch(document.getElementById("searchInput").value);
//   };

//   return (
//     <div className={styles.searchBar}>
//       <input
//         className={styles.input}
//         id="searchInput"
//         placeholder="Agregar Personaje"
//       />
//       <button className={styles.button} onClick={handleOnSearch}>
//         <IoSearchSharp />
//       </button>
//     </div>
//   );
// }
