import React, { useState, useEffect } from "react";
import "./Chris.css";
import useSound from "use-sound";
import mentors from "./mentors-[AudioTrimmer.com] (1).mp3";

function Chris() {
  const [isShrinking, setIsShrinking] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const [mentorsSound] = useSound(mentors);

  useEffect(() => {
    setTimeout(mentorsSound, 1000);
    setTimeout(() => {
      setIsShrinking(true);
    }, 3000);
    setTimeout(() => {
      setIsFixed(true);
    }, 6000);
  }, []);

  return (
    <div>
      <img
        id={isFixed ? "fixed" : ""}
        className={isShrinking ? "second" : "first"}
        src="/chris-hat3.png"
      />
    </div>
  );
}

export default Chris;
