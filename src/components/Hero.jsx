import "./Hero.css";

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        {/* Conteúdo Texto */}
        <div className="hero-content">
          <h1 className="hero-title">
            Internet fibra óptica{" "}
            <span className="highlight">rápida e estável</span> para sua casa e
            empresa
          </h1>
          <p className="hero-description">
            Conectando Gramado Xavier e região com velocidade real e suporte
            imediato.
          </p>

          {/* Botões de Ação */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToPlans}>
              Ver Planos
            </button>
            <a
              href="https://wa.me/5551985099089?text=Olá! Gostaria de saber mais sobre os planos de internet."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span className="whatsapp-icon">📱</span>
              Falar no WhatsApp
            </a>
          </div>

          {/* Indicadores de Confiança */}
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span>Autorizado ANATEL</span>
            </div>
            <div className="badge">
              <span className="badge-icon">⚡</span>
              <span>Velocidade Real</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🛡️</span>
              <span>Fidelidade Opcional</span>
            </div>
          </div>
        </div>

        {/* Imagem/Ilustração */}
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="speed-indicator">
              <div className="speed-circle">
                <span className="speed-number">900</span>
                <span className="speed-unit">Mbps</span>
              </div>
              <div className="speed-bars">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <span className="bar bar-4"></span>
              </div>
            </div>
            {/* Elemento visual de fibra óptica */}
            <div className="fiber-lines">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="#F5F7FA"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
