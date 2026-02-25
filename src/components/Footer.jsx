import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seções do Footer */}
        <div className="footer-content">
          {/* Logo e Descrição */}
          <div className="footer-section">
            <div className="footer-logo" onClick={scrollToTop}>
              <img
                src="/logo-zti.png"
                alt="ZTI Telecom"
                className="logo-image"
              />
            </div>
            <p className="footer-tagline">
              Internet estável, rápida e sem complicações.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/ztitelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a
                href="https://www.instagram.com/ztitelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📞</span>
                <span>(51) 98509-9089</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>zti@ztitelecom.com.br</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Gramado Xavier - RS</span>
              </li>
            </ul>
          </div>

          {/* Endereços */}
          <div className="footer-section">
            <h4>Nossos Endereços</h4>
            <ul className="footer-addresses">
              <li>
                <strong>Escritório Centro</strong>
                <p>
                  Rua Sete de Setembro, 1073
                  <br />
                  Centro - Gramado Xavier/RS
                </p>
              </li>
              <li>
                <strong>Escritório Herveiras</strong>
                <p>
                  Rua Germano Winck, 443
                  <br />
                  Centro - Herveiras/RS
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer-divider"></div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <div className="footer-info">
            <p>ZTI SERVIÇOS DE TELECOMUNICAÇÕES LTDA</p>
            <p>CNPJ: 32.421.705/0001-79</p>
            <p>Autorizada ANATEL (Ato nº 4482/2019)</p>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} ZTI Telecom. Todos os direitos
              reservados.
            </p>
          </div>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
