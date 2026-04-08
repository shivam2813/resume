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
    href: "https://linkedin.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    text: "github.com/shivam2813",
    href: "https://github.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <Box component="section" id="contact" className="section">
      <div className="inner">
        <div className="section-label">05 — Contact</div>
        <h2 className="section-title fade-up">Get In Touch</h2>
        <div className="section-line fade-up"></div>

        <div className="grid">
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
                  target="_blank"
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
                <label className="label">Name</label>
                <input
                  className="input"
                  placeholder="Your name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                />
              </div>

              <div className="group">
                <label className="label">Email</label>
                <input
                  className="input"
                  placeholder="your@email.com"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
            </div>

            <div className="group">
              <label className="label">Message</label>
              <textarea
                className="textarea"
                required
                value={form.message}
                onChange={update("message")}
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
