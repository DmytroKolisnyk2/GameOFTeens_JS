import { createReducer, combineReducers } from "@reduxjs/toolkit"; 
import {
    changeDefaultTheme,
    changeLightTheme,
    changeDarkTheme
} from './theme-actions';

const theme = createReducer('default', {
    [changeDefaultTheme]: (state, action) => action.payload,
    [changeLightTheme]: (state, action) => action.payload,
    [changeDarkTheme]: (state, action) => action.payload,
});

export default theme;