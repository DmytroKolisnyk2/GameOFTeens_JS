import { createReducer } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { addUser, removeUser } from "./users-actions";
import { updateData } from "./data/data-actions";

export const users = createReducer([], {
  [addUser]: (state, { payload }) => [
    ...state,
    {
      id: v4(),
      name: payload,
      data: {
      //   mon: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      //   tue: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 7000,
      //     carrier: 4000,
      //   },
      //   wed: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      //   thu: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      //   fri: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      //   sat: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      //   sun: {
      //     health: 2500,
      //     progress: 2500,
      //     travels: 1500,
      //     hobby: 4000,
      //     friends: 1600,
      //     family: 1000,
      //     carrier: 4000,
      //   },
      // },
    },
  ],
  [removeUser]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),

  [updateData]: (state, { payload }) => {
    console.log(payload);
    const { id, data } = payload;
    state.forEach((element) => {
      element.id === id ? (element.data = data) : element;
    });

    return [...state, { id: v4(), name: payload.name, data: {} }];
  },
});
