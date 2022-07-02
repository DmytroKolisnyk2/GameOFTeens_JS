import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import styles from "../styles/home.module.scss";
import CreateUserDialog from "../components/CreateUserDialog/CreateUserDialog";
import { useSelector } from "react-redux";
import { getUserList } from "../redux/users/user-selectors";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { removeUser } from "../redux/users/data/data-actions";
import { addCurrentUser } from "../redux/currentUser/currentUser-actions";
import { useDispatch } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { useTranslations } from "next-intl";

export default function users() {
  const t = useTranslations("Users");
  const [openDialog, setOpenDialog] = useState(false);
  const users = useSelector(getUserList);
  const dispatch = useDispatch();
  return (
    <section className={styles.home}>
      <div className={styles.contentWrapper}>
        <CreateUserDialog
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
        <div className={styles.userWrapper}>
  
          <h2 className={styles.title}>How it works?</h2>
          <p className={styles.text} >To create an account, you need to click the "create" button, after clicking on this button, a form will appear in which you need to enter your name. To authorize your account, click the button on the right. You can create many accounts. If necessary, you can delete your profile by clicking the delete button. Easy to use!</p>
        
          <ul className={styles.usersList}>
            {users.map((item) => (
              <li key={item.id} className={styles.user}>
                <Link href={`${item.id}/calendar`}>
                  <a className={styles.link}>{item.name}</a>
                </Link>
                <ButtonGroup>
                  <Button
                    onClick={() => dispatch(removeUser(item.id))}
                    color="secondary"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    {t("delete")}
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(addCurrentUser(item));
                      NotificationManager.success(
                        t("added")
                      );
                    }}
                    color="secondary"
                    variant="outlined"
                    endIcon={<PersonAddAltIcon />}
                  ></Button>
                </ButtonGroup>
              </li>
            ))}
          </ul>
          <Button
            className={styles.createBtn}
            onClick={() => setOpenDialog(true)}
            color="secondary"
            variant="contained"
          >
            {t('create')}
          </Button>
        </div>
      </div>
    </section>
  );
}