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

export default function users() {
  const [openDialog, setOpenDialog] = useState(false);
  const users = useSelector(getUserList);
  const dispatch = useDispatch();
  return (
    <section className={styles.home}>
      <div className={styles.contentWrapper}>
        <CreateUserDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
        <div className={styles.userWrapper}>
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
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(addCurrentUser(item));
                      NotificationManager.success("Current user successfully added");
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
            Create
          </Button>
        </div>
      </div>
    </section>
  );
}
