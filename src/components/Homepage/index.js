import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./homepage.css";

function Homepage() {
  return (
    <main className="mainHomepage">
      <h1 className="h1Homepage">
        Welcome to the School of Code Mentoring Platform
      </h1>
      <Button path={"/mentor"} buttonText={"Sign up to be a mentor"} />
      <Button path={"/bootcamper"} buttonText={"Sign up as a bootcamper"} />
      <Button path={"/match"} buttonText={"Find a mentor"} />
      <Button path={"/choices"} buttonText={"View bootcampers"} />
    </main>
  );
}

export default Homepage;
