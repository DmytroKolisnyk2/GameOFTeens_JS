import { createAction } from "@reduxjs/toolkit";

const changeDefaultTheme = createAction('theme/default');
const changeLightTheme = createAction('theme/light');
const changeDarkTheme = createAction('theme/dark');

export {
    changeDefaultTheme,
    changeLightTheme,
    changeDarkTheme
};