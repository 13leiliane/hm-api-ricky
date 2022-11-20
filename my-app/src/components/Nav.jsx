import SearchBar from "./SearchBar.jsx";
import Logo from "../logoHenry.png";
import styles from "../components/style/Nav.module.css";
function Nav({ onSeach }) {
  return (
    <div className={styles.logoHenry}>
      <img src={Logo} alt="img not found" />
      <span>Leiliane A Ricky-and-Morty</span>
      <SearchBar />
    </div>
  );
}
export default Nav;
