import styles from "./AboutPage.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslations } from "next-intl";
import { Button } from "@mui/material";
import Link from "next/link";
import { getCurrentUserName } from "../../redux/currentUser/currentUser-selectors";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/theme/theme-selectors";
import { Fade } from "react-awesome-reveal";

export default function AboutPage({ setIsOpen }) {
  const t = useTranslations("About");
  const username = useSelector(getCurrentUserName);
  const theme = useSelector(getTheme);
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
    <section className={setStyle(theme, styles.main_wrapper, styles.themeDark, styles.themeLight)}>
      <div className={styles.wrapper}>
        <Fade cascade duration={600} triggerOnce>
          <h2
            className={setStyle(theme, styles.title, styles.darkThemeText, styles.lightThemeText)}
          >
            {t("about")}
          </h2>
          <p
            className={setStyle(
              theme,
              styles.main_text,
              styles.darkThemeText,
              styles.lightThemeText
            )}
          >
            {t("about_text")}
          </p>
        </Fade>
      </div>
      <h3 className={setStyle(theme, styles.title, styles.darkThemeText, styles.lightThemeText)}>
        {t("about_title")}
      </h3>
      <div className={styles.cards_wrapper}>
        <Fade direction={"left"} duration={500} triggerOnce>
          <div
            className={setStyle(
              theme,
              styles.item_wrapper,
              styles.cardDarkTheme,
              styles.cardLightTheme
            )}
          >
            <AddCircleOutlineIcon
              className={setStyle(
                theme,
                styles.item_img,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            />
            <h5
              className={setStyle(
                theme,
                styles.item_title,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("multiU_title")}
            </h5>
            <p
              className={setStyle(
                theme,
                styles.item_text,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("multiU_text")}
            </p>
            <Link href={"/users"}>
              <Button
                className={styles.img_btn}
                color="secondary"
                variant="outlined"
                endIcon={<AddCircleOutlineIcon />}
              >
                {t("add_account")}
              </Button>
            </Link>
          </div>
        </Fade>
        <Fade direction={"left"} duration={600} triggerOnce>
          <div
            className={setStyle(
              theme,
              styles.item_wrapper,
              styles.cardDarkTheme,
              styles.cardLightTheme
            )}
          >
            <AccessTimeIcon
              className={setStyle(
                theme,
                styles.item_img,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            />
            <h5
              className={setStyle(
                theme,
                styles.item_title,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("resultI_title")}
            </h5>
            <p
              className={setStyle(
                theme,
                styles.item_text,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("resultI_text")}
            </p>
            {username ? (
              <Link href={"/user/result"}>
                <Button
                  className={styles.img_btn}
                  color="secondary"
                  variant="outlined"
                  endIcon={<AccessTimeIcon />}
                >
                  {t("result")}
                </Button>
              </Link>
            ) : (
              <Link href={"/users"}>
                <Button
                  className={styles.img_btn}
                  color="secondary"
                  variant="outlined"
                  endIcon={<AccountCircleIcon />}
                >
                  {t("login")}
                </Button>
              </Link>
            )}
          </div>
        </Fade>
        <Fade direction={"right"} duration={600} triggerOnce>
          <div
            className={setStyle(
              theme,
              styles.item_wrapper,
              styles.cardDarkTheme,
              styles.cardLightTheme
            )}
          >
            <CheckCircleOutlineIcon
              className={setStyle(
                theme,
                styles.item_img,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            />
            <h5
              className={setStyle(
                theme,
                styles.item_title,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("savingA_title")}
            </h5>
            <p
              className={setStyle(
                theme,
                styles.item_text,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("savingA_text")}
            </p>
            {username ? (
              <Link href={"/user/calendar"}>
                <Button
                  className={styles.img_btn}
                  color="secondary"
                  variant="outlined"
                  endIcon={<CheckCircleOutlineIcon />}
                >
                  {t("calendar")}
                </Button>
              </Link>
            ) : (
              <Link href={"/users"}>
                <Button
                  className={styles.img_btn}
                  color="secondary"
                  variant="outlined"
                  endIcon={<AccountCircleIcon />}
                >
                  {t("login")}
                </Button>
              </Link>
            )}
          </div>
        </Fade>
        <Fade direction={"right"} duration={500} triggerOnce>
          <div
            className={setStyle(
              theme,
              styles.item_wrapper,
              styles.cardDarkTheme,
              styles.cardLightTheme
            )}
          >
            <LanguageIcon
              className={setStyle(
                theme,
                styles.item_img,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            />
            <h5
              className={setStyle(
                theme,
                styles.item_title,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("languageC_title")}
            </h5>
            <p
              className={setStyle(
                theme,
                styles.item_text,
                styles.darkThemeText,
                styles.lightThemeText
              )}
            >
              {t("languageC_text")}
            </p>
            <Link href={"/"}>
              <Button
                onClick={setIsOpen}
                className={styles.img_btn}
                color="secondary"
                variant="outlined"
                endIcon={<LanguageIcon />}
              >
                {t("language_change")}
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
