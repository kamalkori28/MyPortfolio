// components/LoadingScreen.jsx
import React, { useEffect } from "react";
import ReactLoading from "react-loading";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete(); // Call this to let App.jsx know loading is done
    }, 2000); // 2 seconds fake loading time

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <ReactLoading
        type={"bars"}
        color={"#22d3ee"} // Tailwind's cyan-400 HEX: #22d3ee
        height={100}
        width={100}
      />
    </div>
  );
};
