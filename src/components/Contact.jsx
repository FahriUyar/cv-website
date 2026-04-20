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
    <section className="modern-contact-wrapper" id="contact">
      <div className="container">
        <div className="modern-contact-grid">
          {/* LEFT: Huge Typography & Info */}
          <div className="modern-contact-left fade-up">
            <div>
              <h2 className="contact-huge-title">
                Birlikte
                <br />
                Çalışalım
              </h2>
              <p className="contact-subtitle">{data.sectionDescription}</p>
            </div>

            <div className="modern-info-list">
              <a href={`mailto:${data.email}`} className="modern-info-item">
                <div className="modern-info-icon">
                  <FaEnvelope />
                </div>
                <div className="modern-info-content">
                  <h4>Email</h4>
                  <span>{data.email}</span>
                </div>
              </a>

              <a
                href={`tel:+90${data.phone.replace(/\s/g, "")}`}
                className="modern-info-item"
              >
                <div className="modern-info-icon">
                  <FaPhone />
                </div>
                <div className="modern-info-content">
                  <h4>Telefon</h4>
                  <span>{data.phone}</span>
                </div>
              </a>

              <div className="modern-info-item">
                <div className="modern-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="modern-info-content">
                  <h4>Konum</h4>
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Minimalist Form */}
          <div
            className="modern-contact-right fade-up"
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="minimal-form-group">
                <input
                  type="text"
                  name="name"
                  className="minimal-input"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="minimal-label">{data.formName}</label>
              </div>

              <div className="minimal-form-group">
                <input
                  type="email"
                  name="email"
                  className="minimal-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="minimal-label">{data.formEmail}</label>
              </div>

              <div className="minimal-form-group">
                <textarea
                  name="message"
                  className="minimal-textarea"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                ></textarea>
                <label className="minimal-label">{data.formMessage}</label>
              </div>

              <button type="submit" className="btn-send">
                {data.formSubmit} <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
