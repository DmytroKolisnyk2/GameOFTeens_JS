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

export default function CreateUserDialog({ open, handleClose }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getUserList);

  const isValidName = () => input && !Boolean(users.find((item) => item.name === input));

  return (
    <Dialog open={open}>
      <DialogTitle>Submit name of profile</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          type="text"
          fullWidth
          variant="outlined"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          onClick={() => {
            if (isValidName()) {
              dispatch(addUser(input));
              handleClose();
            } else {
              NotificationManager.error("Name already used");
            }
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
