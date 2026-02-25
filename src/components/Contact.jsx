import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`İletişim Formu: ${form.name}`);
    const body = encodeURIComponent(
      `İsim: ${form.name}\nEmail: ${form.email}\n\nMesaj:\n${form.message}`,
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">{data.sectionTitle}</h2>
          <p className="section-description">{data.sectionDescription}</p>
          <div className="section-divider" style={{ marginTop: 20 }}></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards fade-up">
            <a
              href={`mailto:${data.email}`}
              className="contact-info-card glass-card"
            >
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <span>{data.email}</span>
              </div>
            </a>
            <a
              href={`tel:+90${data.phone.replace(/\s/g, "")}`}
              className="contact-info-card glass-card"
            >
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Telefon</h4>
                <span>{data.phone}</span>
              </div>
            </a>
            <div className="contact-info-card glass-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Konum</h4>
                <span>{data.location}</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form glass-card fade-up stagger-2"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>{data.formName}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Adınızı girin..."
                required
              />
            </div>
            <div className="form-group">
              <label>{data.formEmail}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email adresinizi girin..."
                required
              />
            </div>
            <div className="form-group">
              <label>{data.formMessage}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mesajınızı yazın..."
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              {data.formSubmit} <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
