"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../Header";

const imagePairs = [
  {
    front: "/jethalal.png",
    back: "/babita.png",
  },
  {
    front: "/champak.png",
    back: "/madhvi.png",
  },
];

export default function CarouselSwitch() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-screen h-screen">
        {imagePairs.map((pair, index) => (
          <FlipImage key={index} front={pair.front} back={pair.back} />
        ))}
      </div>
    </div>
  );
}

function FlipImage({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-screen [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "" : "[transform:rotateY(180deg)]"
        }`}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Image src={front} alt="front" fill className="object-cover" />
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image src={back} alt="back" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
