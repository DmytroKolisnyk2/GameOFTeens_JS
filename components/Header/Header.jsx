import NavLink from "../NavLink/NavLink";
import HeaderStyles from "./Header.module.scss";
import Logo from "../../img/logo.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getCurrentUserName } from "../../redux/currentUser/currentUser-selectors";
import { useDispatch } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { deleteCurrentUser } from "../../redux/currentUser/currentUser-actions";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";
import Link from "next/link";
import { language } from "../../redux/localization/locales-reducers";
import { useTranslations } from "next-intl";
import { getTheme } from "../../redux/theme/theme-selectors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ handleOpenModal }) => {
  const t = useTranslations("Header");
  const { locales } = useRouter();
  const username = useSelector(getCurrentUserName);
  const dispatch = useDispatch();
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
    <header
      className={setStyle(
        theme,
        HeaderStyles.header,
        HeaderStyles.themeDark,
        HeaderStyles.themeLight
      )}
    >
      <div className={HeaderStyles.wrapper_page}>
        <div className={HeaderStyles.logo_wrapper}>
          <img className={HeaderStyles.logo_img} src={Logo.src} alt="Logo" />
          <nav className={HeaderStyles.navigation}>
            <ul className={HeaderStyles.wrapper}>
              <NavLink
                activeClass={HeaderStyles.active}
                exact
                href={"/"}
                classes={setStyle(
                  theme,
                  HeaderStyles.link,
                  HeaderStyles.darkThemeLink,
                  HeaderStyles.lightThemeLink
                )}
              >
                {t("home")}
              </NavLink>
              <NavLink
                activeClass={HeaderStyles.active}
                exact
                href={"/users"}
                classes={setStyle(
                  theme,
                  HeaderStyles.link,
                  HeaderStyles.darkThemeLink,
                  HeaderStyles.lightThemeLink
                )}
              >
                {t("users")}
              </NavLink>
              {username && (
                <>
                  <NavLink
                    activeClass={HeaderStyles.active}
                    href={"/user/calendar"}
                    classes={setStyle(
                      theme,
                      HeaderStyles.link,
                      HeaderStyles.darkThemeLink,
                      HeaderStyles.lightThemeLink
                    )}
                  >
                    {t("calendar")}
                  </NavLink>
                  <NavLink
                    activeClass={HeaderStyles.active}
                    href={"/user/result"}
                    classes={setStyle(
                      theme,
                      HeaderStyles.link,
                      HeaderStyles.darkThemeLink,
                      HeaderStyles.lightThemeLink
                    )}
                  >
                    {t("result")}
                  </NavLink>
                </>
              )}
            </ul>
          </nav>
        </div>
        {username ? (
          <div className={HeaderStyles.user_wrapper}>
            <p
              className={setStyle(
                theme,
                HeaderStyles.user_name,
                HeaderStyles.darkThemeLink,
                HeaderStyles.lightThemeLink
              )}
            >
              {username}
            </p>
            <Button
              onClick={() => {
                dispatch(deleteCurrentUser());
                NotificationManager.success(t("exitNo"));
              }}
              color="secondary"
              variant="outlined"
              endIcon={<LogoutIcon />}
            >
              {t("exit")}
            </Button>
            <SettingsIcon
              onClick={handleOpenModal}
              className={setStyle(
                theme,
                HeaderStyles.icon,
                HeaderStyles.darkThemeLink,
                HeaderStyles.lightThemeLink
              )}
            />
          </div>
        ) : (
          <>
            <div className={HeaderStyles.user_wrapper}>
              <Link href={"/users"}>
                <a
                  className={setStyle(
                    theme,
                    HeaderStyles.link,
                    HeaderStyles.darkThemeLink,
                    HeaderStyles.lightThemeLink
                  )}
                >
                  <Button color="secondary" variant="outlined" endIcon={<AccountCircleIcon />}>
                    {t("add")}
                  </Button>
                </a>
              </Link>
              <SettingsIcon
                onClick={handleOpenModal}
                className={setStyle(
                  theme,
                  HeaderStyles.icon,
                  HeaderStyles.darkThemeLink,
                  HeaderStyles.lightThemeLink
                )}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
