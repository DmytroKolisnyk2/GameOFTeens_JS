import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { addUser } from "../../redux/users/users-actions";
import { useDispatch } from "react-redux";
import { getUserList } from "../../redux/users/user-selectors";
import { useSelector } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import {useTranslations} from "next-intl"

export default function CreateUserDialog({ open, handleClose }) {
  const t = useTranslations("Users")
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getUserList);

  const isValidName = () => input && !Boolean(users.find((item) => item.name === input));

  return (
    <Dialog open={open}>
      <DialogTitle>{t('submit')}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={t('name')}
          type="text"
          fullWidth
          variant="outlined"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>{t('cancel')}</Button>
        <Button
          onClick={() => {
            if (isValidName()) {
              dispatch(addUser(input));
              handleClose();
            } else {
              NotificationManager.error(t('error_alredyUsed'));
            }
          }}
        >
          {t('add')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
