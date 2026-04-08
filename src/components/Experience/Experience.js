import { Box } from "@mui/material";
import "./experience.css";

const experience = [
  {
    company: "EndureAir Systems",
    role: "Software Developer I",
    period: "Feb 2024 – Present",
    tech: ["React", "Electron", "JavaScript", "Context API", "Linux"],
    bullets: [
      "Built production-grade desktop apps using React + Electron with multi-window architecture",
      "Virtualized 1,300+ data entries, boosting UI performance by ~70% and eliminating crashes",
      "Managed IPC communication, window lifecycle, and routing across complex Electron builds",
      "Integrated real-time APIs into live dashboards used in UAV ground control systems",
    ],
  },
  {
    company: "MattsenKumar LLC",
    role: "Software Developer",
    period: "Sept 2023 – Feb 2024",
    tech: ["React", "Flask", "REST APIs", "LangChain"],
    bullets: [
      "Built LangChain chatbot frontend that increased employee engagement by 60%",
      "Led frontend of in-house auth system, reducing mobile dependency and lifting productivity 25%",
      "Developed real-time data visualization dashboards for client-facing applications",
    ],
  },
  {
    company: "MattsenKumar LLC",
    role: "Software Developer Intern",
    period: "Feb 2023 – Sept 2023",
    tech: ["React", "Python", "Flask"],
    bullets: [
      "Built Attendance Management System with focus on usability and performance",
      "Reduced reporting errors by 20% through optimized frontend data flow",
      "Collaborated on UI redesigns to improve overall user experience",
    ],
  },
];

const Experience = () => {
  return (
    <Box component="section" id="experience" className="section">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title fade-up">Where I've worked</h2>
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
