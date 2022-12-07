import React from "react";
import { useState } from "react";
import { Validation } from "./Validation";
import styles from "././style/Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(Validation({ ...userData, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className={styles.username}
          id="username"
          name="username"
          placeholder="Ingrese el usuario..."
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input
          className={styles.password}
          id="password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{errors.password}</p>
        <input className={styles.subimit} type="submit" />
        <br />
        <br />
        <br />
        <br />
        <h1>
          {" "}
          ¡BIENVENIDOS! <br /> <br />A Rick AND Morty..
        </h1>
      </form>
    </div>
  );
}
