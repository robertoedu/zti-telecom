import { useState, useEffect } from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botão após rolar um pouco a página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    const message =
      "Olá! Estou no site e gostaria de mais informações sobre os planos de internet.";
    window.open(
      `https://wa.me/5551985099089?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <button
      className={`whatsapp-button ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-text">Fale Conosco</span>
      <div className="whatsapp-pulse"></div>
    </button>
  );
};

export default WhatsAppButton;
