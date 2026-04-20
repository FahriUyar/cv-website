import SEO from "../components/SEO";
import { FaCode, FaRocket } from "react-icons/fa";

export default function About({ data }) {
  return (
    <main className="page-wrapper">
      <SEO
        title="Hakkımda"
        description="Fahri Uyar kimdir? Full Stack Web Developer olarak vizyonum ve çalışma şeklim."
      />
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="fade-up">
              <span className="section-tag">Hakkımda</span>
              <h1 className="about-title">
                Dijital Vizyonunuzu{" "}
                <span className="highlight">Koda Döküyorum</span>
              </h1>
              <div className="about-description">
                <p>
                  Merhaba, ben Fahri Uyar. 28 yaşında, uçtan uca projeler
                  geliştiren bağımsız bir Full Stack Web Developer'ım. İster
                  hızlı açılan statik bir tanıtım sitesi, ister React ve Next.js
                  tabanlı modern bir arayüz, isterseniz de PHP veya ASP.NET Core
                  mimarisiyle çalışan karmaşık bir web uygulaması olsun;
                  projenin ihtiyacına en uygun teknolojiyi seçerek kodluyorum.
                </p>
                <p>
                  Sadece bir web sitesi teslim edip bırakmıyorum. Ödeme
                  sağlayıcısı API entegrasyonlarından sunucu ve SSL
                  yapılandırmalarına, yüksek performanslı sayfa açılış
                  hızlarından doğru SEO stratejilerine kadar, işletmenizin arka
                  planda tıkır tıkır işleyecek dijital motorunu inşa ediyorum.
                </p>
              </div>

              <div className="about-features">
                <div className="about-feature-card glass-card">
                  <div className="feature-icon">
                    <FaCode />
                  </div>
                  <div>
                    <h4>Full Stack Çözümler</h4>
                    <p>
                      React, Next.js, PHP ve ASP.NET Core ile ölçeklenebilir
                      altyapılar.
                    </p>
                  </div>
                </div>
                <div className="about-feature-card glass-card">
                  <div className="feature-icon">
                    <FaRocket />
                  </div>
                  <div>
                    <h4>Altyapı & Performans</h4>
                    <p>
                      API entegrasyonları, sunucu yönetimi ve maksimum SEO/Hız
                      optimizasyonu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-wrapper fade-up">
              <div className="about-image-rect">
                <img
                  src="/images/fahri-uyar.webp"
                  alt="Fahri Uyar - Full Stack Developer"
                  loading="lazy"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/380?text=Fahri+Uyar")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
