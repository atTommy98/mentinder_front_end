import React, { useState, useEffect } from "react";
import "./Chris.css";

function Chris() {
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShrinking(true);
    }, 3000);
  });

  return (
    <img
      className={isShrinking ? "shrink" : "notShrinking"}
      src="/chris-hat.png"
    />
  );
}

export default Chris;
