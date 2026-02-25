import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { socialLinks } from "../data/content";

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = [
        "about",
        "skills",
        "experience",
        "portfolio",
        "contact",
      ];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: data.about },
    { id: "skills", label: data.skills },
    { id: "experience", label: data.experience },
    { id: "portfolio", label: data.portfolio },
    { id: "contact", label: data.contact },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          fahri<span>uyar</span>.
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-socials">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
          >
            <FaGithub />
          </a>
        </div>

        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
