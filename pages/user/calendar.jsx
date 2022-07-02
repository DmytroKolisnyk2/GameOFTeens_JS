import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../styles/calendar.module.scss";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/users/data/data-actions";
import { getCurrentUserId } from "../../redux/currentUser/currentUser-selectors";
import { getUserDataById } from "../../redux/users/user-selectors";
import { useTranslations } from "next-intl";

const Calendar = () => {
  const t = useTranslations("Calendar");
  const dispatch = useDispatch();

  const userId = useSelector(getCurrentUserId);
  const userData = useSelector(getUserDataById(userId));
  const [data, setData] = useState(userData);

  const submitValue = (event) => {
    event.preventDefault();
    if (isValidData()) {
      dispatch(updateData({ id: userId, data }));
      return;
    }
    NotificationManager.error(t('error'));
  };

  const isValidData = () =>
    Object.keys(data).every((day) =>
      Object.values(data[day]).every((item) => item >= 0)
    );

  return (
    <section className={styles.calendarPage}>
      <PrivateRoute>
        {data && (
          <form onSubmit={submitValue}>
            <div className={styles.calendar}>
              {Object.keys(data).map((day) => (
                <div key={day} className={styles.column}>
                  <h3 className={styles.title}>{day}</h3>
                  {Object.keys(data[day]).map((item) => (
                    <TextField
                      day={day}
                      key={`${day}-${item}`}
                      value={data[day][item]}
                      onChange={({ target }) => {
                          setData((prev) => {
                            for (const item in prev) {
                              const element = prev[item];
                              for (const elem in element) {
                                if (element[elem] === "") {
                                  element[elem] = 0;
                                }
                              }
                            }
                            const newData = JSON.parse(JSON.stringify(prev));
                            newData[day][item] = +target.value;
                            return newData;
                          });
                      }}
                      margin="dense"
                      name={`${day}-${item}`}
                      label={item}
                      fullWidth
                      variant="outlined"
                      type="number"
                    />
                  ))}
                </div>
              ))}
            </div>
            <Button
              type="submit"
              className={styles.submitButton}
              color="secondary"
              variant="outlined"
            >
              {t("save")}
            </Button>
            <Button
              className={styles.button}
              color="secondary"
              type="text"
              variant="contained"
            >
             {t("result")}
            </Button>
          </form>
        )}
      </PrivateRoute>
    </section>
  );
};

export default Calendar;
