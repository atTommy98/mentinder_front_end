import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Mentor from "../MentorPage";
import Bootcamper from "../BootcamperPage";
import Matching from "../MatchingPage";
import ShowTop5 from "../ChoicesPage";
import Nav from "../Nav";

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function App() {
  const [mentorData, setMentorData] = useState([]);
  const [bootcamperData, setBootcamperData] = useState([]);
  const [topFive, setTopFive] = useState({
    firstname: "",
    lastname: "",
    email: "",
    firstChoice: "",
    secondChoice: "",
    thirdChoice: "",
    fourthChoice: "",
    fifthChoice: "",
  });
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
    imgurl: "",
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
    async function postBootcamperData(bootcamper) {
      console.log(bootcamper);
      const res = await fetch(`${url}/mentorsAndBootcampers`, {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(bootcamper),
      });
      const data = await res.json();
      console.log(data);
    }
    if (bootcamper.firstname !== "") {
      postBootcamperData(bootcamper);
    }
  }, [bootcamper]);

  useEffect(() => {
    console.log("mentor useEffect in process");
    async function postMentorData(mentor) {
      console.log(mentor);
      const res = await fetch(`${url}/mentorsAndBootcampers`, {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(mentor),
      });
      const data = await res.json();
      console.log(data);
    }
    if (mentor.firstname !== "") {
      postMentorData(mentor);
    }
  }, [mentor]);

  useEffect(() => {
    async function getAllMentors() {
      const res = await fetch(`${url}/mentorsAndBootcampers/mentors`);
      const object = await res.json();
      const data = object.payload.rows;
      setMentorData(data);
    }
    console.log(mentorData);
    getAllMentors();
  }, []);

  useEffect(() => {
    async function getAllBootcampers() {
      const res = await fetch(`${url}/mentorsAndBootcampers/bootcampers`);
      const object = await res.json();
      const data = object.payload.rows;
      setBootcamperData(data);
    }
    console.log(bootcamperData);
    getAllBootcampers();
  }, []);

  useEffect(() => {
    async function postTopFiveData(formData) {
      console.log(formData);
      const res = await fetch(`${url}/mentorsAndBootcampers`, {
        method: "PATCH",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    }
    if (topFive.firstname !== "") {
      postTopFiveData(topFive);
    }
  }, [topFive]);

  return (
    <Router>
      <div className="App">
        <header>
          <img id="soc-logo" src="/socLogo.png"></img>
          <Nav />
        </header>

        <Switch>
          <Route path="/choices">
            <ShowTop5 bootcamperData={bootcamperData} />
          </Route>
          <Route path="/mentor">
            <Mentor setMentor={setMentor} mentor={mentor} />
          </Route>
          <Route path="/match">
            <Matching
              mentorData={mentorData}
              setTopFive={setTopFive}
              topFive={topFive}
            />
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
