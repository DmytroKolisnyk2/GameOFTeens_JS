import { createReducer } from "@reduxjs/toolkit";
import { setDefaultLanguage, setUkrainianLanguage } from "./locales-actions";

export const language = createReducer('', {
  [setDefaultLanguage]: (state, action) => action.payload,
  [setUkrainianLanguage]: (state, action) => action.payload,
})
