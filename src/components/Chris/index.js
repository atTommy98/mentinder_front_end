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
      src="https://images.startups.co.uk/wp-content/uploads/2017/01/Co-founders-of-School-of-Code-Chris-Meah-and-Bhish-Patel.jpg"
    />
  );
}

export default Chris;
