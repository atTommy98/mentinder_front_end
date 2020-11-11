import React from "react";

import "./matchingpage.css";

import Card from "../Card";

function Matching() {
  const people = [
    {
      firstname: "Jack",
      lastname: "Black",
      role: "bootcamper",
      email: "jackblack@gmail.com",
      company: "Disney",
      job: "Boss man",
      gender: "Male",
      bio:
        "Hi there welcome to the school of code. I want to be a mentor because I am the best and people will want to be the best like me",
      frontend: null,
      backend: true,
      gamedev: null,
      ux: null,
      security: null,
      databases: null,
      projectmanagement: null,
      devops: true,
      testing: null,
      education: null,
      finance: null,
      infrastructure: true,
      foodanddrink: null,
      gaming: null,
      sportandfitness: true,
      music: null,
      reading: true,
      films: null,
    },{
      firstname: "Jack",
      lastname: "Black",
      role: "bootcamper",
      email: "jackblack@gmail.com",
      company: "Disney",
      job: "Boss man",
      gender: "Male",
      bio:
        "Hi there welcome to the school of code. I want to be a mentor because I am the best and people will want to be the best like me",
      frontend: null,
      backend: true,
      gamedev: null,
      ux: null,
      security: null,
      databases: null,
      projectmanagement: null,
      devops: true,
      testing: null,
      education: null,
      finance: null,
      infrastructure: true,
      foodanddrink: null,
      gaming: null,
      sportandfitness: true,
      music: null,
      reading: true,
      films: null,
    },{
      firstname: "Jack",
      lastname: "Black",
      role: "bootcamper",
      email: "jackblack@gmail.com",
      company: "Disney",
      job: "Boss man",
      gender: "Male",
      bio:
        "Hi there welcome to the school of code. I want to be a mentor because I am the best and people will want to be the best like me",
      frontend: null,
      backend: true,
      gamedev: null,
      ux: null,
      security: null,
      databases: null,
      projectmanagement: null,
      devops: true,
      testing: null,
      education: null,
      finance: null,
      infrastructure: true,
      foodanddrink: null,
      gaming: null,
      sportandfitness: true,
      music: null,
      reading: true,
      films: null,
    },{
      firstname: "Jack",
      lastname: "Black",
      role: "bootcamper",
      email: "jackblack@gmail.com",
      company: "Disney",
      job: "Boss man",
      gender: "Male",
      bio:
        "Hi there welcome to the school of code. I want to be a mentor because I am the best and people will want to be the best like me",
      frontend: null,
      backend: true,
      gamedev: null,
      ux: null,
      security: null,
      databases: null,
      projectmanagement: null,
      devops: true,
      testing: null,
      education: null,
      finance: null,
      infrastructure: true,
      foodanddrink: null,
      gaming: null,
      sportandfitness: true,
      music: null,
      reading: true,
      films: null,
    },
  ];

  return (
    <main className="mainMatching">
      <h1 className="h1Matching">Find a mentor...</h1>
      <div>
        <div className="cards">
          {people.map((object, index) => {
            return (
              <div classname="col-md-4">
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
