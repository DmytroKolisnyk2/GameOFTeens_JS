/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import styles from "../../styles/result.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { store, persistor } from "../../redux/store.js";
import { getCurrentUserData } from "../../redux/currentUser/currentUser-selectors";
import { useSelector } from "react-redux";

const result = () => {

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
    const state = useSelector(getCurrentUserData);
    for (const day in state) {
      if (Object.hasOwnProperty.call(state, day)) {
        const element = state[day];
        for (const el in element) {
          const data = element[el];
          totalSpending[el] += data;
        }
      }
    }
    return totalSpending;
  };
  return (
    <Diagram data={sum()} />
  );
};

export default result;
