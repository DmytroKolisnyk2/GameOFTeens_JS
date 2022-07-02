import { createReducer } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { addUser, removeUser } from "./users-actions";
import { updateData } from "./data/data-actions";


export const users = createReducer([], {
  [addUser]: (state, { payload }) => [...state, {
    id: v4(),
    name: payload,
    data: {}
  }]
  ,
  [removeUser]: (state, { payload }) => state.filter((item) => item.id !== payload),

  [updateData]: (state, { payload }) => {
    console.log(payload);
    const { id, data } = payload;
    state.forEach(element => { element.id === id ? element.data = data : element });

    return [...state, { id: v4(), name: payload.name, data: {} }]
  },
});