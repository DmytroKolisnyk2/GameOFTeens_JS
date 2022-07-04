import { createReducer } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { addUser, removeUser } from "./users-actions";
import { updateData } from "./data/data-actions";
import NotificationManager from "react-notifications/lib/NotificationManager";

const INITIAL_STATE = {
  health: '',
  progress: '',
  travels: '',
  hobby: '',
  friends: '',
  family: '',
  carrier: '',
};

const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const initialData = week.reduce((acc, item) => ({ ...acc, [item]: { ...INITIAL_STATE } }), {});

export const users = createReducer([], {
  [addUser]: (state, { payload }) => [
    ...state,
    {
      id: v4(),
      name: payload,
      data: initialData,
    },
  ],

  [removeUser]: (state, { payload }) => {
    NotificationManager.success('User successfully deleted')
    return state.filter((item) => item.id !== payload)
  },

  [updateData]: (state, { payload }) => {
    const updateUser = state.find((item) => item.id === payload.id);
    updateUser.data = payload.data;
    NotificationManager.success('Calendar successfully saved')
    return void ([
      ...state.filter((item) => item.id !== payload.id), updateUser
    ])
  }
});
