import React from "react";
import { NavLink as Link } from "react-router-dom";
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
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
          >
            Mentors
          </Link>
        </li>
        <li>
          <Link
            to="/bootcamper"
            className="navLink"
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
          >
            Bootcampers
          </Link>
        </li>
        <li>
          <Link
            to="/match"
            className="navLink"
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
          >
            Find A Mentor
          </Link>
        </li>
        <li>
          <Link
            to="/choices"
            className="navLink"
            activeClassName="activeLink"
            style={{ textDecoration: "none" }}
          >
            Bootcamper Choices
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
