import { createReducer } from "@reduxjs/toolkit";
import { setDefaultLanguage, setUkrainianLanguage } from "./locales-actions";

export const language = createReducer('english', {
  [setDefaultLanguage]: (state, action) => action.payload,
  [setUkrainianLanguage]: (state, action) => action.payload,
})
