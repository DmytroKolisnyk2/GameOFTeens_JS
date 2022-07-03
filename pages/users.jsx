import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import styles from "../styles/home.module.scss";
import stylesPage from "../components/MainPage/MainPage.module.scss";
import img from "../img/users.png";
import CreateUserDialog from "../components/CreateUserDialog/CreateUserDialog";
import { useSelector } from "react-redux";
import { getUserList } from "../redux/users/user-selectors";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { removeUser } from "../redux/users/data/data-actions";
import { addCurrentUser } from "../redux/currentUser/currentUser-actions";
import { useDispatch } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { useTranslations } from "next-intl";
import { getTheme } from "../redux/theme/theme-selectors";
import Router from "next/router";
import { getCurrentUserName } from "../redux/currentUser/currentUser-selectors";

export default function users() {
  const t = useTranslations("Users");
  const [openDialog, setOpenDialog] = useState(false);
  const users = useSelector(getUserList);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const username = useSelector(getCurrentUserName);
  console.log(Boolean(username));
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
    <section className={setStyle(theme, styles.home, styles.themeDark, styles.themeLight)}>
      <div className={styles.wrapper}>
        <div>
          <h1 className={stylesPage.main_page_title}>{t('user')}</h1>
          <img className={styles.img} src={img.src} alt={img.src} />
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
              className={setStyle(theme, styles.text, styles.darkThemeText, styles.lightThemeText)}
            >
              {t("guide")}
            </p>

            <ul className={styles.usersList}>
              {users.map((item) => (
                <li key={item.id} className={styles.user}>
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
                      variant="outlined"
                      endIcon={<PersonAddAltIcon />}
                    ></Button>
                  </ButtonGroup>
                </li>
              ))}
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
