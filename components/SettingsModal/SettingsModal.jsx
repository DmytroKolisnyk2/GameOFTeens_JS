import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Settings.module.scss";
import { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import PaletteIcon from "@mui/icons-material/Palette";
import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/theme-selectors";
import {
  changeDefaultTheme,
  changeLightTheme,
  changeDarkTheme,
} from "../../redux/theme/theme-actions";

const SettingsModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const onChangeTheme = (value) => {
    switch (value) {
      case "default":
        return dispatch(changeDefaultTheme("default"));
      case "dark":
        return dispatch(changeDarkTheme("dark"));
      case "light":
        return dispatch(changeLightTheme("light"));
    }
  };
  const setStyle = (theme, style, darkTheme, lightTheme) => {
    switch (theme) {
      case "default":
        return style;
      case "dark":
        return `${style} ${darkTheme}`;
      case "light":
        return `${style} ${lightTheme}`;
    }
  };
  const [language, setLanguage] = useState("english");
  return (
    <Modal open={isOpen} onClose={handleClose} className={styles.wrapperModal}>
      <div className={setStyle(theme, styles.modal, styles.themeDark, styles.themeLight)}>
        <h3
          className={setStyle(
            theme,
            styles.modalTitle,
            styles.darkThemeText,
            styles.lightThemeText
          )}
        >
          Settings
        </h3>
        <div className={styles.wrapperSelect}>
          <label className={styles.selectTheme}>
            <div className={styles.labelContent}>
              <PaletteIcon
                className={setStyle(
                  theme,
                  styles.labelIcon,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              />
              <h4
                className={setStyle(
                  theme,
                  styles.labelTitle,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              >
                Theme
              </h4>
            </div>
            <Select
              fullWidth
              margin="dense"
              labelId="theme"
              id="theme"
              value={theme}
              onChange={(event) => onChangeTheme(event.target.value)}
            >
              <MenuItem value={"default"}>default</MenuItem>
              <MenuItem value={"dark"}>dark</MenuItem>
              <MenuItem value={"light"}>light</MenuItem>
            </Select>
          </label>
          <label className={styles.selectLanguage}>
            <div className={styles.labelContent}>
              <TranslateIcon
                className={setStyle(
                  theme,
                  styles.labelIcon,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              />
              <h4
                className={setStyle(
                  theme,
                  styles.labelTitle,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              >
                Language
              </h4>
            </div>
            <Select
              fullWidth
              margin="dense"
              labelId="language"
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <MenuItem value={"english"}>english</MenuItem>
              <MenuItem value={"ukrainian"}>ukrainian</MenuItem>
            </Select>
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
