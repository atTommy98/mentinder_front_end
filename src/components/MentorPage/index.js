import React from "react";
import MentorForm from "../MentorForm";
import "./mentorpage.css";

function Mentor({ mentor, setMentor }) {
  return (
    <main className="mainMentor">
      <h1 className="mentorPageName">Mentors</h1>
      <article className="mentorArticle">
        <h1 className="h1Mentor">Why become a mentor?</h1>
        <p className="blurb-p">
          There are lots of great reasons to become a mentor. It is an
          opportunity to develop key skills such as listening, questioning,
          facilitation, empathising and rapport building. It may give you the
          chance to reflect on your own learning and challenge your ways of
          thinking and old behaviour. It could help you become a better leader
          as demonstrating patience with those in need of guidance and support,
          assisting someone in their learning, and helping people figure out the
          best path forward are all trademarks of a great leader and skills that
          can be honed through mentoring. It is an opportunity to gain new
          persepctive and ideas, strengthen lessons you've already learnt, and a
          chance to give something back to the tech community. You will be
          shaping leaders of tomorrow and quite possibly changing somebody's
          life!
        </p>
        <h1 className="h1Mentor">What does being a mentor involve?</h1>
        <p className="blurb-p">
          During the first few weeks of the course, bootcampers will be assigned
          a mentor and it is their responsibility to reach out to you. Once they
          have done so, the aim should be to orgainse a 30 mintute chat or video
          call with your bootcamper every week. These sessions may be used to
          answer questions bootcampers have about what they are learning on the
          course and to help them with anything they are stuck on, pass on
          industry knowledge and experience you think would be useful to them,
          help them prepare for getting a job after the course by sharing your
          expertise and experience, and generally being a source of support and
          inspiration for them during their time on the course. This is a chance
          to nurture a really positive relationship and one which may continue
          after the bootcamp.
        </p>
      </article>
      <div className="mentor-box-layout">
        <h2 className="h2Mentor">Sign up here...</h2>
        <MentorForm mentor={mentor} setMentor={setMentor} />
      </div>
    </main>
  );
}

export default Mentor;
