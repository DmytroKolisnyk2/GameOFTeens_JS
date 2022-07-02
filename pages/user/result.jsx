/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import styles from "../../styles/result.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

import { useSelector } from "react-redux";
import { getUserDataById } from "../../redux/users/user-selectors";
import { getCurrentUserId } from "../../redux/currentUser/currentUser-selectors";
import { getTheme } from "../../redux/theme/theme-selectors";

const result = () => {
  const { query, back } = useRouter();
  const userId = useSelector(getCurrentUserId);
  const userData = useSelector(getUserDataById(userId));
  let totalSpending = {
    health: 0,
    progress: 0,
    travels: 0,
    hobby: 0,
    friends: 0,
    family: 0,
    carrier: 0,
  };
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

  const sum = () => {
    // const state = store.getState().currentUser.data;
    for (const day in userData) {
      if (Object.hasOwnProperty.call(userData, day)) {
        const element = userData[day];
        for (const el in element) {
          const data = element[el];
          totalSpending[el] += data;
        }
      }
    }
    console.log(totalSpending);
    return totalSpending;
  };
  return (
    <section className={setStyle(theme, styles.results__wrapper, styles.themeDark, styles.themeLight)}>
      <PrivateRoute>
        <Diagram data={sum()} />
      </PrivateRoute>
    </section>
  );
};

export default result;
