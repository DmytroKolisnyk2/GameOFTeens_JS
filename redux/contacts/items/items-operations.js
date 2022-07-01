import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";

axios.defaults.baseURL = "/api";

export const getContact = createAsyncThunk("contacts/getContact", (_, { rejectWithValue }) =>
  axios
    .get("/contacts")
    .then(({ data }) => data)
    .catch(({ message }) => rejectWithValue(message))
);

export const addContact = createAsyncThunk("contacts/addContact", (data, { rejectWithValue }) =>
  axios
    .post("/contacts", data)
    .then(({ data }) => {
      NotificationManager.success('Contact successfully added', '', 400);
      return data;
    })
    .catch(({ message }) => rejectWithValue(message))
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  (id, { rejectWithValue }) =>
    axios
      .delete(`/contacts/${id}`)
      .then(({ data }) => {
        NotificationManager.success('Contact successfully deleted', '', 300);
        return data.id;
      })
      .catch(({ message }) => rejectWithValue(message))
);
