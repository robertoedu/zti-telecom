import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Plans from "./Plans";
import Differentials from "./Differentials";
import Coverage from "./Coverage";
import CTA from "./CTA";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import "./LandingPage.css";

const LandingPage = () => {
  // Scroll suave ao carregar
  useEffect(() => {
    // Scroll suave para toda a página
    document.documentElement.style.scrollBehavior = "smooth";

    // Observador para animações ao entrar na viewport
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    // Observar todas as seções
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Differentials />
      <Coverage />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
