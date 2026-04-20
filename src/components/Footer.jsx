import { Link } from "react-router-dom";
import { FaChevronUp, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../data/content";

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <img src="/images/logo-fahriuyar.png" alt="Fahri Uyar Logo" />
            </Link>
            <p className="footer-tagline">
              Modern web teknolojileriyle yüksek performanslı ve SEO odaklı dijital çözümler.
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-links-col">
            <h4>Menü</h4>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/hakkimda">Hakkımda</Link></li>
              <li><Link to="/yetenekler">Yetenekler</Link></li>
              <li><Link to="/projeler">Projeler</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-social-col">
            <h4>Bağlantılar</h4>
            <div className="footer-socials">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                <FaLinkedinIn />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                <FaGithub />
              </a>
              <a href={socialLinks.email} className="footer-social-btn">
                <FaEnvelope />
              </a>
            </div>
            <Link to="/iletisim" className="btn-outline-glow btn-sm" style={{ marginTop: "16px", display: "inline-flex" }}>
              Randevu Al
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{data.copyright}</p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
