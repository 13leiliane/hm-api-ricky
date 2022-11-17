import styles from "./style/Card.module.css";
//import { IoCloseCircleOutline } from "react-icons/io5";
export default function Card(props) {
  //console.log(props);
  const { name, image, species, gender, onClose, primary } = props;

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <button style={{ display: "none" }} onClick={onClose}>
        X
      </button>
      <span className={styles.name}>{name}</span>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.specie}>{species}</div>
      <div className={styles.gende}>{gender}</div>
    </div>
  );
}

// import styles from "./style/Card.module.css";
// import { IoCloseCircleOutline } from "react-icons/io5";
// export default function Card(props) {
//   //console.log(props);
//   const { name, image, species, gender, onClose, primary } = props;

//   return (
//     <div className={`${styles.card} ${primary}`}>
//       <button className={styles.claseButton} onClick={onClose}>
//         <IoCloseCircleOutline />
//       </button>
//       <span>{name}</span>
//       <img src={image} alt={name} />
//       <div>{species}</div>
//       <div>{gender}</div>
//     </div>
//   );
// }
