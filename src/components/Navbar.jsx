import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">ZTI</span>
          <span className="logo-subtext">Telecom</span>
        </div>

        {/* Menu Desktop */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("inicio")}>Início</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre")}>Sobre</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("planos")}>Planos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("diferenciais")}>Diferenciais</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cobertura")}>Cobertura</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contato")}>Contato</a>
          </li>
        </ul>

        {/* Botão CTA */}
        <a
          href="https://wa.me/5551985099089?text=Olá! Gostaria de saber mais sobre os planos de internet."
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Central do Cliente
        </a>

        {/* Menu Hamburguer Mobile */}
        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
