import { createSelector } from "@reduxjs/toolkit";

const filterContacts = (query, contacts) =>
  contacts.filter((element) =>
    element.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

export const getContactsLength = (state) => state.contacts.items.length;
export const getContacts = (state) => state.contacts.items;
export const getError = (state) => state.contacts.error;
export const getLoading = (state) => state.contacts.loading;

export const getFilteredContacts = createSelector([getFilter, getContacts], (filter, contacts) => filterContacts(filter, contacts));
