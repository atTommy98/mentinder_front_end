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

  const filterArray = Object.entries(filter)
    .filter((item) => {
      return item[1];
    })
    .map((item) => item[0]);

  function filterObject(mentorObject) {
    if (filterArray.length === 0) {
      return true;
    }
    return filterArray.every((key) => {
      return mentorObject[key] === "true"
    })
  }

  return (
    <main className="mainMatching">
      <h1 className="matchingPageName">Find a mentor...</h1>
      <div>
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="cards">
          {mentorData.filter(filterObject).map((object, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Card object={object} />
              </div>
            );
          })}
          )
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
