import React from "react";

import "./matchingpage.css";

import Card from "../Card";

function Matching({ mentorData }) {
  return (
    <main className="mainMatching">
      <h1 className="h1Matching">Find a mentor...</h1>
      <div>
        <div className="cards">
          {mentorData.map((object, index) => {
            return (
              <div className="col-md-4">
                <Card key={index} object={object} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Matching;
