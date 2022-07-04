import styles from "../styles/home.module.scss";

import Router from "next/router";
import NotificationManager from "react-notifications/lib/NotificationManager";

import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

import img from "../img/users.png";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useTranslations } from "next-intl";
import CreateUserDialog from "../components/CreateUserDialog/CreateUserDialog";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { removeUser } from "../redux/users/data/data-actions";
import { addCurrentUser } from "../redux/currentUser/currentUser-actions";

import { getTheme } from "../redux/theme/theme-selectors";
import { getUserList } from "../redux/users/user-selectors";
import { getCurrentUserName } from "../redux/currentUser/currentUser-selectors";
import Check from "@mui/icons-material/Check";

import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const t = useTranslations("Users");

  const dispatch = useDispatch();

  const users = useSelector(getUserList);
  const theme = useSelector(getTheme);
  const username = useSelector(getCurrentUserName);

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

  return (
    <section className={setStyle(theme, styles.userSection, styles.themeDark, styles.themeLight)}>
      <div className={styles.wrapper}>
        <div>
          <Fade triggerOnce cascade>
            <h1 className={styles.main_title}>{t("user")}</h1>
            <img className={styles.img} src={img.src} alt={img.src} />
          </Fade>
        </div>
        <div className={styles.contentWrapper}>
          <CreateUserDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
          <div
            className={setStyle(
              theme,
              styles.userWrapper,
              styles.cardDarkTheme,
              styles.cardLightTheme
            )}
          >
            <Fade triggerOnce>
              <h2
                className={setStyle(
                  theme,
                  styles.title,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              >
                {t("how")}
              </h2>
              <p
                className={setStyle(
                  theme,
                  styles.text,
                  styles.darkThemeText,
                  styles.lightThemeText
                )}
              >
                {t("guide")}
              </p>
            </Fade>

            <ul className={styles.usersList}>
              <Fade triggerOnce duration={300} cascade direction="up">
                {users.map((item) => (
                  <li
                    key={item.id}
                    className={
                      styles.user + " " + (item.name === username ? styles.userActive : "")
                    }
                  >
                    <p
                      onClick={() => {
                        dispatch(addCurrentUser(item));
                        NotificationManager.success(t("added"));
                      }}
                      className={setStyle(
                        theme,
                        styles.link,
                        styles.darkThemeText,
                        styles.lightThemeText
                      )}
                    >
                      {item.name}
                    </p>
                    <ButtonGroup>
                      <Button
                        onClick={() => dispatch(removeUser(item.id))}
                        color="secondary"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        {t("delete")}
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(addCurrentUser(item));
                          NotificationManager.success(t("added"));
                        }}
                        color="secondary"
                        variant={username === item.name ? "contained" : "outlined"}
                        endIcon={username === item.name ? <Check /> : <PersonAddAltIcon />}
                      ></Button>
                    </ButtonGroup>
                  </li>
                ))}
              </Fade>
            </ul>
            <div className={styles.controlsWrapper}>
              <Button
                className={styles.createBtn}
                onClick={() => setOpenDialog(true)}
                color="secondary"
                variant="contained"
              >
                {t("create")}
              </Button>
              <Button
                className={styles.createBtn}
                onClick={() => Router.push("/user/calendar")}
                color="secondary"
                variant="outlined"
                disabled={!Boolean(username)}
              >
                {t("calendar")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
