import { createReducer } from "@reduxjs/toolkit";
import { addCurrentUser, deleteCurrentUser } from "./currentUser-actions";
import { removeUser } from "../users/users-actions";

export const currentUser = createReducer(null, {
  [addCurrentUser]: (_, { payload }) => payload,
  [deleteCurrentUser]: (_, { payload }) => null,
  [removeUser]: (state, { payload }) => payload === state?.id ? null : state
});

