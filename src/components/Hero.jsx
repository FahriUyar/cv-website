import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function Hero({ data, stats }) {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const heroRef = useRef(null);
  const hasAnimated = useRef(false);

  // Typing animation
  useEffect(() => {
    const currentRole = data.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % data.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, data.roles]);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500;
            const stepTime = duration / end;

            const counter = setInterval(() => {
              start++;
              setCounters((prev) => {
                const next = [...prev];
                next[i] = start;
                return next;
              });
              if (start >= end) clearInterval(counter);
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [stats]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="about" ref={heroRef}>
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting">{data.greeting}</div>
          <h1>
            {data.title}
            <br />
            <span className="highlight">{data.titleHighlight}</span>
          </h1>
          <div className="hero-roles">
            {roleText}
            <span className="cursor"></span>
          </div>
          <p className="hero-description">{data.description}</p>
          <div className="hero-buttons">
            <button
              className="btn-primary-glow"
              onClick={() => scrollTo("portfolio")}
            >
              {data.cta1} <FaArrowRight />
            </button>
            <a
              className="btn-outline-glow"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              {data.cta2} <FaEnvelope />
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div className="hero-stat" key={i}>
                <div className="hero-stat-value">
                  {counters[i]}
                  {stat.suffix}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img src="/images/fahri-uyar.jpeg" alt="Fahri Uyar" />
          </div>
          <div className="hero-floating-badge">💻 React & ASP.NET</div>
          <div className="hero-floating-badge">🚀 Full Stack Dev</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
