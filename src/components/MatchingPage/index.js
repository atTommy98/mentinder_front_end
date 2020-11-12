import React from "react";

import "./matchingpage.css";
import TopFiveForm from "../TopFiveForm";
import Card from "../Card";

function Matching({ mentorData, setTopFive, topFive }) {
  console.log(mentorData);
  return (
    <main className="mainMatching">
      <h1 className="matchingPageName">Find a mentor...</h1>
      <div>
        <div className="cards">
          {mentorData.map((object, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Card object={object} />
              </div>
            );
          })}
        </div>
        <TopFiveForm
          setTopFive={setTopFive}
          topFive={topFive}
          mentorData={mentorData}
        />
      </div>
    </main>
  );
}

export default Matching;
