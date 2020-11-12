import React, { useState, useEffect } from "react";
import "./Chris.css";

function Chris() {
  const [isShrinking, setIsShrinking] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
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
