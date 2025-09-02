// components/LoadingScreen.jsx
import ReactLoading from "react-loading";

// components/LoadingScreen.jsx
import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Welcome to My Portfolio",
    "Loading Creativity & Code...",
    "Almost There..."
  ];




  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 15;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-black text-white over overflow-hidden">
      {/* Glowing Circular Loader */}
      <div className="relative w-28 h-28 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-t-[#22d3ee] border-b-transparent border-l-transparent border-r-transparent animate-spin"></div>
        <div className="absolute inset-4 rounded-full bg-[#22d3ee] blur-2xl opacity-40"></div>
        <div className="absolute inset-6 rounded-full bg-black flex items-center justify-center text-[#22d3ee] text-xl font-bold">
          {progress}%
        </div>
      </div>

      {/* Animated Text */}
      <h2 className="text-2xl font-bold mb-2 transition-all duration-500">
        {messages[messageIndex]}
      </h2>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-white bg-opacity-20 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-[#22d3ee] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};


