"use client";

import React, { useImperativeHandle } from "react";

interface BoxProps {
  func?: () => void;
}

export default function Box({ func }: BoxProps) {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: "white",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 15,
        color: "black",
      }}
    >
      이것은 모달입니다.
      <button
        onClick={() => {
          func && func();
        }}
      >
        닫아줘!
      </button>
    </div>
  );
}
