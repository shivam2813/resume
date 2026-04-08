import "./hero.css";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const StatItem = ({ num, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start = 0;
          const step = num / (1500 / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [num]);

  return (
    <div ref={ref} className="stat-item">
      <h3 className="stat-num">
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const Hero = () => {
  const words = ["Frontend Developer", "React Engineer", "Electron Specialist"];

  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 90);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 50);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    setTypedText(currentWord.slice(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <Box component="section" id="hero" className="section">
      <div className="hero-bgText" aria-hidden="true">
        SA
      </div>

      <div className="fade-up" style={{ animationDelay: "0s" }}>
        <div className="hero-badge">Open to opportunities</div>
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
        <h1 className="hero-name">
          Shivam <br />
          <span className="accent">Arora</span>
        </h1>
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
        <p className="hero-role">
          <span className="terminal-prefix">~/</span>
          {typedText}
          <span className="cursor-blink">|</span>
        </p>
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.3s" }}>
        <p className="hero-desc">
          I build <strong>scalable, high-performance</strong> frontend
          applications. Specialized in React and Electron — turning complex
          systems into <strong>smooth, fast interfaces</strong> that create
          measurable impact.
        </p>
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.4s" }}>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </div>
      </div>

      <div
        className="hero-stats fade-up visible "
        style={{ transitionDelay: "0.5s" }}
      >
        <StatItem num={3} suffix="+" label="Years Experience" />
        <StatItem num={70} suffix="%" label="Performance Gain" />
        <StatItem num={60} suffix="%" label="Engagement Boost" />
        <StatItem num={4} suffix="+" label="Production Apps" />
      </div>
    </Box>
  );
};

export default Hero;
