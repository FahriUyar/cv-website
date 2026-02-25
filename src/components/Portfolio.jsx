import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
} from "react-icons/fa";

export default function Portfolio({ data }) {
  const [modal, setModal] = useState(null); // { projectIndex, imageIndex }

  const openModal = (pi, ii = 0) =>
    setModal({ projectIndex: pi, imageIndex: ii });
  const closeModal = () => setModal(null);

  const navigate = (dir) => {
    if (!modal) return;
    const project = data.projects[modal.projectIndex];
    const total = project.images.length;
    setModal({
      ...modal,
      imageIndex: (modal.imageIndex + dir + total) % total,
    });
  };

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
          {data.projects.map((project, pi) => (
            <div
              className={`project-card glass-card fade-up stagger-${(pi % 4) + 1}`}
              key={pi}
            >
              <div className="project-card-image" onClick={() => openModal(pi)}>
                <img src={project.images[0]} alt={project.title} />
                <div className="project-card-overlay">
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <FaImages /> {project.images.length} görseli görüntüle
                  </span>
                </div>
              </div>
              <div className="project-card-body">
                {project.badge && (
                  <span className="project-card-badge">{project.badge}</span>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-tech">
                  {project.tech.map((t, ti) => (
                    <span key={ti}>{t}</span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    {data.visitBtn} <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modal && (
        <div className="image-modal-backdrop" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img
              src={data.projects[modal.projectIndex].images[modal.imageIndex]}
              alt={data.projects[modal.projectIndex].title}
            />
            <button
              className="image-modal-nav image-modal-prev"
              onClick={() => navigate(-1)}
            >
              <FaChevronLeft />
            </button>
            <button
              className="image-modal-nav image-modal-next"
              onClick={() => navigate(1)}
            >
              <FaChevronRight />
            </button>
            <div className="image-modal-dots">
              {data.projects[modal.projectIndex].images.map((_, ii) => (
                <button
                  key={ii}
                  className={`image-modal-dot${ii === modal.imageIndex ? " active" : ""}`}
                  onClick={() => setModal({ ...modal, imageIndex: ii })}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
