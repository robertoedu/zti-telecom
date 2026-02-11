import "./Differentials.css";

const Differentials = () => {
  const differentials = [
    {
      icon: "⚡",
      title: "Velocidade Real Contratada",
      description:
        "100% da velocidade que você contrata, sem surpresas ou redução de banda.",
    },
    {
      icon: "🔒",
      title: "Internet Estável Sem Quedas",
      description:
        "Conexão confiável e estável 24 horas por dia, 7 dias por semana.",
    },
    {
      icon: "🛠️",
      title: "Suporte Técnico 24h",
      description:
        "Equipe técnica pronta para te atender a qualquer hora do dia ou da noite.",
    },
    {
      icon: "⭐",
      title: "Atendimento Excelente",
      description:
        "Atendimento personalizado e humanizado, sempre pronto para ajudar você.",
    },
    {
      icon: "♾️",
      title: "Acesso Ilimitado Sem Franquia",
      description:
        "Internet sem limite de uso. Navegue, assista e baixe o quanto quiser.",
    },
    {
      icon: "✅",
      title: "Autorizada pela ANATEL",
      description:
        "Empresa regularizada e autorizada para atuar em todo o território nacional.",
    },
  ];

  return (
    <section className="differentials" id="diferenciais">
      <div className="differentials-container">
        <h2 className="differentials-title">Por que escolher a ZTI Telecom?</h2>
        <p className="differentials-subtitle">
          Conectando você ao que realmente importa, com qualidade e confiança
        </p>

        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <div key={index} className="differential-card">
              <div className="differential-icon">{item.icon}</div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Banner de Confiança */}
        <div className="trust-banner">
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <div>
              <strong>Qualidade Garantida</strong>
              <p>Compromisso com excelência</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🎯</span>
            <div>
              <strong>Transparência Total</strong>
              <p>Sem taxas ocultas</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💚</span>
            <div>
              <strong>Cliente Satisfeito</strong>
              <p>Sua satisfação é nossa prioridade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
