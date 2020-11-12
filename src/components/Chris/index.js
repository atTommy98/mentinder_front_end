import React, { useState, useEffect } from "react";
import "./Chris.css";

function Chris() {
  const [isShrinking, setIsShrinking] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setIsShrinking(2);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsShrinking(3);
    }, 5000);
  }, []);

  function setClassName() {
    if (isShrinking === 1) {
      return "first";
    } else if (isShrinking === 2) {
      return "second";
    } else return "third";
  }

  return (
    <div>
      <img className={setClassName()} src="/chris-hat3.png" />
    </div>
  );
}

export default Chris;
