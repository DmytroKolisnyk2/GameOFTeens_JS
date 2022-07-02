import { createReducer } from "@reduxjs/toolkit";
import { setUserLanguage } from "./locales-actions";

export const language = createReducer([], {
  [setUserLanguage]: (state, {payload}) => [
      ...state,
      {
        language: payload
      },
    ]
})
