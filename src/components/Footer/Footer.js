import "./footer.css";

const personalInfo = {
  name: "Shivam Arora",
  initials: "SA",
  role: "Frontend Developer",
  email: "shivamarora1314@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivamarora1314/",
  github: "https://github.com/shivam2813",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-brand">
          <span className="footer-logo">
            {personalInfo.initials}
            <span className="footer-dot">.</span>
          </span>

          <p className="footer-copy">
            © {year} <strong>Shivam Arora</strong>
          </p>
        </div>

        {/* Right */}
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
