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

const Header = () => {
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
                Home
              </NavLink>
              {username && (
                <>
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
                </>
              )}
            </ul>
          </nav>
        </div>

        {username ? (
          <div className={HeaderStyles.user_wrapper}>
            <p className={HeaderStyles.user_name}>{username}</p>
            <Button
              onClick={() => {
                dispatch(deleteCurrentUser());
                NotificationManager.success("You successfully exit");
              }}
              color="secondary"
              variant="outlined"
              endIcon={<LogoutIcon />}
            >
              Exit
            </Button>
          </div>
        ) : (
          <div>Please add user profile</div>
        )}
      </div>
    </header>
  );
};
export default Header;
