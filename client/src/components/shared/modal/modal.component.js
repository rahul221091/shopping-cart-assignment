import { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalBody, ModalOverlay } from "./modal.styles";

const Modal = (props) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return props.open
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>
          <ModalBody>{props.children}</ModalBody>
        </ModalOverlay>,
        document.getElementById("modal")
      )
    : null;
};

export default Modal;
