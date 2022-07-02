import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowBack";
import styles from "../../styles/result.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
// import "../../styles/variables.scss"

const result = () => {
  const { query, back } = useRouter();
  return (
    <PrivateRoute>
      <div className={styles.results__wrapper}>
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
  
        <Diagram
          data={{
            health: 2500,
            progress: 2500,
            travels: 1500,
            hobby: 4000,
            friends: 1600,
            family: 5000,
            carrier: 4000,
          }}
        />
      </div>
    </PrivateRoute>
  );
};

export default result;
