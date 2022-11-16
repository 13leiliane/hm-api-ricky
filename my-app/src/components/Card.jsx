import styles from "./style/Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Card(props) {
  //console.log(props);
  const { name, image, species, gender, onClose, primary } = props;

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <button className={styles.claseButton} onClick={onClose}>
        <IoCloseCircleOutline />
      </button>
      <h3 className={styles.personName}>{name}</h3>
      <div className={styles.claseSpecies}>{species}</div>
      <div className={styles.claseGender}>{gender}</div>
      <img className={styles.claseImage} src={image} alt={name} />
    </div>
  );
}
