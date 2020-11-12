import React, { useState } from "react";
import "./filter.css";

export default function Filter() {
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
    <div className="filter-container">
      <input
        type="checkbox"
        id="frontEnd"
        name="frontEnd"
        onChange={() => {
          setFilter({ ...filter, frontend: !filter.frontend });
          console.log(filter);
        }}
      ></input>
      <label for="frontEnd">Front-End</label>
      <br />
      <input
        type="checkbox"
        id="backEnd"
        name="backEnd"
        value="backEnd"
        onChange={() => {
          setFilter({ ...filter, backend: !filter.backend });
          console.log(filter);
        }}
      ></input>
      <label for="backEnd">Back-End</label>
      <br />
      <input
        type="checkbox"
        id="gameDevelopment"
        name="gameDevelopment"
        value="gameDevelopment"
        onChange={() => {
          setFilter({ ...filter, gamedev: !filter.gamedev });
          console.log(filter);
        }}
      ></input>
      <label for="gameDevelopment">Game Development</label>
      <br />
      <input
        type="checkbox"
        id="ux"
        name="ux"
        value="ux"
        onChange={() => {
          setFilter({ ...filter, ux: !filter.ux });
          console.log(filter);
        }}
      ></input>
      <label for="ux">UX</label>
      <br />
      <input
        type="checkbox"
        id="security"
        name="security"
        value="security"
        onChange={() => {
          setFilter({ ...filter, security: !filter.security });
          console.log(filter);
        }}
      ></input>
      <label for="security">Security</label>
      <br />
      <input
        type="checkbox"
        id="databases"
        name="databases"
        value="databases"
        onChange={() => {
          setFilter({ ...filter, databases: !filter.databases });
          console.log(filter);
        }}
      ></input>
      <label for="databases">Databases</label>
      <br />
      <input
        type="checkbox"
        id="projectManagement"
        name="projectManagement"
        value="projectManagement"
        onChange={() => {
          setFilter({
            ...filter,
            projectmanagement: !filter.projectmanagement,
          });
          console.log(filter);
        }}
      ></input>
      <label for="projectManagement">Project Management</label>
      <br />
      <input
        type="checkbox"
        id="devops"
        name="devops"
        value="devops"
        onChange={() => {
          setFilter({ ...filter, devops: !filter.devops });
          console.log(filter);
        }}
      ></input>
      <label for="devops">Dev-Ops</label>
      <br />
      <input
        type="checkbox"
        id="testing"
        name="testing"
        value="testing"
        onChange={() => {
          setFilter({ ...filter, testing: !filter.testing });
          console.log(filter);
        }}
      ></input>
      <label for="testing">Testing</label>
      <br />
      <input
        type="checkbox"
        id="education"
        name="education"
        value="education"
        onChange={() => {
          setFilter({ ...filter, education: !filter.education });
          console.log(filter);
        }}
      ></input>
      <label for="education">Education</label>
      <br />
      <input
        type="checkbox"
        id="finance"
        name="finance"
        value="finance"
        onChange={() => {
          setFilter({ ...filter, finance: !filter.finance });
          console.log(filter);
        }}
      ></input>
      <label for="finance">Finance</label>
      <br />
      <input
        type="checkbox"
        id="infrastructure"
        name="infrastructure"
        value="infrastructure"
        onChange={() => {
          setFilter({ ...filter, infrastructure: !filter.infrastructure });
          console.log(filter);
        }}
      ></input>
      <label for="infrastructure">Infrastructure</label>
      <br />
      <input
        type="checkbox"
        id="foodAndDrink"
        name="foodAndDrink"
        value="foodAndDrink"
        onChange={() => {
          setFilter({ ...filter, foodanddrink: !filter.foodanddrink });
          console.log(filter);
        }}
      ></input>
      <label for="foodAndDrink">Food and Drink</label>
      <br />
      <input
        type="checkbox"
        id="gaming"
        name="gaming"
        value="gaming"
        onChange={() => {
          setFilter({ ...filter, gaming: !filter.gaming });
          console.log(filter);
        }}
      ></input>
      <label for="gaming">Gaming</label>
      <br />
      <input
        type="checkbox"
        id="sportAndFitness"
        name="sportAndFitness"
        value="sportAndFitness"
        onChange={() => {
          setFilter({ ...filter, sportandfitness: !filter.sportandfitness });
          console.log(filter);
        }}
      ></input>
      <label for="sportAndFitness">Sport and Fitness</label>
      <br />
      <input
        type="checkbox"
        id="music"
        name="music"
        value="music"
        onChange={() => {
          setFilter({ ...filter, music: !filter.music });
          console.log(filter);
        }}
      ></input>
      <label for="music">Music</label>
      <br />
      <input
        type="checkbox"
        id="reading"
        name="reading"
        value="reading"
        onChange={() => {
          setFilter({ ...filter, reading: !filter.reading });
          console.log(filter);
        }}
      ></input>
      <label for="reading">Reading</label>
      <br />
      <input
        type="checkbox"
        id="films"
        name="films"
        value="films"
        onChange={() => {
          setFilter({ ...filter, films: !filter.films });
          console.log(filter);
        }}
      ></input>
      <label for="films">Films</label>
    </div>
  );
}
