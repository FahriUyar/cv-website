import { FaCertificate } from "react-icons/fa";

export default function Experience({ data }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.sectionTitle}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-grid">
          {/* Work Experience */}
          <div>
            <h3
              className="fade-up"
              style={{ marginBottom: 32, fontSize: "1.3rem" }}
            >
              💼 İş Deneyimi
            </h3>
            <div className="timeline">
              {data.work.map((item, i) => (
                <div
                  className={`timeline-item fade-up stagger-${i + 1}`}
                  key={i}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                  {item.description && (
                    <div className="timeline-desc">{item.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certificates */}
          <div>
            <h3
              className="fade-up"
              style={{ marginBottom: 32, fontSize: "1.3rem" }}
            >
              🎓 Eğitim
            </h3>
            {data.education.map((item, i) => (
              <div
                className={`education-card glass-card fade-up stagger-${i + 1}`}
                key={i}
              >
                <h4>{item.degree}</h4>
                <div className="school">{item.school}</div>
                <div className="period">{item.period}</div>
                {item.note && <div className="note">{item.note}</div>}
              </div>
            ))}

            <div className="certificates fade-up stagger-3">
              <h4>📜 Sertifikalar</h4>
              {data.certificates.map((cert, i) => (
                <div className="certificate-item" key={i}>
                  <FaCertificate className="cert-icon" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
