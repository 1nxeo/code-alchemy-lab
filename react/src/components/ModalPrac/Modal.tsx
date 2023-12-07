"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Portal from "./Portal";
import usePreventScroll from "@/hooks/usePreventScroll";

interface ModalProps {
  children: ReactNode;
  content: JSX.Element;
  isConfirm?: boolean;
}

const Modal = ({ children, content, isConfirm = false }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);

  if (typeof window === "undefined") return <></>;
  const modalHandler = () => {
    setOpen((pre) => !pre);
  };

  const Content = () => {
    usePreventScroll();

    return React.cloneElement(content, { func: modalHandler });
  };

  return (
    <div>
      <div onClick={modalHandler}>{children}</div>
      <Portal isOpen={open}>
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
      </Portal>
    </div>
  );
};

export default Modal;
