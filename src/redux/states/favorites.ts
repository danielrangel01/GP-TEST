import { Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { localStorageTypes } from ".././../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(localStorageTypes.FAVORITES)
    ? JSON.parse(localStorage.getItem(localStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITES, state);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = state.filter((p: Person) => p.id !== action.payload)
      setLocalStorage(localStorageTypes.FAVORITES, filteredState);
      return filteredState
    }
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
