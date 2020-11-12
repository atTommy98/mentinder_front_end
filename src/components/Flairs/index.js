import React from "react";
import "./flairs.css";

function Flair({ expertise }) {
  return <span className="flair">{expertise}</span>;
}

export default Flair;
