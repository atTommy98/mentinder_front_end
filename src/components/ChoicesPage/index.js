import React from "react";

import "./choicespage.css";

import ChoicesCard from "../ChoicesCard";

function ShowTop5({ bootcamperData }) {
  console.log(bootcamperData);
  return (
    <main className="mainChoices">
      <h1 className="choicesPageName">View Bootcamper Choices</h1>
      <div>
        <div className="choices-cards">
          {bootcamperData.map((object, index) => {
            return (
              <div className="col-md-4" key={index}>
                <ChoicesCard object={object} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ShowTop5;
