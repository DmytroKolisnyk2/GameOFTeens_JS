import { Button } from "@mui/material";
import { useState } from "react";
import styles from "../styles/home.module.scss";
import CreateUserDialog from "../components/CreateUserDialog/CreateUserDialog";
import { useSelector } from "react-redux";
import { getUserList } from "../redux/users/user-selectors";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeUser } from "../redux/users/data/data-actions";
import { useDispatch } from "react-redux";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const users = useSelector(getUserList);
  const dispatch = useDispatch();

  return (
    <section className={styles.home}>
      <div className={styles.contentWrapper}>
        <Button onClick={() => setOpenDialog(true)} color="secondary" variant="contained">
          Create
        </Button>
        <CreateUserDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
        <div className={styles.userWrapper}>
          <ul className={styles.usersList}>
            {users.map((item) => (
              <li key={item.id} className={styles.user}>
                <Link href={`${item.id}/calendar`}>
                  <a className={styles.link}>{item.name}</a>
                </Link>
                <Button
                  onClick={() => dispatch(removeUser(item.id))}
                  color="secondary"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
