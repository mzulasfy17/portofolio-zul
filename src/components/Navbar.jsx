import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiCode,
  FiFolder,
  FiMail,
  FiMenu,
  FiX,
  FiGlobe,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-window">
      <Link to="/" className="brand" onClick={closeMenu}>
        <div className="brand-logo">
          <span className="panda-logo">🐼</span>
        </div>

        <div className="brand-text">
          <h1>MUHAMMAD ZUL ASFI</h1>
          <span>PORTFOLIO.EXE</span>
        </div>
      </Link>

      <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <FiHome />
          <div className="nav-item-text">
            <span>{t("nav.home")}</span>
            <small className="nav-item-desc">{t("nav.homeDesc")}</small>
          </div>
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <FiBriefcase />
          <div className="nav-item-text">
            <span>{t("nav.experience")}</span>
            <small className="nav-item-desc">{t("nav.experienceDesc")}</small>
          </div>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <FiCode />
          <div className="nav-item-text">
            <span>{t("nav.skills")}</span>
            <small className="nav-item-desc">{t("nav.skillsDesc")}</small>
          </div>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <FiFolder />
          <div className="nav-item-text">
            <span>{t("nav.projects")}</span>
            <small className="nav-item-desc">{t("nav.projectsDesc")}</small>
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={closeMenu}
        >
          <FiMail />
          <div className="nav-item-text">
            <span>{t("nav.contact")}</span>
            <small className="nav-item-desc">{t("nav.contactDesc")}</small>
          </div>
        </NavLink>

        {/* Mobile Language Switcher inside Menu */}
        <div className="mobile-lang-wrapper">
          <div className="mobile-lang-header">
            <FiGlobe className="mobile-globe-icon" />
            <span>{lang === "id" ? "PILIH BAHASA" : "SELECT LANGUAGE"}</span>
          </div>
          <div className="mobile-lang-toggle">
            <button
              type="button"
              className={`mobile-lang-btn ${lang === "id" ? "active" : ""}`}
              onClick={() => {
                setLang("id");
                closeMenu();
              }}
            >
              <span className="lang-flag">🇮🇩</span> INDONESIA
            </button>
            <button
              type="button"
              className={`mobile-lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => {
                setLang("en");
                closeMenu();
              }}
            >
              <span className="lang-flag">🇬🇧</span> ENGLISH
            </button>
          </div>
        </div>
      </nav>

      {/* Right Controls Container (Language Switcher + Mobile Menu Toggle) */}
      <div className="navbar-controls">
        {/* Desktop Language Switcher */}
        <div
          className="retro-lang-switcher desktop-lang"
          title={lang === "id" ? "Switch to English" : "Ubah ke Bahasa Indonesia"}
        >
          <FiGlobe className="lang-globe-icon" />
          <div className="lang-track">
            <button
              type="button"
              className={`lang-segment ${lang === "id" ? "active" : ""}`}
              onClick={() => setLang("id")}
            >
              <span className="lang-flag">🇮🇩</span>
              <span>ID</span>
            </button>
            <button
              type="button"
              className={`lang-segment ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              <span className="lang-flag">🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;