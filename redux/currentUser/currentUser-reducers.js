import { createReducer } from "@reduxjs/toolkit";
import { addCurrentUser } from "./currentUser-actions";

export const currentUser = createReducer(null, {
  [addCurrentUser]: (_, { payload }) => payload,
});

