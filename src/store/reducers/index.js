import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/types";

const initialState = {
  fav: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FAV:
      return {
        ...state,
        fav: [...state.fav, payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        fav: state.fav.filter((b) => b.id !== payload.id),
      };
    default:
      return state;
  }
}
