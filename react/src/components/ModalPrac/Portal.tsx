"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  isOpen: boolean;
  setIsOpen?: () => void;
  children: ReactNode;
}

export default function Portal({ isOpen, children, setIsOpen }: PortalProps) {
  const [portal, setPortal] = useState<HTMLElement | null>();
  useEffect(() => {
    if (document) {
      const portalElem = document.getElementById("portal");

      setPortal(portalElem);
    }
  }, []);
  if (typeof window === "undefined") return <></>;

  if (!isOpen) {
    return null;
  }
  return createPortal(children, portal as HTMLElement);
}
