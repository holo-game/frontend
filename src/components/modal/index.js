import { useCallback, useEffect, useRef } from "react";
import cn from "classnames";

export default function Modal({ isOpen, onRequestClose, title, children }) {
  const modalRef = useRef();

  const handleClickOutside = (elem) => {
    if (elem.target.contains(modalRef.current)) {
      onRequestClose();
    }
  };

  const keyDownWrapper = useCallback((e) => {
    if (e.key === "Escape") {
      onRequestClose();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", keyDownWrapper);
    return () => {
      window.removeEventListener("keydown", keyDownWrapper);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={handleClickOutside}
      className={cn("modal", isOpen && "active")}
    >
      {title && <div className="modal-header">{title}</div>}
      <div className="modal-content">{children}</div>
    </div>
  );
}
