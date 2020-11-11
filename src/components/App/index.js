import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import Mentor from "../MentorPage";
import Bootcamper from "../BootcamperPage";
import Matching from "../MatchingPage";
import Nav from "../Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src="/socLogo.png"></img>
          <Nav />
        </header>

        <Switch>
          <Route path="/mentor">
            <Mentor />
          </Route>
          <Route path="/match">
            <Matching />
          </Route>
          <Route path="/bootcamper">
            <Bootcamper />
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
