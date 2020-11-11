import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import Mentor from "../MentorPage";
import Bootcamper from "../BootcamperPage";
import Matching from "../MatchingPage";
import Nav from "../Nav";
// import { response } from "../../../../back-end-project-week-pat-the-hair-gang/app";

function App() {
  const [bootcamper, setBootcamper] = useState({
    firstname: "",
    lastname: "",
    role: "bootcamper",
    email: "",
    company: "",
    job: "",
    gender: "",
    bio: "",
    frontend: null,
    backend: null,
    gamedev: null,
    ux: null,
    security: null,
    databases: null,
    projectmanagement: null,
    devops: null,
    testing: null,
    education: null,
    finance: null,
    infrastructure: null,
    foodanddrink: null,
    gaming: null,
    sportandfitness: null,
    music: null,
    reading: null,
    films: null,
  });
  const [mentor, setMentor] = useState({
    firstname: "",
    lastname: "",
    role: "mentor",
    email: "",
    company: "",
    job: "",
    gender: "",
    bio: "",
    frontend: null,
    backend: null,
    gamedev: null,
    ux: null,
    security: null,
    databases: null,
    projectmanagement: null,
    devops: null,
    testing: null,
    education: null,
    finance: null,
    infrastructure: null,
    foodanddrink: null,
    gaming: null,
    sportandfitness: null,
    music: null,
    reading: null,
    films: null,
  });

  useEffect(() => {
    console.log("bootcamper useEffect in process");
    async function postBootcamperData({ bootcamper }) {
      const res = await fetch("http://localhost:5000/mentorsAndBootcampers", {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify({ bootcamper }),
      });
      const data = await res.json();
      console.log(data);
    }
    postBootcamperData(bootcamper);
  }, [bootcamper]);

  useEffect(() => {
    console.log("mentor useEffect in process");
    async function postMentorData(mentor) {
      const res = await fetch("http://localhost:5000/mentorsAndBootcampers", {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(mentor),
      });
      const data = await res.json();
      console.log(data);
    }
    postMentorData(mentor);
  }, [mentor]);

  return (
    <Router>
      <div className="App">
        <header>
          <img src="/socLogo.png"></img>
          <Nav />
        </header>

        <Switch>
          <Route path="/mentor">
            <Mentor setMentor={setMentor} mentor={mentor} />
          </Route>
          <Route path="/match">
            <Matching />
          </Route>
          <Route path="/bootcamper">
            <Bootcamper setBootcamper={setBootcamper} bootcamper={bootcamper} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
