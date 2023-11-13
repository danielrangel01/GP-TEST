import { Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { localStorageTypes } from ".././../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(localStorageTypes.PEOPLE)
    ? JSON.parse(localStorage.getItem(localStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(localStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
