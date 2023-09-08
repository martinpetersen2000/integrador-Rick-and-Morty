import { useState } from "react";
import style from "./Form.module.css";
import validate from "./validation";
const { formulario, imagen, input, label, boton, span } = style;

export default function Form({ login }) {
  const imageUrl =
    "https://hips.hearstapps.com/hmg-prod/images/rick-and-morty-1604562846.jpg?crop=0.530xw:1.00xh;0.202xw,0&resize=1200:*";

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    setErrors(validate({ ...userData, [property]: value }, setErrors, errors));
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  console.log(userData);
  console.log(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={formulario} onSubmit={handleSubmit}>
      <h1>BIENVENIDO</h1>
      <img className={imagen} src={imageUrl} alt="" />
      <h3>INICIA SESION PARA CONTINUAR!</h3>
      <div>
        <label className={label} htmlFor="email">
          Email:
        </label>
        <input
          className={input}
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <span className={span}>{errors.email}</span>
      </div>
      <div>
        <label className={label} htmlFor="password">
          Password:
        </label>
        <input
          className={input}
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <span className={span}>{errors.password}</span>
      </div>
      <button className={boton} type="submit">
        Submit
      </button>
    </form>
  );
}
