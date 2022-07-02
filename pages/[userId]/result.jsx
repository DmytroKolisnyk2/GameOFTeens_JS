/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowBack";
import styles from "../../styles/result.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";
import { getUserDataById } from "../../redux/users/user-selectors";

const result = () => {
  const { query, back } = useRouter();
  const userData = useSelector(getUserDataById);
  let totalSpending = {
    health: 0,
    progress: 0,
    travels: 0,
    hobby: 0,
    friends: 0,
    family: 0,
    carrier: 0,
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
    return totalSpending;
  };
  return (
    <section className={styles.results__wrapper}>
      <PrivateRoute>
        <Button
          className={styles.button}
          size="large"
          color="secondary"
          variant="contained"
          startIcon={<Arrow />}
          onClick={() => back()}
        >
          Go Back
        </Button>
        <h1 className={styles.result}>Your result</h1>

        <Diagram data={sum()} />
      </PrivateRoute>
    </section>
  );
};

export default result;
