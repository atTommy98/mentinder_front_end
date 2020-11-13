import React from "react";
import "./filter.css";

export default function Filter({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <h2 className="filters-heading">Filters</h2>
      <h3 className="filters-subheading">Professional interests:</h3>
      <div className="filter-option">
        <input
          type="checkbox"
          id="frontEnd"
          name="frontEnd"
          onChange={() => {
            setFilter({ ...filter, frontend: !filter.frontend });
            console.log(filter);
          }}
        ></input>
        <label for="frontEnd" className="filter-text">
          Front-End
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="backEnd" className="filter-text">
          Back-End
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="gameDevelopment" className="filter-text">
          Game Development
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="ux" className="filter-text">
          UX
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="security" className="filter-text">
          Security
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="databases" className="filter-text">
          Databases
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="projectManagement" className="filter-text">
          Project Management
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="devops" className="filter-text">
          Dev-Ops
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="testing" className="filter-text">
          Testing
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="education" className="filter-text">
          Education
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="finance" className="filter-text">
          Finance
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="infrastructure" className="filter-text">
          Infrastructure
        </label>
      </div>

      <h3 className="filters-subheading">Other interests:</h3>
      <div className="filter-option">
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
        <label for="foodAndDrink" className="filter-text">
          Food and Drink
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="gaming" className="filter-text">
          Gaming
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="sportAndFitness" className="filter-text">
          Sport and Fitness
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="music" className="filter-text">
          Music
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="reading" className="filter-text">
          Reading
        </label>
      </div>
      <br />
      <div className="filter-option">
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
        <label for="films" className="filter-text">
          Films
        </label>
      </div>
    </div>
  );
}
