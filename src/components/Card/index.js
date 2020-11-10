import React, { useState } from "react";

export default function Card({ object }) {
  return (
    <div>
      <h4>
        {object.firstname} {object.lastname}
      </h4>
      <h5>{object.role}</h5>
      <h5>{object.email}</h5>
      <h5>{object.company}</h5>
      <h5>{object.job}</h5>
      <h5>{object.gender}</h5>
      <h5>{object.bio}</h5>

      <h4>Professional Interests</h4>

      <h5></h5>
    </div>
  );
}
