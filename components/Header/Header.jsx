import NavLink from "../NavLink/NavLink";
import HeaderStyles from "./Header.module.scss";
import Logo from "../../img/logo.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
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
                Home
              </NavLink>
              <NavLink
                activeClass={HeaderStyles.linkActive}
                href={"/[userId]ds/calendar"}
                classes={HeaderStyles.link}
              >
                Calendar
              </NavLink>
              <NavLink
                activeClass={HeaderStyles.linkActive}
                href={"/[userId]ds/result"}
                classes={HeaderStyles.link}
              >
                Result
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className={HeaderStyles.user_wrapper}>
          <p className={HeaderStyles.user_name}>User</p>
          <AccountCircleIcon className={HeaderStyles.user_img} />
        </div>
      </div>
    </header>
  );
};
export default Header;
