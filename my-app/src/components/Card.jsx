import styles from "./style/Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Card(props) {
  //console.log(props);
  const { name, image, species, gender, onClose, primary } = props;

  return (
    <div className={`${styles.card} ${primary}`}>
      <button className={styles.claseButton} onClick={onClose}>
        <IoCloseCircleOutline />
      </button>
      <span>{name}</span>
      <img src={image} alt={name} />
      <div>{species}</div>
      <div>{gender}</div>
    </div>
  );
}
