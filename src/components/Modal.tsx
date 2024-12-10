import { ReactNode } from "react";
import ReactDom from "react-dom";

type IModalProps = {
  children: ReactNode;
  handleCloseModal: () => void;
};

function Modal({ children, handleCloseModal }: IModalProps) {
  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay" />
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")!
  );
}

export default Modal;
