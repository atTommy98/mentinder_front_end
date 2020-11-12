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
          {mentorData.map((object, index) => {
            {
              /* const array = Object.entries(object);
            array.forEach((item) => {
              if(item[1] === "true" && filter)
            }) */
            }
            return (
              <div className="col-md-4" key={index}>
                <Card object={object} />
              </div>
            );
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
