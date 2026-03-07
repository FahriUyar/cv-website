export const content = {
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      experience: "Deneyim",
      portfolio: "Projeler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben Fahri 👋",
      title: "Modern Web Teknolojileri ile",
      titleHighlight: "Çözüm Üretiyorum.",
      description:
        "Bilgisayar Mühendisliği mezunu, Full Stack Web Developer olarak modern web teknolojileri ile projeler geliştiriyorum. React, C#, ASP.NET ve PHP gibi teknolojilerle hem front-end hem back-end tarafında çözümler üretiyorum. Öğrenme tutkum, beni sürekli daha iyisini yapmaya itiyor.",
      cta1: "Projelerimi Gör",
      cta2: "İletişime Geç",
      roles: ["Full Stack Developer", "Web Developer", "Frontend Developer"],
    },
    stats: [
      { value: 3, suffix: "+", label: "Yıl Deneyim" },
      { value: 8, suffix: "+", label: "Tamamlanan Proje" },
      { value: 5, suffix: "+", label: "Mutlu Müşteri" },
    ],
    skills: {
      sectionTag: "Teknoloji Yığınım",
      sectionTitle: "Kullandığım Araçlar & Yetenekler",
      categories: [
        {
          title: "Back-End & Database",
          icon: "server",
          description: "Güçlü ve ölçeklenebilir altyapılar.",
          items: ["C#", "ASP.NET", "PHP", "Node.js", "MySQL", "Java"],
        },
        {
          title: "Front-End",
          icon: "code",
          description: "Modern ve duyarlı arayüzler.",
          items: [
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "React",
            "Bootstrap 5",
            "jQuery",
          ],
        },
        {
          title: "Araçlar & DevOps",
          icon: "tools",
          description: "Geliştirme süreci ve yönetim araçları.",
          items: [
            "Git & GitHub",
            "Docker",
            "VS Code & Antigravity",
            "REST API",
            "Google Analytics",
          ],
        },
      ],
    },
    experience: {
      sectionTitle: "Deneyim & Eğitim",
      work: [
        {
          role: "Web Geliştirici",
          company: "ŞaraTour Seyahat Acentası",
          period: "2023 - Günümüz",
          description:
            "Web sitesi geliştirme, SEO, Google Tag Manager yönetimi.",
        },
        {
          role: "Yazılım Stajyeri",
          company: "Celadon Software",
          period: "2023",
          description: "Yazılım geliştirme süreçlerine katkı.",
        },
        {
          role: "Yazılım Stajyeri",
          company: "Bulutsoft Yazılım",
          period: "2022",
          description: "Yazılım geliştirme süreçlerine katkı.",
        },
      ],
      education: [
        {
          degree: "Bilgisayar Mühendisliği",
          school: "Antalya Bilim Üniversitesi",
          period: "2019 - 2024",
          note: "Ortalama: 2.5",
        },
      ],
      certificates: [
        "Modern Web Geliştirme (Udemy)",
        "BTK Akademi: Java ile Programlama & Bilişim Teknolojileri",
      ],
    },
    portfolio: {
      sectionTitle: "Projeler",
      sectionDescription:
        "Geliştirdiğim veya katkıda bulunduğum bazı çalışmalar.",
      visitBtn: "Siteyi Ziyaret Et",
      projects: [
        {
          title: "Psikolog Çağla Arıkan",
          description:
            "Psikolog tanıtım sitesi. SEO uyumlu, mobil uyumlu tasarım, iletişim formu üzerinden mail iletişimi ve admin paneli ile içerik yönetimi.",
          tags: ["SEO Uyumlu", "Admin Panelli"],
          tech: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
          url: "https://pskcaglaarikan.com.tr",
          images: ["/images/pskcaglaarikan/cagla.png"],
        },
        {
          title: "Bilanço Takip Sistemi",
          description:
            "Hem bireysel bütçeler hem de işletmeler için tasarlanmış kapsamlı finans yönetim uygulaması. Nakit ve kredi kartı harcamalarını ayıran gerçek muhasebe mantığı, ileriye dönük otomatik taksit planlaması, hiyerarşik kategori yönetimi ve tek tıkla Excel/Google Tablolara dışa aktarım özelliklerini içerir.",
          tags: ["Finans Yönetimi", "SaaS", "Otomasyon"],
          tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
          badge: "Full Stack SaaS",
          images: [
            "/images/bilancotakip/bilanco1.png",
            "/images/bilancotakip/bilanco3.png",
            "/images/bilancotakip/bilanco4.png",
            "/images/bilancotakip/bilanco5.png",
            "/images/bilancotakip/bilanco10.png",
            "/images/bilancotakip/bilanco6.png",
            "/images/bilancotakip/bilanco7.png",
            "/images/bilancotakip/bilanco8.png",
            "/images/bilancotakip/bilanco9.png",
          ],
        },
        {
          title: "Side Stella Elite Hotel",
          description:
            "Kurumsal otel web sitesi. Kullanıcı dostu arayüz, hızlı rezervasyon erişimi ve modern galeri yapısı.",
          tags: ["Mobil Uyumlu", "SEO Optimizasyonu"],
          tech: ["PHP", "MySQL", "Javascript", "Bootstrap"],
          url: "https://sidestellaelite.com",
          images: [
            "/images/sidestella/sidestella.png",
            "/images/sidestella/sidestella1.png",
            "/images/sidestella/sidestella2.png",
            "/images/sidestella/sidestella3.png",
          ],
        },
        {
          title: "Side Breeze Hotel",
          description:
            "Çok dilli destek sunan, içerik yönetimi kolaylaştırılmış ve hızlı yüklenen modern otel web sitesi.",
          tags: ["Çok Dilli", "Hızlı Yükleme"],
          tech: ["PHP", "MySQL", "Javascript", "Bootstrap"],
          url: "https://sidebreezehotel.com",
          images: [
            "/images/sidebreeze/sidebreeze.png",
            "/images/sidebreeze/sidebreeze1.png",
            "/images/sidebreeze/sidebreeze2.png",
            "/images/sidebreeze/sidebreeze3.png",
            "/images/sidebreeze/sidebreeze4.png",
          ],
        },
        {
          title: "Luna Vista Hotel",
          description:
            "Modern ve minimalist tasarım anlayışıyla otel hizmetlerini sunan, SEO uyumlu web platformu.",
          tags: ["Minimalist", "SEO Uyumlu"],
          tech: ["PHP", "MySQL", "Javascript", "Bootstrap"],
          url: "https://lunavistahotel.com",
          images: [
            "/images/lunavista/lunavista.png",
            "/images/lunavista/lunavista1.png",
            "/images/lunavista/lunavista2.png",
            "/images/lunavista/lunavista3.png",
            "/images/lunavista/lunavista4.png",
          ],
        },

        {
          title: "Jadore Deluxe Otel",
          description:
            "Ziyaretçilere kapsamlı otel bilgisi sunan, rezervasyon odaklı ve yüksek işlevselliğe sahip web sitesi.",
          tags: ["Rezervasyon", "Kurumsal"],
          tech: ["PHP", "MySQL", "Javascript", "Bootstrap"],
          url: "https://jadorehotel.com/",
          images: [
            "/images/jadore-deluxe-hotel/jadore1.png",
            "/images/jadore-deluxe-hotel/jadore2.png",
            "/images/jadore-deluxe-hotel/jadore3.png",
            "/images/jadore-deluxe-hotel/jadore4.png",
            "/images/jadore-deluxe-hotel/jadore5.png",
            "/images/jadore-deluxe-hotel/jadore6.png",
          ],
        },
        {
          title: "Fame Otel Rezervasyon",
          description:
            "Twilio SMS altyapısı ile desteklenen, anlık onay ve teklif sunabilen gelişmiş rezervasyon sistemi.",
          tags: ["Back-End", "SMS Entegrasyonu"],
          tech: ["ASP.NET", "Twilio", "SQL Server"],
          badge: "Back-End Logic",
          images: [
            "/images/fame-hotel/fame-hotel-mainpage.png",
            "/images/fame-hotel/fame-hotel-accommodation.png",
            "/images/fame-hotel/fame-hotel-contact.png",
            "/images/fame-hotel/fame-hotel-form.png",
            "/images/fame-hotel/fame-hotel-gallery.png",
            "/images/fame-hotel/fame-hotel-reservation.png",
          ],
        },
        {
          title: "Widget Nexus",
          description:
            "Finansal veriler, döviz kurları ve hava durumu gibi günlük araçları tek bir panoda toplayan pratik uygulama.",
          tags: ["Kişisel Proje", "Dashboard"],
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
          url: "",
          badge: "Personal Project",
          images: [
            "/images/widget-nexus/widget-nexus-top.png",
            "/images/widget-nexus/widget-nexus-currency.png",
            "/images/widget-nexus/widget-nexus-weather.png",
          ],
        },
      ],
    },
    contact: {
      sectionTitle: "Bir Projeniz mi Var?",
      sectionDescription:
        "Web geliştirmeden back-end mimarisine kadar her türlü dijital çözüm için benimle iletişime geçebilirsiniz.",
      email: "fahriuyar32@gmail.com",
      phone: "0544 770 0595",
      location: "Sincan/Ankara",
      formName: "İsim",
      formEmail: "Email",
      formMessage: "Mesajınız",
      formSubmit: "Mesaj Gönder",
    },
    footer: {
      copyright: "© 2026 Fahri Uyar. Tüm hakları saklıdır.",
    },
  },
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/fahri-uyar-73bb4a243/",
  github: "https://github.com/FahriUyar",
  email: "mailto:fahriuyar32@gmail.com",
};
