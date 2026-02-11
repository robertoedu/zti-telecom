import { useState } from "react";
import "./Plans.css";

const Plans = () => {
  const [activeCategory, setActiveCategory] = useState("urbanos");

  const urbanPlans = [
    { name: "60 Mega", download: "60", upload: "30", recommended: false },
    { name: "120 Mega", download: "120", upload: "60", recommended: false },
    { name: "200 Mega", download: "200", upload: "100", recommended: true },
    { name: "300 Mega", download: "300", upload: "150", recommended: false },
  ];

  const ruralPlans = [
    { name: "5 Mega", download: "5", upload: "3", recommended: false },
    { name: "10 Mega", download: "10", upload: "5", recommended: false },
    { name: "15 Mega", download: "15", upload: "8", recommended: true },
    { name: "20 Mega", download: "20", upload: "10", recommended: false },
  ];

  const plans = activeCategory === "urbanos" ? urbanPlans : ruralPlans;

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

        {/* Toggle de Categoria */}
        <div className="plans-toggle">
          <button
            className={`toggle-btn ${activeCategory === "urbanos" ? "active" : ""}`}
            onClick={() => setActiveCategory("urbanos")}
          >
            🏙️ Planos Urbanos
          </button>
          <button
            className={`toggle-btn ${activeCategory === "rurais" ? "active" : ""}`}
            onClick={() => setActiveCategory("rurais")}
          >
            🌾 Planos Rurais
          </button>
        </div>

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
                  <span>Suporte Técnico 24h</span>
                </div>
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
