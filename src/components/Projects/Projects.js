import { Grid, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const projects = [
  {
    title: "Electron Desktop Suite",
    desc: "Production-grade multi-window desktop application with IPC communication, real-time data dashboards, and 1,300+ virtualized data entries with 70% performance improvement.",
    tags: ["React", "Electron", "Context API", "Linux"],
    icon: "🖥️",
    links: { live: null, github: "https://github.com/shivam2813" },
  },
  {
    title: "LangChain Chatbot Platform",
    desc: "AI-powered chatbot frontend integrated with Flask and LangChain. Increased employee engagement by 60% and reduced manual query resolution time significantly.",
    tags: ["React", "Flask", "LangChain", "REST API"],
    icon: "🤖",
    links: { live: null, github: "https://github.com/shivam2813" },
  },
  {
    title: "Todo List Web App",
    desc: "Full-stack task management application with JWT authentication and persistent MongoDB storage. Improved task tracking efficiency by 30% for daily users.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    icon: "✅",
    links: {
      live: "https://clever-hare-jeans.cyclic.app/",
      github: "https://github.com/shivam2813",
    },
  },
  {
    title: "Number Plate Recognition",
    desc: "Real-time License Plate Recognition system using computer vision and OCR. Detects and extracts plate numbers from live video streams with high accuracy.",
    tags: ["Python", "OpenCV", "Tesseract OCR"],
    icon: "📷",
    links: {
      live: null,
      github: "https://github.com/shivam2813/number_plate_recognition",
    },
  },
];

const Projects = () => {
  return (
    <Box component="section" className="section" id="projects">
      <div className="section-label">04 — Projects</div>
      <div className="section-title fade-up">Things I've built</div>
      <div className="section-line"></div>

      <Grid container spacing={3}>
        {projects.map((p, i) => (
          <Grid item xs={12} md={6} key={i}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
