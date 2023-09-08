import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, allCharacters: [...state.allCharacters, payload] };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((per) => per.id !== +payload),
      };

    case FILTER:
      const allCharacter = state.allCharacters;

      const fil = allCharacter.filter((per) => per.gender === payload);

      return { ...state, myFavorites: fil };

    case ORDER:
      const allChar = [...state.allCharacters];

      allChar.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id; // para que ordene de forma ascendente
        } else if (payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return { ...state, myFavorites: allChar };

    default:
      return { ...state };
  }
};

export default rootReducer;
