import "./CTA.css";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5551985099089?text=Olá! Quero assinar a ZTI Telecom!",
      "_blank",
    );
  };

  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cta" id="contato">
      <div className="cta-container">
        {/* Título Principal */}
        <div className="cta-header">
          <h2 className="cta-title">
            Pronto para ter{" "}
            <span className="highlight">internet de verdade</span>?
          </h2>
          <p className="cta-description">
            Chega de sofrer com internet lenta e instável. Faça parte da família
            ZTI Telecom e experimente a diferença de uma conexão profissional.
          </p>
        </div>

        {/* Benefícios Rápidos */}
        <div className="cta-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Ativação Rápida</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎯</span>
            <span>Sem Burocracia</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💯</span>
            <span>Suporte Total</span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="cta-buttons">
          <button className="cta-btn cta-btn-primary" onClick={handleWhatsApp}>
            <span className="btn-icon">🚀</span>
            Assinar Agora
          </button>
          <button className="cta-btn cta-btn-secondary" onClick={scrollToPlans}>
            <span className="btn-icon">📋</span>
            Ver Planos
          </button>
        </div>

        {/* Garantia */}
        <div className="cta-guarantee">
          <span className="guarantee-icon">✓</span>
          <p>Garantia de qualidade e suporte 24 horas por dia</p>
        </div>
      </div>

      {/* Background decorativo */}
      <div className="cta-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default CTA;
