import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="portfolio-footer">

      <div className="footer-main">

        {/* =====================================================
            BRAND
        ===================================================== */}
        <div className="footer-brand">
          <strong>MUHAMMAD ZUL ASFI</strong>
          <span>PORTFOLIO.EXE</span>
        </div>


        {/* =====================================================
            FOOTER INFO
        ===================================================== */}
        <div className="footer-info">
          <span>{t("footer.role")}</span>
          <span className="footer-divider">|</span>
          <span>PEKANBARU, INDONESIA</span>
        </div>


        {/* =====================================================
            SOCIAL
        ===================================================== */}
        <div className="footer-social">

          <a
            href="https://github.com/mzulasfy17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="http://linkedin.com/in/muhammad-zul-asfi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:m.zulasfy17@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FiMail />
          </a>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <div className="footer-bottom">

        <span>
          {t("footer.rights")}
        </span>

        <span className="footer-status">
          {t("footer.systemStatus")}
          <span className="status-online-dot"></span>
          {t("footer.online")}
        </span>

      </div>

    </footer>
  );
}

export default Footer;