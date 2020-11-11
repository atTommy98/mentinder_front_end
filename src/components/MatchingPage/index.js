import React from "react";

import "./matchingpage.css";
import TopFiveForm from "../TopFiveForm"
import Card from "../Card";

function Matching({ mentorData, setTopFive, topFive }) {
  return (
    <main className="mainMatching">
      <h1 className="h1Matching">Find a mentor...</h1>
      <div>
        <div className="cards">
          {mentorData.map((object, index) => {
            return (
              <div classname="col-md-4">
                <Card key={index} object={object} />
              </div>
            );
          })}
        </div>
        <TopFiveForm setTopFive={setTopFive} topFive={topFive}/>
      </div>
    </main>
  );
}

export default Matching;
