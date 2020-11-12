import React from "react";
import "./flairs.css";

function Flair({ expertise }) {
  function nameClass(expertise) {
    if (
      expertise === "foodanddrink" ||
      expertise === "sportandfitness" ||
      expertise === "gaming" ||
      expertise === "music" ||
      expertise === "reading" ||
      expertise === "films"
    ) {
      return "hobbies-flair";
    } else return "professional-flair";
  }
  return <span className={nameClass(expertise)}>{expertise}</span>;
}

export default Flair;
