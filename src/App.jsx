import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { content } from "./data/content";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Biraz gecikme ile DOM'un güncellenmesini bekliyoruz
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // İsteğe bağlı: Ekranda göründükten sonra izlemeyi bırak
              // observer.unobserve(entry.target); 
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      // Daha önce eklenmiş visible sınıflarını temizleyebiliriz veya direkt observe edebiliriz
      document.querySelectorAll(".fade-up").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

function App() {
  const [lang] = useState("tr");
  const data = content[lang];

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RouteObserver />
        <Navbar data={data.nav} />
        
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/hakkimda" element={<About data={data} />} />
          <Route path="/yetenekler" element={<Skills data={data.skills} />} />
          <Route path="/deneyim" element={<Experience data={data.experience} />} />
          <Route path="/projeler" element={<Portfolio data={data.portfolio} />} />
          <Route path="/projeler/:id" element={<ProjectDetail />} />
          <Route path="/iletisim" element={<Contact data={data.contact} />} />
        </Routes>
        
        <Footer data={data.footer} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
