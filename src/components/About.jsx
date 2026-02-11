import "./About.css";

const About = () => {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <h2 className="about-title">Sobre a ZTI Telecom</h2>
        <p className="about-subtitle">
          Conectando Gramado Xavier e região desde 2019 com excelência em
          internet fibra óptica
        </p>

        {/* Cards Informativos */}
        <div className="about-cards">
          <div className="info-card">
            <div className="card-icon">📅</div>
            <h3>Nossa História</h3>
            <p>
              Fundada em <strong>janeiro de 2019</strong> em Gramado Xavier/RS,
              levando internet de qualidade para toda a região.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">🎯</div>
            <h3>Nossa Missão</h3>
            <p>
              Conectar pessoas e empresas com internet de alta velocidade,
              estabilidade e atendimento personalizado.
            </p>
          </div>

          <div className="info-card highlight">
            <div className="card-icon">🛡️</div>
            <h3>Autorizada ANATEL</h3>
            <p>
              <strong>SCM - Serviços de Comunicação Multimídia</strong>
            </p>
            <div className="card-badge">Ato nº 4482/2019</div>
            <div className="card-cnpj">CNPJ: 32.421.705/0001-79</div>
          </div>
        </div>

        {/* Valores e Diferenciais */}
        <div className="about-values">
          <div className="value-item">
            <span className="value-icon">✅</span>
            <span>Compromisso com Qualidade</span>
          </div>
          <div className="value-item">
            <span className="value-icon">⚡</span>
            <span>Tecnologia de Ponta</span>
          </div>
          <div className="value-item">
            <span className="value-icon">👥</span>
            <span>Atendimento Humanizado</span>
          </div>
          <div className="value-item">
            <span className="value-icon">📍</span>
            <span>Presente na Comunidade</span>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">2019</div>
            <div className="stat-label">Fundação</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Fibra Óptica</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Suporte</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
