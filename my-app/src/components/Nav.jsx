import SearchBar from "./SearchBar";
import styles from "./style/Nav.module.css";
import { Link } from "react-router-dom";
//import styles from "../components/style/Nav.module.css";
function Nav({ onSearch }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div className={styles.home}>
        <Link to="home">Home</Link>
        <br />

        <div className={styles.about}>
          <Link to="about">About</Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;

// import SearchBar from "./SearchBar";
// //import Logo from "../logoHenry.png";
// import { Link } from "react-router-dom";
// import styles from "../components/style/Nav.module.css";
// function Nav({ onSearch }) {
//   return (
//     <div className={styles.logoHenry}>
//       <img src={Logo} alt="img not found" />
//       <span>Leiliane A Ricky-and-Morty</span>
//       <SearchBar />
//       <div>
//         <Link to="home">Home</Link>
//         <br />
//         <Link to="about">About</Link>
//         <SearchBar onSearch={onSearch} />
//       </div>
//     </div>
//   );
// }
// export default Nav;
