import "./Coverage.css";

const Coverage = () => {
  const handleConsulta = () => {
    const message =
      "Olá! Gostaria de consultar a disponibilidade de internet para minha região.";
    window.open(
      `https://wa.me/5551985099089?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="coverage" id="cobertura">
      <div className="coverage-container">
        <h2 className="coverage-title">Área de Cobertura</h2>

        <div className="coverage-content">
          <div className="coverage-info">
            <div className="info-icon">📍</div>
            <h3>Gramado Xavier e Região</h3>
            <p>
              Atendemos cidade e área rural com cobertura completa em fibra
              óptica. Levamos internet de qualidade para onde você estiver.
            </p>
          </div>

          <div className="coverage-areas">
            <div className="area-card">
              <span className="area-icon">🏙️</span>
              <h4>Área Urbana</h4>
              <p>
                Cobertura completa em Gramado Xavier com planos de até 300 Mega
              </p>
            </div>
            <div className="area-card">
              <span className="area-icon">🌾</span>
              <h4>Área Rural</h4>
              <p>Planos especiais para zona rural com suporte dedicado</p>
            </div>
          </div>

          <div className="coverage-cta">
            <p className="cta-text">
              <strong>Não sabe se temos cobertura na sua região?</strong>
              <br />
              Consulte agora mesmo a viabilidade para o seu endereço!
            </p>
            <button className="coverage-btn" onClick={handleConsulta}>
              <span className="btn-icon">📱</span>
              Consultar Disponibilidade
            </button>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="coverage-contact">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Suporte Técnico</strong>
              <p>(51) 98509-9089</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>E-mail</strong>
              <p>zti@ztitelecom.com.br</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕒</span>
            <div>
              <strong>Atendimento Comercial</strong>
              <p>
                Seg - Sex: 08h às 18h
                <br />
                Sáb: 08h às 11h30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
