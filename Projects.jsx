import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: "Project One", desc: "Responsive React application", img: "/assets/project1.jpg" },
  { id: 2, title: "Project Two", desc: "Design-driven UI build", img: "/assets/project2.jpg" },
  { id: 3, title: "Project Three", desc: "Performance-focused implementation", img: "/assets/project3.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio10-projects">
      <div className="container portfolio10-projects__inner">
        <h2 className="portfolio10-projects__title">Selected Projects</h2>
        <div className="portfolio10-projects__grid">
          {projects.map(p => (
            <article className="portfolio10-projects__card" key={p.id}>
              <div className="portfolio10-projects__imgwrap">
                <img src={p.img} alt={p.title} className="portfolio10-projects__img" />
              </div>
              <div className="portfolio10-projects__body">
                <h3 className="portfolio10-projects__cardtitle">{p.title}</h3>
                <div className="portfolio10-projects__carddesc">{p.desc}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
