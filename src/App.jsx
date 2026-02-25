import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { content } from "./data/content";

function App() {
  const [lang] = useState("tr");
  const data = content[lang];

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar data={data.nav} />
      <Hero data={data.hero} stats={data.stats} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Portfolio data={data.portfolio} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </>
  );
}

export default App;
