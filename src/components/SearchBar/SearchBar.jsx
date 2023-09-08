import style from "./SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      onSearch(id); // Llamar a la función cuando se presione Enter
    }
  };

  return (
    <div className={style.contenedor}>
      <input
        value={id}
        onChange={handleChange}
        className={style.input}
        placeholder="id..."
        type="search"
        onKeyUp={handleKeyUp} // Agregar el manejador de teclado
      />
      <button
        className={style.boton}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
      <Link to="/about">
        <button className={style.botonAbout}>About</button>
      </Link>
      <Link to="/home">
        <button className={style.botonAbout}>Home</button>
      </Link>
      <Link to="/favorites">
        <button className={style.botonAbout}>Favorites</button>
      </Link>
      {/* <button>About</button> */}
    </div>
  );
}
