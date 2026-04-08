import { Box } from "@mui/material";
import "./about.css";

const About = () => {
  const aboutContent = [
    `I'm a Frontend Developer based in India with a focus on building performant, production-ready applications. I work primarily with React and Electron, crafting desktop and web experiences that handle real-world complexity without breaking a sweat.`,

    `At EndureAir Systems, I engineer ground control software for UAV systems — interfaces where performance and reliability aren't optional. I've optimized rendering pipelines to handle 1,300+ live data entries with zero crashes and 70% faster load times.`,

    `I care deeply about the craft — clean component architecture, smart state management, and UIs that feel snappy. When I'm not building, I'm obsessing over DX, performance metrics, and clean code.`,
  ];

  const aboutChips = [
    "React",
    "Electron",
    "JavaScript",
    "Python",
    "Node.js",
    "Linux",
    "UAV Software",
    "Performance",
  ];

  return (
    <Box component="section" id="about" className="about-section">
      <div className="section-label">01 — About</div>
      <div className="section-title fade-up">The person behind the code</div>
      <div className="section-line"></div>
      <div className="about-grid">
        <div className="about-img-wrap fade-up">
          <div className="about-img-placeholder">SA</div>
        </div>
        <div className="about-text">
          {aboutContent.map((text, i) => (
            <p key={i} className="fade-up">
              {text}
            </p>
          ))}
          <div className="about-chips fade-up ">
            {aboutChips.map((c) => (
              <span key={c} className="about-chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
