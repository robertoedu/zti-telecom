import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">ZTI</span>
          <span className="logo-subtext">Telecom</span>
        </div>

        {/* Menu Desktop */}
        <ul
          ref={menuRef}
          className={`navbar-menu ${isMenuOpen ? "active" : ""}`}
        >
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
          <li className="navbar-central-mobile">
            <a
              href="https://central.ztitelecom.com.br/central_assinante_web/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Central do Cliente
            </a>
          </li>
        </ul>

        {/* Botão CTA */}
        <a
          href="https://central.ztitelecom.com.br/central_assinante_web/login"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Central do Cliente
        </a>

        {/* Menu Hamburguer Mobile */}
        <button
          ref={toggleRef}
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
