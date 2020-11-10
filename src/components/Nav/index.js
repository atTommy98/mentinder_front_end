import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="navLink" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/mentor"
            className="navLink"
            style={{ textDecoration: "none" }}
          >
            Mentors
          </Link>
        </li>
        <li>
          <Link
            to="/bootcamper"
            className="navLink"
            style={{ textDecoration: "none" }}
          >
            Bootcampers
          </Link>
        </li>
        <li>
          <Link
            to="/match"
            className="navLink"
            style={{ textDecoration: "none" }}
          >
            Find A Mentor
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
