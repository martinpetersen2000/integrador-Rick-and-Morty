import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css";

const { select, selects } = style;

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
    setAux(!aux);
  };
  return (
    <div>
      <div className={select}>
        <select className={selects} onChange={handleOrder} name="" id="">
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={selects} onChange={handleFilter} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <Card
            id={character.id}
            name={character.name}
            // status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            // onClose={onClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
