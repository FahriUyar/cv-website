import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { content } from "../data/content";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

// Fancybox imports
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { 
  FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaCode, FaDatabase, 
  FaServer, FaRocket, FaMobileAlt, FaChartBar, FaSearch, FaExclamationTriangle,
  FaLightbulb, FaBolt, FaMapMarkerAlt, FaCalendarAlt, FaFileExport, FaUserShield, FaLayerGroup,
  FaExpand
} from "react-icons/fa";

// Icon mapping helper
const getIcon = (iconName) => {
  const iconMap = {
    php: <FaServer />,
    database: <FaDatabase />,
    layout: <FaLayerGroup />,
    code: <FaCode />,
    react: <FaCode />,
    server: <FaServer />,
    zap: <FaBolt />,
    calendar: <FaCalendarAlt />,
    chart: <FaChartBar />,
    export: <FaFileExport />,
    map: <FaMapMarkerAlt />,
    form: <FaFileExport />,
    admin: <FaUserShield />,
    check: <FaCheckCircle />,
    speed: <FaRocket />,
    mobile: <FaMobileAlt />,
    search: <FaSearch />,
  };
  return iconMap[iconName] || <FaCode />;
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = content.tr.portfolio.projects.find((p) => p.id === id);

  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {
      dragToClose: false,
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullscreen", "download", "thumbs", "close"],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, [project]);

  if (!project) {
    return (
      <main className="page-wrapper text-center">
        <div className="container" style={{ padding: "150px 0" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Proje Bulunamadı</h1>
          <Link to="/projeler" className="btn-primary-glow">Projelere Dön</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrapper">
      <SEO 
        title={`${project.title} | Proje Detayı`} 
        description={project.summary || project.description} 
        image={project.images[0]}
      />
      
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="container">
          <Link to="/projeler" className="back-link" style={{ marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
            <FaArrowLeft /> Projelere Dön
          </Link>
          
          <motion.div 
            className="project-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="project-detail-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "20px" }}>{project.title}</h1>
            <p className="project-hero-summary">{project.summary || project.description}</p>
            
            <div className="project-hero-badges">
              {project.tech.map((tag, i) => (
                <span key={i} className="tech-badge">{tag}</span>
              ))}
            </div>
            
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary-glow">
                Canlı Projeyi İncele <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Proje Açıklaması */}
      {project.description && (
        <section className="project-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="project-section-title">Proje Hakkında</h2>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--text-secondary)", maxWidth: "900px" }}>{project.description}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* 1. Projenin Amacı ve Problem */}
      {(project.challenge || project.solution) && (
        <section className="project-section">
          <div className="container">
            <div className="purpose-grid">
              {project.challenge && (
                <motion.div 
                  className="glass-card purpose-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3><FaExclamationTriangle /> İhtiyaç ve Problem</h3>
                  <p>{project.challenge}</p>
                </motion.div>
              )}
              {project.solution && (
                <motion.div 
                  className="glass-card purpose-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3><FaLightbulb /> Stratejik Çözüm</h3>
                  <p>{project.solution}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 2. Teknik Altyapı (Tech Stack) */}
      {project.techStackDetailed && (
        <section className="project-section" style={{ background: "rgba(255,255,255,0.01)" }}>
          <div className="container">
            <h2 className="project-section-title center-title">Teknik Altyapı</h2>
            <div className="tech-stack-grid">
              {project.techStackDetailed.map((tech, i) => (
                <motion.div 
                  key={i} 
                  className="glass-card tech-stack-card"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="tech-icon-wrapper">
                    {getIcon(tech.icon)}
                  </div>
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Öne Çıkan Teknik Özellikler */}
      {project.features && (
        <section className="project-section">
          <div className="container">
            <h2 className="project-section-title">Öne Çıkan Özellikler</h2>
            <div className="features-grid">
              {project.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  className="feature-premium-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="feature-icon-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <h3>{feature.title}</h3>
                  <p style={{ color: "var(--text-secondary)", marginTop: "12px" }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section (Responsive Grid + Fancybox) */}
      <section className="project-section" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <h2 className="project-section-title center-title">Proje Görselleri</h2>
          
          <div className="project-gallery-grid">
            {project.images.map((img, i) => (
              <motion.div 
                key={i}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-fancybox="gallery" 
                data-src={img}
              >
                <div className="gallery-image-wrapper">
                  <img 
                    src={img} 
                    alt={`${project.title} ekran görüntüsü ${i + 1}`} 
                    loading="lazy" 
                  />
                  <div className="gallery-overlay">
                    <FaExpand className="expand-icon" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
