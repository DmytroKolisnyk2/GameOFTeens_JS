import { createReducer } from "@reduxjs/toolkit";

import { getContact, addContact, deleteContact } from "./items-operations";

export const items = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) => [
    ...state.filter((element) => element.id !== payload),
  ],
  [getContact.fulfilled]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [getContact.pending]: () => true,
  [getContact.rejected]: () => false,
  [getContact.fulfilled]: () => false,
});

export const error = createReducer("", {
  [addContact.pending]: () => "",
  [deleteContact.pending]: () => "",
  [getContact.pending]: () => "",
  [addContact.rejected]: (_, { payload }) => "Oops, we can't add contact. " + payload,
  [deleteContact.rejected]: (_, { payload }) => "Oops, we can't delete contact. " + payload,
  [getContact.rejected]: (_, { payload }) => "Oops, we can't load contacts. " + payload,
});
