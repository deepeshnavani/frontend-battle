"use client";

import React, { useState, useEffect } from "react";
import Header from "../Header";

const RippleCursorPage = () => {
  const [ripples, setRipples] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createRipple = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const newRipple = {
      x,
      y,
      id: Date.now() + Math.random(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("mousemove", createRipple);
    return () => window.removeEventListener("mousemove", createRipple);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg pointer-events-none">
            Ripple Follows Cursor
          </h1>
        </div>

        {/* Ripple circles */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="fixed bg-gray-300 rounded-full pointer-events-none z-50"
            style={{
              left: ripple.x - 15,
              top: ripple.y - 15,
              width: 30,
              height: 30,
              animation: "ripple 0.8s ease-out forwards",
            }}
          />
        ))}

        <style jsx>{`
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 0.8;
            }
            100% {
              transform: scale(15);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RippleCursorPage;
