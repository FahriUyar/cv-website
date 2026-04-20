import Hero from "../components/Hero";
import SEO from "../components/SEO";
import ContactComponent from "../components/Contact";
import { FaCode, FaSearch, FaChartLine, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function Home({ data }) {
  const icons = {
    code: <FaCode />,
    search: <FaSearch />,
    analytics: <FaChartLine />,
    rocket: <FaRocket />,
    lineChart: <FaChartLine />,
    shield: <FaShieldAlt />
  };

  return (
    <main>
      <SEO 
        title="Uçtan Uca Dijital Çözümler & Web Geliştirme" 
        description={data.hero.description}
      />
      
      {/* Hero Section */}
      <Hero data={data.hero} stats={data.stats} />

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-tag">{data.services.sectionTag}</span>
            <h2 className="section-title">{data.services.sectionTitle}</h2>
            <p className="section-description">{data.services.sectionDescription}</p>
          </div>

          <div className="services-grid">
            {data.services.items.map((service, index) => (
              <article 
                key={index} 
                className="glass-card service-card fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="service-icon-wrapper">
                  {icons[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Timeline Section */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-tag">{data.process.sectionTag}</span>
            <h2 className="section-title">{data.process.sectionTitle}</h2>
            <p className="section-description">{data.process.sectionDescription}</p>
          </div>

          <div className="process-timeline">
            {data.process.steps.map((step, index) => (
              <div 
                className="process-item fade-up" 
                key={step.id}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="process-dot"></div>
                <div className="process-content glass-card">
                  <div className="process-header">
                    <div className="process-id">{step.id}</div>
                    <div className="process-icon">{icons[step.icon]}</div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div>
        <ContactComponent data={data.contact} />
      </div>
    </main>
  );
}
