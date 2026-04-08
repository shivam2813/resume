import { Box } from "@mui/material";
import { useState } from "react";
import "./contact.css";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    text: "shivamarora1314@gmail.com",
    href: "mailto:shivamarora1314@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    text: "linkedin.com/in/shivamarora1314",
    href: "https://linkedin.com/in/shivamarora1314",
  },
  {
    icon: "🐙",
    label: "GitHub",
    text: "github.com/shivam2813",
    href: "https://github.com/shivam2813",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  // Cleaner update handler
  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status !== "idle") return;

    setStatus("sending");

    // 🔴 Replace this with EmailJS / API call later
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <Box component="section" id="contact" className="section">
      <div className="contact-inner">
        <div className="section-label">05 — Contact</div>
        <h2 className="section-title fade-up">Get In Touch</h2>
        <div className="section-line fade-up"></div>

        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <p className="intro fade-up">
              Open to frontend roles, contract work, or interesting projects. If
              you have something in mind, let's connect.
            </p>

            <div className="links">
              {contactLinks.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contactLink fade-up"
                >
                  <div className="linkIcon">{c.icon}</div>
                  <div>
                    <span className="linkLabel">{c.label}</span>
                    <span className="linkText">{c.text}</span>
                  </div>
                  <span className="arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <form className="form fade-up" onSubmit={handleSubmit}>
            <div className="row">
              <div className="group">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Your name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="input"
                  placeholder="your@email.com"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="input"
                  type="text"
                  placeholder="What's this about?"
                  required
                  autoComplete="off"
                  value={form.subject}
                  onChange={update}
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                required
                autoComplete="off"
                placeholder="Write your message..."
                value={form.message}
                onChange={update}
              />
            </div>

            <button
              type="submit"
              className={`submit ${
                status === "sent" ? "sent" : ""
              } ${status === "sending" ? "sending" : ""}`}
              disabled={status !== "idle"}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && (
                <span className="spinner">Sending…</span>
              )}
              {status === "sent" && "✓ Sent"}
            </button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
