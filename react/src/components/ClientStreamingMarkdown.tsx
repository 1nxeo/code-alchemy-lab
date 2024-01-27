import React, { useEffect, useState } from "react";

const StreamingResponseDisplay = ({ response }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      const nextTwoChars = response.substr(currentIndex, 2);
      setDisplayedText((prevText) => prevText + nextTwoChars);
      currentIndex += 2;

      if (currentIndex >= response.length) {
        clearInterval(intervalId);
      }
    }, 100); // 각 문자열 간격을 조절할 수 있는 시간 (밀리초)

    return () => {
      clearInterval(intervalId);
    };
  }, [response]);

  return (
    <div>
      <p>{displayedText}</p>
    </div>
  );
};

export default StreamingResponseDisplay;
