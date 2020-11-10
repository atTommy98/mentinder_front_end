import React, { useState } from "react";

export default function Card({ object }) {
  return (
    <div className="card">
      <img className="image" src="anon.png" style={{ width: "100%" }}></img>
      <div className="information-container">
        <h4>
          <b>
            {object.firstname} {object.lastname}
          </b>
        </h4>
        <p>{object.role}</p>
        <p>{object.email}</p>
        <p>{object.company}</p>
        <p>{object.job}</p>
        <p>{object.gender}</p>
        <p>{object.bio}</p>
        <h4>Professional Interests</h4>
      </div>
    </div>
  );
}
