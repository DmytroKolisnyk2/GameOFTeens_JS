import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector("#root-modal")) : null;
};

const Modal = (props) => {
  return (
    <Portal>
      <div className={styles.Overlay}>
        <div className={styles.Modal}>{props.children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
