import React from "react";
import BootcamperForm from "../BootcamperForm";
import "./bootcamperpage.css";

function Bootcamper() {
  return (
    <main className="mainBootcamper">
      <article className="bootcamperArticle">
        <h1 className="h1Bootcamper">Why would you want a mentor?</h1>
        <p className="blurb-p">
          One of the most important skills to learn is building realtionships
          with people in the industry. We will be assigning everyone a mentor
          during the first few weeks of the course and the aim should be to
          organise a 30 minute chat or video call with them every week. These
          mentoring sessions can be used to ask questions about topics on the
          course and any particular elements you may be struggling with as well
          as to ask about the industry, tech culture, job roles and areas to
          move into after the bootcamp. Your mentor is the first person you'll
          be networking with in the tech industry. This is a chance to nurture a
          really positive relationship - it may be invaluable in the future. You
          never know which door they may be able to open or who they might
          introduce you to!
        </p>
      </article>
      <div className="bootcamper-box-layout">
        <h2 className="h2Bootcamper">Sign up here...</h2>
        <BootcamperForm />
      </div>
    </main>
  );
}

export default Bootcamper;
