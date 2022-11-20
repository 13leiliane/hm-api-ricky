import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./style/Card.module.css";
//import { IoCloseCircleOutline } from "react-icons/io5";
export default function Card({
  name,
  image,
  species,
  gender,
  onClose,
  primary,
}) {
  return (
    <div className={styles.card}>
      <div id="closeIcon" className="row">
        <span className={styles.name}>
          <button className={styles.button} onClick={onClose}>
            <IoIosAddCircleOutline />
          </button>
        </span>
        <img className={styles.img} src={image} alt={name} />
        <div className={styles.specie}>{species}</div>
        <div className={styles.gende}>{gender}</div>
      </div>
    </div>
  );
}

// import { IoIosAddCircleOutline } from "react-icons/io";
// import styles from "./style/Card.module.css";
// //import { IoCloseCircleOutline } from "react-icons/io5";
// export default function Card(props) {
//   //console.log(props);
//   const { name, image, species, gender, onClose, primary } = props;

//   return (
//     <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
//       <span className={styles.name}>
//         {name}
//         {!primary && (
//           <button className={styles.button} onClick={onClose}>
//             <IoIosAddCircleOutline />
//           </button>
//         )}
//       </span>
//       <img className={styles.img} src={image} alt={name} />
//       <div className={styles.specie}>{species}</div>
//       <div className={styles.gende}>{gender}</div>
//     </div>
//   );
// }
