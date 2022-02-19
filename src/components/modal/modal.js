import { useState } from "react";
import classes from "./modal.module.css";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const Modal = ({ children }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  return (
    show && (
      <div className={classes.modal}>
        <CloseTwoToneIcon className={classes.close} onClick={handleClose} />
        {children}
      </div>
    )
  );
};

export default Modal;
