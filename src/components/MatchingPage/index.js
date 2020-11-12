import React, { useState } from "react";

import "./matchingpage.css";
import TopFiveForm from "../TopFiveForm";
import Card from "../Card";
import Filter from "../Filter";

function Matching({ mentorData, setTopFive, topFive }) {
  const [filter, setFilter] = useState({
    frontend: false,
    backend: false,
    gamedev: false,
    ux: false,
    security: false,
    databases: false,
    projectmanagement: false,
    devops: false,
    testing: false,
    education: false,
    finance: false,
    infrastructure: false,
    foodanddrink: false,
    gaming: false,
    sportandfitness: false,
    music: false,
    reading: false,
    films: false,
  });
  return (
    <main className="mainMatching">
      <h1 className="matchingPageName">Find a mentor...</h1>
      <div>
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="cards">
          {mentorData.filter((mentorObject) => {
            const mentorArray = Object.entries(mentorObject);
            const filterArray = Object.entries(filter);
            console.log(mentorArray);
            console.log(filterArray);
            if (
              filterArray.every((item) => {
                return item[1] === false;
              }) === true
            ) {
              mentorData.map((object, index) => {
                console.log("items should be rendering");
                let render = (
                  <div className="col-md-4" key={index}>
                    <Card object={object} />
                  </div>
                );
                return render;
              });
            }
            return;

            // turn mentorObject into an array using Object.entries
            // if all filter values are false, return true
            // if any of filter keys are true, check to see if any corresponding key is true in mentorObject
            //
          })}
        </div>
        <div>
          <TopFiveForm
            setTopFive={setTopFive}
            topFive={topFive}
            mentorData={mentorData}
          />
        </div>
      </div>
    </main>
  );
}

export default Matching;
