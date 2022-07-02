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
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from "next/router";
import Link from "next/link";
import { language } from "../../redux/localization/locales-reducers";
import { useTranslations } from "next-intl";

const Header = ({handleOpenModal}) => {
  const t = useTranslations("Header");
  const { locales } = useRouter();
  const username = useSelector(getCurrentUserName);
  const dispatch = useDispatch();
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.wrapper_page}>
        <div className={HeaderStyles.logo_wrapper}>
          <img className={HeaderStyles.logo_img} src={Logo.src} alt="Logo" />
          <nav className={HeaderStyles.navigation}>
            <ul className={HeaderStyles.wrapper}>
              <NavLink
                activeClass={HeaderStyles.linkActive}
                exact
                href={"/"}
                classes={HeaderStyles.link}
              >
                {t('home')}
              </NavLink>
              <NavLink
                activeClass={HeaderStyles.linkActive}
                exact
                href={"/users"}
                classes={HeaderStyles.link}
              >
                Users
              </NavLink>
              {username && (
                <>
                  <NavLink
                    activeClass={HeaderStyles.linkActive}
                    href={"/[userId]ds/calendar"}
                    classes={HeaderStyles.link}
                  >
                    {t('calendar')}
                  </NavLink>
                  <NavLink
                    activeClass={HeaderStyles.linkActive}
                    href={"/[userId]ds/result"}
                    classes={HeaderStyles.link}
                  >
                    {t('result')}
                  </NavLink>
                </>
              )}
            </ul>
          </nav>
        </div>
        {[...locales].sort().map((local) => (
          <Link
            className={HeaderStyles.link}
            key={local}
            href="/"
            locale={local}
          >
            {local}
          </Link>
        ))}
        {username ? (
          <div className={HeaderStyles.user_wrapper}>
            <p className={HeaderStyles.user_name}>{username}</p>
            <Button
              onClick={() => {
                dispatch(deleteCurrentUser());
                NotificationManager.success(t('exitNo'));
              }}
              color="secondary"
              variant="outlined"
              endIcon={<LogoutIcon />}
            >
              {t('exit')}
            </Button>
            <SettingsIcon onClick={handleOpenModal} className={HeaderStyles.icon}/>
          </div>
        ) : (
          <>
          <div className={HeaderStyles.user_wrapper}>
          <span>{t('add')}</span>
          <SettingsIcon onClick={handleOpenModal} className={HeaderStyles.icon}/>
          </div>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
