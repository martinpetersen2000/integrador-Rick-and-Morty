import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const {
  tarjeta,
  carta,
  imagenes,
  nombre,
  boton,
  infoDeAbajo,
  especie,
  genero,
  boton2,
} = style;

function Card(props) {
  const {
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    id,
    subrayado,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    }
    if (isFav === false) {
      setIsFav(true);
      addFav(props);
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  const location = useLocation();
  return (
    <div className={tarjeta}>
      <div className={carta}>
        <img className={imagenes} src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h2 className={nombre}>{name} </h2>
        </Link>
        {location.pathname !== "/favorites" && (
          <button className={boton} onClick={() => onClose(id)}>
            ✖
          </button>
        )}
        {isFav ? (
          <button className={boton2} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={boton2} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>

      {/* <h2>{status}</h2> */}

      <div className={infoDeAbajo}>
        <h2 className={especie}>{`Species: ${species}`}</h2>
        <h2 className={genero}>
          <span className={subrayado}>Gender: </span> {gender}
        </h2>
      </div>

      <h2>{origin.name}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
