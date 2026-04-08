import { Box } from "@mui/material";
import "./experience.css";

const experience = [
  {
    company: "EndureAir Systems",
    role: "Software Developer I",
    period: "Feb 2024 – Present",
    tech: ["React", "Electron", "JavaScript", "Context API", "Linux"],
    bullets: [
      "Worked on desktop applications using React + Electron with multi-window setups",
      "Handled large datasets (~1,300+ entries) and improved UI performance significantly",
      "Managed IPC communication and window lifecycle in Electron apps",
      "Built real-time dashboards for UAV ground control systems",
    ],
  },
  {
    company: "MattsenKumar LLC",
    role: "Software Developer",
    period: "Sept 2023 – Feb 2024",
    tech: ["React", "Flask", "REST APIs"],
    bullets: [
      "Built chatbot UI using LangChain integration",
      "Worked on internal authentication system frontend",
      "Developed dashboards for client-facing tools",
    ],
  },
  {
    company: "MattsenKumar LLC",
    role: "Software Developer Intern",
    period: "Feb 2023 – Sept 2023",
    tech: ["React", "Python", "Flask"],
    bullets: [
      "Built attendance management features",
      "Improved frontend data handling and reduced errors",
      "Contributed to UI improvements across modules",
    ],
  },
];

const Experience = () => {
  return (
    <Box component="section" id="experience" className="section">
      <div className="section-label">03 — Experience</div>
      <div className="section-title fade-up">The person behind the code</div>
      <div className="section-line"></div>

      <div className="experience-list">
        {experience.map((job, i) => (
          <div key={i} className="experience-item fade-up">
            {/* LEFT SIDE */}
            <div className="experience-meta">
              <div className="experience-company">{job.company}</div>

              <div className="experience-period">{job.period}</div>

              <div className="experience-index">0{i + 1}</div>
            </div>

            {/* RIGHT SIDE */}
            <div className="experience-body">
              <div className="experience-role">{job.role}</div>

              <div className="experience-tech">
                {job.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="experience-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Experience;
