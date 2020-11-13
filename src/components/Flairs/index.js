import React from "react";
import "./flairs.css";

function Flair({ expertise }) {
  function nameClass(expertise) {
    if (
      expertise === "foodanddrink" ||
      expertise === "gaming" ||
      expertise === "music" ||
      expertise === "sportandfitness" ||
      expertise === "reading" ||
      expertise === "films"
    ) {
      return "hobbies-flair";
    } else return "professional-flair";
  }
  return <span className={nameClass(expertise)}>{expertise}</span>;
}

export default Flair;
