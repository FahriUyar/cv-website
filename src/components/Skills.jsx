import { FaServer, FaLaptopCode, FaTools } from "react-icons/fa";

const iconMap = {
  server: FaServer,
  code: FaLaptopCode,
  tools: FaTools,
};

export default function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{data.sectionTag}</div>
          <h2 className="section-title">{data.sectionTitle}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {data.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                className={`skill-card glass-card gradient-border fade-up stagger-${i + 1}`}
                key={i}
              >
                <div className="skill-card-icon">
                  <Icon />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="skill-tags">
                  {cat.items.map((item, j) => (
                    <span className="tech-badge" key={j}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
