import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import styles from "../../styles/result.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
// import AboutResult from "../../components/AboutResult/AboutResult"
import { useSelector } from "react-redux";
import { getUserDataById } from "../../redux/users/user-selectors";
import { getCurrentUserId } from "../../redux/currentUser/currentUser-selectors";


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
    <section className={styles.results__wrapper}>
      <PrivateRoute>
        <div className={styles.main_wrapper}>
  
        <Diagram data={sum()} />
        
        </div>
      </PrivateRoute>
    </section>
  );
};

export default result;
