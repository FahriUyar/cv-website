import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { socialLinks } from "../data/content";

export default function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: data.home || "Ana Sayfa" },
    { path: "/hakkimda", label: data.about },
    { path: "/yetenekler", label: data.skills },
    { path: "/deneyim", label: data.experience },
    { path: "/projeler", label: data.portfolio },
    { path: "/iletisim", label: data.contact },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo-fahriuyar.png" alt="Fahri Uyar Logo" />
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
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
