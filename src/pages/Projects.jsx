import { useState, useEffect } from "react";
import {
  FiFolder,
  FiGrid,
  FiMonitor,
  FiSmartphone,
  FiMoreHorizontal,
  FiMapPin,
  FiGithub,
  FiFileText,
  FiLayers,
  FiX,
  FiCode,
  FiDatabase,
  FiPieChart,
  FiBookmark,
  FiExternalLink,
  FiBookOpen,
  FiCpu,
} from "react-icons/fi";

import {
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiBootstrap,
  SiFigma,
  SiReact,
  SiJavascript,
} from "react-icons/si";

import WindowButtons from "../components/WindowButtons";
import PandaAssistant from "../components/PandaAssistant";
import { useLanguage } from "../context/LanguageContext";

import "../index.css";
import "./Projects.css";

const baseProjectsMeta = [
  {
    id: "linguatales",
    categoryKey: "mobile",
    badgeClass: "badge-mobile",
    featured: true,
    image: "/images/linguatales.png",
    fallbackImage: "/images/project-linguatales.png",
    techStack: [
      { name: "Kotlin", icon: <SiKotlin className="tech-icon-kotlin" /> },
      { name: "Retrofit", icon: <FiCode className="tech-icon-retrofit" /> },
      { name: "SQL", icon: <FiDatabase className="tech-icon-sql" /> },
      { name: "NLP", icon: <FiCpu className="tech-icon-nlp" /> },
    ],
    primaryAction: {
      type: "github",
      label: "GITHUB",
      icon: <FiGithub />,
      url: "https://github.com/mzulasfy17/LinguaTales2",
    },
  },
  {
    id: "brk-syariah",
    categoryKey: "uiux",
    badgeClass: "badge-uiux",
    featured: false,
    image: "/images/cms-brks.png",
    fallbackImage: "/images/cms-brks.png",
    techStack: [
      { name: "Figma", icon: <SiFigma className="tech-icon-figma" /> },
    ],
    primaryAction: {
      type: "figma",
      label: "FIGMA",
      icon: <FiExternalLink />,
      url: "https://www.figma.com/design/VSQ126GlOxCLD2Wj1TEJLR/CMS-BRKS?node-id=185-681&t=ZyowXAZuCjMMcRcI-1",
    },
  },
  {
    id: "E-Rehabcare",
    categoryKey: "uiux",
    badgeClass: "badge-uiux",
    featured: false,
    image: "/images/E-Rehabcare.png",
    fallbackImage: "/images/E-Rehabcare.png",
    techStack: [
      { name: "Figma", icon: <SiFigma className="tech-icon-figma" /> },
    ],
    primaryAction: {
      type: "figma",
      label: "FIGMA",
      icon: <FiExternalLink />,
      url: "https://www.figma.com/design/OXSGzLv8tLChGXezYSs3gb/E-Rehabcare-RSJ-Tampan?node-id=0-1&t=ZyowXAZuCjMMcRcI-1",
    },
  },
  {
    id: "portofolio",
    categoryKey: "web",
    badgeClass: "badge-web",
    featured: false,
    image: "/images/portofolio.png",
    fallbackImage: "/images/portofolio.png",
    techStack: [
      { name: "React", icon: <SiReact className="tech-icon-react" /> },
      { name: "CSS", icon: <FiCode className="tech-icon-css" /> },
      { name: "JS", icon: <SiJavascript className="tech-icon-js" /> },
    ],
    primaryAction: {
      type: "website",
      label: "WEBSITE",
      icon: <FiExternalLink />,
      url: "https://portofolio-zulasfi.vercel.app/",
    },
  },
  {
    id: "LinguaTales-Paper",
    categoryKey: "research",
    badgeClass: "badge-research",
    featured: false,
    image: "/images/paper.png",
    fallbackImage: "/images/paper.png",
    techStack: [
      { name: "Research", icon: <FiBookOpen className="tech-icon-research" /> },
    ],
    primaryAction: {
      type: "publication",
      label: "PAPER",
      icon: <FiExternalLink />,
      url: "https://ejurnal.seminar-id.com/index.php/tin/article/view/10065",
    },
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const openModal = (project) => {
    setSelectedProject(project);
    window.history.pushState({ modalOpen: true }, "");
  };

  const closeModal = () => {
    if (selectedProject) {
      if (window.history.state?.modalOpen) {
        window.history.back();
      } else {
        setSelectedProject(null);
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedProject]);

  const filters = [
    { id: "all", label: t("projectsPage.filters.all"), icon: <FiGrid size={18} /> },
    { id: "mobile", label: t("projectsPage.filters.mobile"), icon: <FiSmartphone size={18} /> },
    { id: "web", label: t("projectsPage.filters.web"), icon: <FiMonitor size={18} /> },
    { id: "uiux", label: t("projectsPage.filters.uiux"), icon: <FiLayers size={18} /> },
    { id: "research", label: t("projectsPage.filters.research"), icon: <FiBookOpen size={18} /> },
  ];

  const projectsData = baseProjectsMeta.map((p) => {
    const key = p.id.toLowerCase().replace(/[^a-z0-9]/g, "");
    return {
      ...p,
      title: t(`projectsPage.projectsList.${key}.title`),
      category: t(`projectsPage.projectsList.${key}.category`),
      description: t(`projectsPage.projectsList.${key}.description`),
      longDescription: t(`projectsPage.projectsList.${key}.longDescription`),
    };
  });

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categoryKey === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-layout">
        
        {/* =========================================================
            LEFT COLUMN (PROFILE.EXE, FILTER.EXE, NOTE.EXE)
        ========================================================= */}
        <div className="projects-left-col">
          
          {/* PROFILE.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>PROFILE.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content profile-card-content">
              <div className="profile-img-box">
                <div className="walking-status-tag">
                  <span>{t("home.walking")}</span>
                </div>
                <img
                  src="/images/avatar.png"
                  alt="Informatics Engineer Avatar"
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/avatar.png";
                  }}
                />
                <div className="experience-ground-line"></div>
              </div>

              <h2 className="profile-role-title">{t("projectsPage.profileRole")}</h2>
              
              <p className="profile-desc">
                {t("projectsPage.profileDesc")}
              </p>

              <div className="profile-details-list">
                <div className="profile-detail-item">
                  <span className="profile-detail-icon">
                    <FiMapPin />
                  </span>
                  <span>{t("skillsPage.statusLocation")}</span>
                </div>

                <div className="profile-detail-item">
                  <span className="status-indicator">
                    <span className="green-dot-pulse"></span> {t("projectsPage.statusVal")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FILTER.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>FILTER.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content">
              <div className="filter-list">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`filter-btn ${
                      activeFilter === filter.id ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter.id)}
                    type="button"
                  >
                    <span className="filter-btn-icon">{filter.icon}</span>
                    <span>{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* NOTE.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>NOTE.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content note-content-box">
              <div className="note-quote-icon">“</div>
              <p className="note-quote-text">
                {t("projectsPage.quote")}
              </p>

              <div className="note-plant-decoration">
                <svg
                  className="pixel-plant-svg"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" y="24" width="16" height="12" fill="#5885c7" />
                  <rect x="6" y="22" width="20" height="4" fill="#3b69ab" />
                  <rect x="10" y="34" width="12" height="2" fill="#254a80" />
                  <rect x="15" y="12" width="2" height="10" fill="#38a169" />
                  <rect x="10" y="14" width="5" height="4" fill="#48bb78" />
                  <rect x="17" y="10" width="6" height="4" fill="#48bb78" />
                  <rect x="12" y="8" width="5" height="5" fill="#38a169" />
                  <rect x="15" y="4" width="4" height="5" fill="#2f855a" />
                </svg>
              </div>
            </div>
          </div>

        </div>


        {/* =========================================================
            RIGHT COLUMN (PROJECTS.EXE)
        ========================================================= */}
        <div className="projects-main-col">
          <div className="retro-window">
            <div className="window-titlebar">
              <span>PROJECTS.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content">
              {/* Header Title inside PROJECTS.EXE */}
              <div className="projects-header-area">
                <div className="projects-title-row">
                  <FiFolder className="projects-folder-icon" />
                  <h1 className="projects-main-heading">{t("projectsPage.headerTitle")}</h1>
                </div>
                <p className="projects-subheading">
                  {t("projectsPage.headerSub")}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid">
                {filteredProjects.map((project, idx) => (
                  <div
                    className="project-card"
                    key={project.id}
                    style={{ "--project-idx": idx }}
                  >
                    <div className="card-img-wrapper">
                      {project.featured && (
                        <div className="card-ribbon-tag">
                          <FiBookmark />
                        </div>
                      )}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = project.fallbackImage;
                        }}
                      />
                    </div>

                    <div className="card-body">
                      <span className={`card-badge ${project.badgeClass}`}>
                        {project.category}
                      </span>

                      <h3 className="card-title">{project.title}</h3>

                      <p className="card-description">
                        {project.description}
                      </p>

                      <div className="card-tech-list">
                        {project.techStack.map((tech, tIdx) => (
                          <span className="tech-pill-item" key={tIdx}>
                            <span className="tech-pill-icon">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>

                      <div className="card-actions">
                        <button
                          type="button"
                          className="btn-details"
                          onClick={() => openModal(project)}
                        >
                          <FiFileText />
                          <span>{t("projectsPage.detailBtn")}</span>
                        </button>

                        <a
                          href={project.primaryAction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary-action"
                          onClick={(e) => {
                            if (project.primaryAction.url === "#") {
                              e.preventDefault();
                            }
                          }}
                        >
                          {project.primaryAction.icon}
                          <span>{project.primaryAction.label}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================
          RETRO MODAL FOR DETAILS
      ========================================================= */}
      {selectedProject && (
        <div
          className="retro-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="retro-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <span className="modal-title">{selectedProject.title}.EXE</span>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image-box">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = selectedProject.fallbackImage;
                  }}
                />
              </div>

              <span className={`card-badge ${selectedProject.badgeClass}`}>
                {selectedProject.category}
              </span>

              <h2 className="modal-heading-title">{selectedProject.title}</h2>

              <p className="modal-description">
                {selectedProject.longDescription}
              </p>

              <div className="modal-tech-section">
                <h4 className="modal-subtitle">{t("projectsPage.techStackLabel")}</h4>
                <div className="card-tech-list">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span className="tech-pill-item" key={tIdx}>
                      <span className="tech-pill-icon">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-footer-actions">
                {selectedProject.primaryAction.url !== "#" && (
                  <a
                    href={selectedProject.primaryAction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action-btn primary"
                  >
                    {selectedProject.primaryAction.icon}
                    <span>OPEN {selectedProject.primaryAction.label}</span>
                  </a>
                )}

                <button
                  type="button"
                  className="modal-action-btn secondary"
                  onClick={closeModal}
                >
                  {t("projectsPage.closeBtn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer & Panda Voice Assistant */}
      <PandaAssistant />
    </div>
  );
}

export default Projects;