import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import Mentor from "../MentorPage";
import Bootcamper from "../BootcamperPage";
import Matching from "../MatchingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mentor">Mentor Page</Link>
            </li>
            <li>
              <Link to="/bootcamper">Bootcamper Page</Link>
            </li>
            <li>
              <Link to="/match">Match</Link>
            </li>
          </ul>
        </nav>

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
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
