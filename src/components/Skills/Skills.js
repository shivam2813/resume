import { Box } from "@mui/material";
import "./skills.css";

const Skills = () => {
  const skills = [
    {
      icon: "⚛️",
      title: "Frontend Engineering",
      tags: [
        "React",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Material UI",
        "Hooks",
        "Context API",
        "Performance Optimization",
        "Component Architecture",
      ],
    },
    {
      icon: "🔧",
      title: "Backend & APIs",
      tags: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
        "MongoDB",
        "Flask",
        "LangChain",
        "Electron",
      ],
    },
    {
      icon: "🖥️",
      title: "Systems & Tools",
      tags: [
        "Linux",
        "SSH",
        "Git",
        "Process Management",
        "IPC",
        "Desktop Apps",
        "Virtualization",
        "Performance Tuning",
      ],
    },
  ];
  return (
    <Box component="section" className="section" id="skills">
      <div className="innner">
        <p className="section-label fade-up">02 — Skills</p>
        <h2 className="section-title fade-up">What I work with</h2>
        <div className="section-line"></div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-icon">{s.icon}</div>

              <div className="skill-card-title">{s.title}</div>

              <div className="skill-tags">
                {s.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Skills;
