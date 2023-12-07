"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Portal from "./Portal";

interface ModalProps {
  children: ReactNode;
  //   content: JSX.Element;
  content: JSX.Element;
  isConfirm?: boolean;
}

const Modal = ({ children, content, isConfirm = false }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {}, []);

  const modalHandler = () => {
    setOpen((pre) => !pre);
  };

  const Content = () => {
    return React.cloneElement(content, { func: modalHandler });
  };

  return (
    <div>
      <div onClick={modalHandler}>{children}</div>
      <Portal isOpen={open}>
        <div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
            onClick={() => {
              !isConfirm && modalHandler();
            }}
          />
          <Content />
        </div>
      </Portal>
    </div>
  );
};

export default Modal;
