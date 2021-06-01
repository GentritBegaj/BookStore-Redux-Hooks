import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./types";

export const addToFav = (book) => ({
  type: ADD_TO_FAV,
  payload: book,
});

export const removeFromFav = (book) => ({
  type: REMOVE_FROM_FAV,
  payload: book,
});
