import { combineReducers } from "@reduxjs/toolkit";
import { items, loading, error } from "./items/items-reducers";

export const contacts = combineReducers({
  items,
  loading,
  error,
});