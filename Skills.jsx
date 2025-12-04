import "./Skills.css";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import gitIcon from "../../assets/git.png";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Git", icon: gitIcon },
  ];

  return (
    <section className="portfolio10-skills">
      <h2 className="portfolio10-skills-title">Skills</h2>

      <div className="portfolio10-skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="portfolio10-skill-card">
            <img
              src={skill.icon}
              alt={skill.name}
              className="portfolio10-skill-icon"
            />
            <div className="portfolio10-skill-text">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
