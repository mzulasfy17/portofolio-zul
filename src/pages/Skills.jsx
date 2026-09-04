import {
  FiMonitor,
  FiSmartphone,
  FiDatabase,
  FiCode,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiRepeat,
  FiUsers,
  FiAward,
  FiSettings,
  FiMapPin,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";

import { FaLightbulb } from "react-icons/fa";
import { SiReact, SiAndroid } from "react-icons/si";

import WindowButtons from "../components/WindowButtons";
import PandaAssistant from "../components/PandaAssistant";
import { useLanguage } from "../context/LanguageContext";

import "./Skills.css";
import "../index.css";

function Skills() {
  const { t } = useLanguage();

  const technicalSkills = [
    {
      category: "WEB DEVELOPMENT",
      icon: <FiMonitor />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "MOBILE DEVELOPMENT",
      icon: <FiSmartphone />,
      skills: ["Kotlin", "Java", "Android Studio"],
    },
    {
      category: "DATABASE & TOOLS",
      icon: <FiDatabase />,
      skills: ["MySQL", "Firebase", "Git & GitHub", "Figma"],
    },
  ];

  const personalIcons = [
    <FaLightbulb />,
    <FiMessageSquare />,
    <FiClock />,
    <FiRepeat />,
    <FiUsers />,
  ];

  const rawPersonal = t("skillsPage.personalList") || [];
  const personalSkills = rawPersonal.map((item, index) => ({
    ...item,
    icon: personalIcons[index % personalIcons.length],
  }));

  const certIcons = [<FiAward />, <SiReact />, <SiAndroid />];
  const certClasses = ["", "react-badge", "android-badge"];
  const rawCerts = t("skillsPage.certs") || [];
  const certificates = Array.isArray(rawCerts)
    ? rawCerts.map((cert, index) => ({
        ...cert,
        icon: certIcons[index % certIcons.length],
        badgeClass: certClasses[index % certClasses.length],
        link: cert.link || "#",
      }))
    : [];

  return (
    <div className="skills-page">
      <div className="skills-layout">
        
        {/* =========================================================
            LEFT COLUMN
        ========================================================= */}
        <div className="skills-left-col">
          
          {/* SKILLS.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>SKILLS.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content skills-hero-card">
              <div className="skills-hero-img-container">
                <div className="walking-status-tag">
                  <span>{t("home.walking")}</span>
                </div>
                <img
                  src="/images/avatar.png"
                  alt="My Skills"
                  className="skills-hero-img"
                />
                <div className="experience-ground-line"></div>
              </div>

              <h2 className="skills-title">{t("skillsPage.title")}</h2>
              <div className="skills-title-divider"></div>
              
              <p className="skills-subtitle">
                {t("skillsPage.subtitle")}
              </p>
            </div>
          </div>

          {/* STATUS.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>STATUS.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content">
              <div className="status-list">
                
                <div className="status-item">
                  <div className="status-icon">
                    <FiMapPin />
                  </div>
                  <div className="status-info">
                    <span className="status-label">{t("home.status.locationLabel")}</span>
                    <span className="status-value">{t("skillsPage.statusLocation")}</span>
                  </div>
                </div>

                <div className="status-item">
                  <div className="status-icon">
                    <FiBookOpen />
                  </div>
                  <div className="status-info">
                    <span className="status-label">{t("home.status.eduLabel")}</span>
                    <span className="status-value">{t("skillsPage.statusEdu")}</span>
                  </div>
                </div>

                <div className="status-item">
                  <div className="status-icon">
                    <FiCheckCircle />
                  </div>
                  <div className="status-info">
                    <span className="status-label">{t("home.status.statusLabel")}</span>
                    <span className="status-value status-badge-open">
                      <span className="green-dot"></span> {t("skillsPage.statusVal")}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* =========================================================
            RIGHT COLUMN
        ========================================================= */}
        <div className="skills-main-col">

          {/* KEAHLIAN TEKNIS WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <div className="window-title-with-icon">
                <FiSettings />
                <span>{t("skillsPage.techTitle")}</span>
              </div>
              <WindowButtons />
            </div>

            <div className="window-content">
              <div className="technical-skills-grid">
                {technicalSkills.map((cat, idx) => (
                  <div
                    className="tech-card"
                    key={idx}
                    style={{ "--skill-idx": idx }}
                  >
                    <div className="tech-card-header">
                      <div className="tech-card-icon">{cat.icon}</div>
                      <h3 className="tech-card-title">{cat.category}</h3>
                    </div>
                    <div className="tech-pills">
                      {cat.skills.map((skill, sIdx) => (
                        <span className="tech-pill" key={sIdx}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KEAHLIAN PERSONAL WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <div className="window-title-with-icon">
                <FiUser />
                <span>{t("skillsPage.personalTitle")}</span>
              </div>
              <WindowButtons />
            </div>

            <div className="window-content">
              <div className="personal-skills-grid">
                {personalSkills.map((ps, idx) => (
                  <div
                    className="personal-card"
                    key={idx}
                    style={{ "--personal-idx": idx }}
                  >
                    <div className="personal-icon">{ps.icon}</div>
                    <h4 className="personal-title">{ps.title}</h4>
                    <p className="personal-desc">{ps.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERTIFIKAT PELATIHAN WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <div className="window-title-with-icon">
                <FiAward />
                <span>{t("skillsPage.certTitle")}</span>
              </div>
              <WindowButtons />
            </div>

            <div className="window-content">
              <div className="certificates-grid">
                {certificates.map((cert, idx) => (
                  <div
                    className="certificate-card"
                    key={idx}
                    style={{ "--cert-idx": idx }}
                  >
                    <div className="cert-header">
                      <div className={`cert-badge-icon ${cert.badgeClass}`}>
                        {cert.icon}
                      </div>
                      <div className="cert-info">
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-meta">
                          {cert.issuer} • {cert.year}
                        </span>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      {t("skillsPage.viewCert")}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <PandaAssistant />
    </div>
  );
}

export default Skills;