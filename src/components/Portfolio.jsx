import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Portfolio({ data }) {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">{data.sectionTitle}</h2>
          <p className="section-description">{data.sectionDescription}</p>
          <div className="section-divider" style={{ marginTop: 20 }}></div>
        </div>

        <div className="portfolio-grid">
          {data.projects.map((project, projectIndex) => (
            <Link
              to={`/projeler/${project.id}`}
              className={`project-card glass-card fade-up stagger-${(projectIndex % 4) + 1}`}
              key={projectIndex}
            >
              <div className="project-card-image">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <span style={{ color: "#fff", fontSize: "1rem", display: "flex", alignItems: "center", gap: 8, fontWeight: "600" }}>
                    Projeyi İncele <FaArrowRight />
                  </span>
                </div>
              </div>

              <div className="project-card-body">
                {project.badge && (
                  <span className="project-card-badge">{project.badge}</span>
                )}
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
                <div className="project-card-tech">
                  {project.tech.slice(0, 3).map((techItem, techIndex) => (
                    <span key={techIndex}>{techItem}</span>
                  ))}
                  {project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
