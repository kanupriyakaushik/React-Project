import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="portfolio10-about">
      <div className="container portfolio10-about__inner">
        <h2 className="portfolio10-about__title">About Me</h2>
        <div className="portfolio10-about__content">
          <div className="portfolio10-about__text">
            <div className="portfolio10-about__lead">I am a frontend developer focusing on building accessible and performant React applications.</div>
            <div className="portfolio10-about__details">
              I enjoy turning designs into functional UI. My main skills include React, JavaScript (ES6+), HTML5, CSS3, and Git.
            </div>
          </div>
          <div className="portfolio10-about__photo">
            <img src="/assets/profile-sample.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
