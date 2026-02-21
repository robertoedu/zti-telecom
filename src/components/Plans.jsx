import "./Plans.css";

const Plans = () => {
  const plans = [
    { name: "300 Mega", download: "300", upload: "150", recommended: false },
    { name: "500 Mega", download: "500", upload: "250", recommended: true },
    { name: "700 Mega", download: "700", upload: "350", recommended: false },
    { name: "900 Mega", download: "900", upload: "450", recommended: false },
  ];

  const handleConsultar = (planName) => {
    const message = `Olá! Gostaria de saber mais sobre o plano ${planName}.`;
    window.open(
      `https://wa.me/5551985099089?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="plans" id="planos">
      <div className="plans-container">
        <h2 className="plans-title">Planos de Internet Fibra Óptica</h2>
        <p className="plans-subtitle">Garantia de 100% da banda contratada</p>

        {/* Grid de Planos */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.recommended ? "recommended" : ""}`}
            >
              {/* Efeito de brilho decorativo */}
              <div className="plan-card-shine"></div>

              {plan.recommended && (
                <div className="recommended-badge">
                  <span className="badge-icon">⭐</span>
                  Mais Popular
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon">🚀</div>
                <h3 className="plan-name">{plan.name}</h3>
              </div>

              <div className="plan-speed">
                <div className="speed-item">
                  <span className="speed-icon">⬇️</span>
                  <div>
                    <div className="speed-value">{plan.download} Mbps</div>
                    <div className="speed-label">Download</div>
                  </div>
                </div>
                <div className="speed-item">
                  <span className="speed-icon">⬆️</span>
                  <div>
                    <div className="speed-value">{plan.upload} Mbps</div>
                    <div className="speed-label">Upload</div>
                  </div>
                </div>
              </div>

              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>100% Fibra Óptica</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Sem Fidelidade</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Acesso Ilimitado</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Wi-Fi Grátis</span>
                </div>
              </div>

              <button
                className="plan-btn"
                onClick={() => handleConsultar(plan.name)}
              >
                Consultar Disponibilidade
              </button>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="plans-note">
          <span className="note-icon">ℹ️</span>
          <p>
            Todos os planos com velocidade real garantida. Consulte
            disponibilidade para sua região.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
