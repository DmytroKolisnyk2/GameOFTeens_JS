import { useRouter } from "next/router";
import Diagram from "../../components/Diagram/Diagram";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowBack";
import styles from "../../styles/result.module.scss";
import { store, persistor } from "../../redux/store.js";

const result = () => {
  const { query, back } = useRouter();
  return (
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
        data={store.getState().currentUser.data}
      />
    </div>
  );
};

export default result;
