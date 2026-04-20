# 🌐 Fahri Uyar — Kişisel Portfolyo Web Sitesi

**[fahriuyar.com.tr](https://fahriuyar.com.tr)**

Modern web teknolojileriyle geliştirilen, yüksek performanslı ve SEO uyumlu kişisel portfolyo web sitesi. Full Stack Developer olarak tamamlanan projeleri, teknik yetkinlikleri ve profesyonel deneyimi sergileyen çok sayfalı bir React uygulamasıdır.

---

## ✨ Öne Çıkan Özellikler

- **Çok Sayfalı Mimari** — React Router ile Ana Sayfa, Hakkımda, Yetenekler, Deneyim, Projeler ve İletişim sayfaları
- **Proje Detay Sayfaları** — Her proje için ayrı detay sayfası, Fancybox destekli görsel galeri
- **Dinamik SEO** — react-helmet-async ile sayfa bazlı meta etiketleri, Open Graph ve Twitter Card desteği
- **Modern Animasyonlar** — Framer Motion ile scroll ve sayfa geçiş animasyonları
- **Tam Responsive** — Mobil, tablet ve masaüstü cihazlara uyumlu tasarım
- **Lighthouse Uyumlu** — Yüksek performans, erişilebilirlik ve SEO puanları

---

## 🛠️ Teknoloji Yığını

| Kategori | Teknoloji |
|---|---|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Routing** | React Router DOM v7 |
| **Animasyon** | Framer Motion |
| **Galeri** | Fancybox ([@fancyapps/ui](https://fancyapps.com/fancybox/)) |
| **SEO** | react-helmet-async |
| **İkonlar** | React Icons |
| **Stil** | Vanilla CSS (özel tasarım sistemi) |

---

## 📁 Proje Yapısı

```
fahriuyar.com.tr/
├── public/
│   ├── images/              # Proje görselleri
│   ├── robots.txt           # Arama motoru yönergeleri
│   └── sitemap.xml          # Site haritası
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Contact.jsx      # İletişim formu
│   │   ├── Experience.jsx   # Deneyim zaman çizelgesi
│   │   ├── Footer.jsx       # Alt bilgi
│   │   ├── Hero.jsx         # Ana sayfa hero bölümü
│   │   ├── Navbar.jsx       # Navigasyon çubuğu
│   │   ├── Portfolio.jsx    # Proje kartları
│   │   ├── SEO.jsx          # Dinamik meta etiketleri
│   │   └── Skills.jsx       # Yetenek kartları
│   ├── pages/               # Sayfa bileşenleri
│   │   ├── Home.jsx         # Ana sayfa
│   │   ├── About.jsx        # Hakkımda
│   │   ├── Skills.jsx       # Yetenekler
│   │   ├── Experience.jsx   # Deneyim
│   │   ├── Portfolio.jsx    # Projeler listesi
│   │   ├── ProjectDetail.jsx # Proje detay sayfası
│   │   └── Contact.jsx      # İletişim
│   ├── data/
│   │   └── content.js       # Tüm site içerikleri (merkezi veri)
│   ├── App.jsx              # Router ve layout yapısı
│   ├── main.jsx             # Uygulama giriş noktası
│   └── index.css            # Global stiller ve tasarım sistemi
├── index.html               # HTML şablonu
├── vite.config.js           # Vite yapılandırması
└── package.json
```

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js >= 18
- npm >= 9

### Kurulum

```bash
# Repoyu klonla
git clone https://github.com/FahriUyar/cv-website.git
cd cv-website

# Bağımlılıkları yükle
npm install
```

### Geliştirme

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışır.

### Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne oluşturulur.

### Önizleme

```bash
npm run preview
```

---

## 📄 Lisans

Bu proje kişisel kullanım amaçlıdır. Tüm hakları saklıdır.

© 2026 Fahri Uyar
