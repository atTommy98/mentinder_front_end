import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Button path={"/mentor"} buttonText={"Sign up to be a mentor"} />
      <Button path={"/bootcamper"} buttonText={"Sign up as a bootcamper"} />
      <Button path={"/match"} buttonText={"Find your match!"} />
    </div>
  );
}

export default Homepage;
