import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { contacts } from "./contacts/contacts-reducers";
import { users } from "./users/users-reducers";
import { currentUser } from "./currentUser/currentUser-reducers";
import theme from './theme/theme-reducers';
import {language} from "./localization/locales-reducers"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "circle",
  storage,
};

const rootReducer = combineReducers({ language, users, currentUser, theme });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


