import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiBriefcase,
  FiCode,
  FiFolder,
  FiMail,
  FiDownload,
  FiMapPin,
  FiCalendar,
  FiStar,
  FiHeart,
  FiBookOpen,
  FiArrowUpRight,
  FiSend,
  FiClock,
  FiCheckCircle,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiFigma,
  SiGit,
  SiKotlin,
  SiAndroid,
  SiMysql,
} from "react-icons/si";


import Window from "../components/Window";
import PandaAssistant from "../components/PandaAssistant";
import Typewriter from "../components/Typewriter";
import { useLanguage } from "../context/LanguageContext";

import "../index.css";


/* =========================================================
   LIVE SYSTEM CLOCK
========================================================= */

function LiveClock() {
  const [timeStr, setTimeStr] = useState(() => {
    const now = new Date();

    return now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTimeStr(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="live-clock-digits">
      {timeStr} WIB
    </span>
  );
}


/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const technicalSkills = [
  {
    name: "HTML",
    icon: SiHtml5,
    className: "html-icon",
  },

  {
    name: "CSS",
    icon: FiCode,
    className: "css-icon",
  },

  {
    name: "JAVASCRIPT",
    icon: SiJavascript,
    className: "javascript-icon",
  },

  {
    name: "REACT",
    icon: SiReact,
    className: "react-icon",
  },

  {
    name: "FIGMA",
    icon: SiFigma,
    className: "figma-icon",
  },

  {
    name: "GIT",
    icon: SiGit,
    className: "git-icon",
  },

  {
    name: "KOTLIN",
    icon: SiKotlin,
    className: "kotlin-icon",
  },

  {
    name: "ANDROID",
    icon: SiAndroid,
    className: "android-icon",
  },

  {
    name: "MYSQL",
    icon: SiMysql,
    className: "mysql-icon",
  },
];


/* =========================================================
   CONTACT CTA
========================================================= */

function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section home-contact">
      <div className="quest-mission-banner">
        {/* Top Status Header */}
        <div className="quest-banner-header">
          <div className="quest-tag-badge">
            <span className="quest-dot-online"></span>
            <span>{t("home.contactCta.badge")}</span>
          </div>
          <span className="quest-system-code">SYS_ID #2026-ZUL</span>
        </div>

        {/* Main Content Body */}
        <div className="quest-banner-body">
          {/* Left Icon Orb */}
          <div className="quest-icon-orb">
            <FiSend className="quest-icon-svg" />
            <div className="quest-orb-glow"></div>
          </div>

          {/* Center Info Text */}
          <div className="quest-banner-info">
            <h2>{t("home.contactCta.heading")}</h2>
            <p>{t("home.contactCta.subheading")}</p>
            <div className="quest-badges-row">
              <span className="quest-badge">{t("home.contactCta.fastResponse")}</span>
              <span className="quest-badge">{t("home.contactCta.fullstackMobile")}</span>
              <span className="quest-badge">{t("home.contactCta.cleanUi")}</span>
            </div>
          </div>

          {/* Right Action CTA Buttons */}
          <div className="quest-banner-actions">
            <Link to="/contact" className="quest-primary-button">
              <span>{t("home.contactCta.letsTalk")}</span>
              <FiArrowUpRight className="quest-btn-arrow" />
            </Link>

            <a href="mailto:m.zulasfy17@email.com" className="quest-secondary-button">
              <FiMail />
              <span>{t("home.contactCta.sendEmail")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   HOME
========================================================= */

function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-page">

      {/* =================================================
          DECORATIVE STARS
      ================================================= */}

      <span className="sky-star star-one">
        ✦
      </span>

      <span className="sky-star star-two">
        ✧
      </span>

      <span className="sky-star star-three">
        ✦
      </span>

      <span className="sky-star star-four">
        ✧
      </span>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="main-content">


        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <Window
          title="WELCOME.EXE"
          className="welcome-window animated-welcome-card"
        >

          {/* =================================================
              WELCOME IMAGE
          ================================================= */}

          <div className="welcome-image">
            <div className="walking-status-tag">
              <span>{t("home.walking")}</span>
            </div>

            <div className="welcome-avatar-backdrop"></div>

            <img
              src="/images/avatar.png"
              alt="M. Zul Asfi Avatar"
              className="avatar-animated-img"
            />

            <div className="experience-ground-line"></div>
          </div>


          {/* =================================================
              WELCOME TEXT
          ================================================= */}

          <div className="welcome-text">

            <h2>
              {t("home.welcome")}
            </h2>

            <div className="portfolio-title">

              {t("home.portfolio")}

              <FiHeart />

            </div>

            <Typewriter />

          </div>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="pixel-divider"></div>


          {/* =================================================
              QUICK SKILLS
          ================================================= */}

          <div className="quick-skills">


            {/* UI/UX */}

            <div className="quick-skill">

              <div className="quick-icon">
                <FiStar />
              </div>

              <span>
                {t("home.quickSkills.uiux")}
              </span>

            </div>


            {/* MOBILE */}

            <div className="quick-skill">

              <div className="quick-icon">
                <FiBriefcase />
              </div>

              <span>
                {t("home.quickSkills.mobile")}
              </span>

            </div>


            {/* FRONT END */}

            <div className="quick-skill">

              <div className="quick-icon">
                <FiCode />
              </div>

              <span>
                {t("home.quickSkills.frontend")}
              </span>

            </div>

          </div>


          {/* =================================================
              DOWNLOAD CV
          ================================================= */}

          <a
            href="/CV Muhammad Zul Asfi.pdf"
            download
            className="cv-button"
          >

            <FiDownload />

            <span>
              {t("home.downloadCv")}
            </span>

          </a>

        </Window>


        {/* =================================================
            RIGHT COLUMN
        ================================================= */}

        <div className="right-column">


          {/* =================================================
              ABOUT
          ================================================= */}

          <section id="about">

            <Window
              title="ABOUT_ME.EXE"
              className="about-window about-walking-entrance"
            >

              <div className="section-heading">

                <span className="heading-icon animated-smile-icon">
                  ☻
                </span>

                <h2>
                  {t("home.aboutTitle")}
                </h2>

                <span className="about-walking-tag">

                  <span className="walking-man-pixel">
                    🚶‍♂️
                  </span>

                  {t("home.aboutWalking")}

                </span>

                <span className="about-terminal-tag">
                  SYSTEM_INFO.LOG
                </span>

              </div>


              <div className="about-text">

                <p className="about-p animated-p-1">

                  <span className="about-prompt-char">
                    &gt;
                  </span>

                  {t("home.aboutP1_1")}

                  <strong className="highlight-zul-name">
                    Muhammad Zul Asfi
                  </strong>

                  {t("home.aboutP1_2")}

                </p>


                <p className="about-p animated-p-2">

                  <span className="about-prompt-char">
                    &gt;
                  </span>

                  {t("home.aboutP2")}

                </p>


                <p className="about-p animated-p-3">

                  <span className="about-prompt-char">
                    &gt;
                  </span>

                  {t("home.aboutP3")}

                </p>


                <div className="about-tags-row">

                  <span className="about-badge badge-glow-green">

                    <span className="badge-dot dot-green-pulse"></span>

                    {t("home.badges.fullstack")}

                  </span>


                  <span className="about-badge badge-glow-blue">

                    <span className="badge-dot dot-blue-pulse"></span>

                    {t("home.badges.cleanCode")}

                  </span>


                  <span className="about-badge badge-glow-purple">

                    <span className="badge-dot dot-purple-pulse"></span>

                    {t("home.badges.ainlp")}

                  </span>

                </div>

              </div>

            </Window>

          </section>


          {/* =================================================
              EXPERIENCE PREVIEW
          ================================================= */}

          <section
            id="experience"
            className="preview-section"
          >

            <Window
              title="EXPERIENCE.EXE"
              className="experience-preview-window"
            >

              <div className="section-heading">

                <span className="heading-icon">
                  <FiBriefcase />
                </span>

                <h2>
                  {t("home.expPreview.title")}
                </h2>

                <Link
                  to="/experience"
                  className="view-all-button"
                >

                  {t("home.expPreview.viewAll")}

                  <FiArrowUpRight />

                </Link>

              </div>


              <div className="experience-preview">


                <div className="experience-date-box">
                  2025
                </div>


                <div className="experience-preview-content">

                  <h3>
                    PT. Bank Riau Kepri Syariah (Perseroda)
                  </h3>

                  <strong>
                    {t("home.expPreview.role")}
                  </strong>

                  <p>
                    {t("home.expPreview.desc")}
                  </p>

                </div>

              </div>

            </Window>

          </section>


          {/* =================================================
              BOTTOM GRID
          ================================================= */}

          <div className="bottom-grid">


            {/* =================================================
                SKILLS
            ================================================= */}

            <section id="skills">

              <Window
                title="SKILLS.EXE"
                className="skills-window"
              >

                <div className="section-heading">

                  <span className="heading-icon">
                    <FiStar />
                  </span>

                  <h2>
                    {t("home.skillsPreview.title")}
                  </h2>

                  <Link
                    to="/skills"
                    className="view-all-button"
                  >

                    {t("home.skillsPreview.viewAll")}

                    <FiArrowUpRight />

                  </Link>

                </div>


                <p className="technical-label">
                  {t("home.skillsPreview.technicalLabel")}
                </p>


                <div className="skills-preview">

                  {technicalSkills.map(
                    ({
                      name,
                      icon: Icon,
                      className,
                    }) => (

                      <div
                        className="skill-card"
                        key={name}
                      >

                        <Icon
                          className={className}
                        />

                        <span>
                          {name}
                        </span>

                      </div>

                    )
                  )}

                </div>


                <div className="pixel-divider small-divider"></div>


                <p className="skill-footer">

                  <FiHeart />

                  {t("home.skillsPreview.footer")}

                </p>

              </Window>

            </section>


            {/* =================================================
                STATUS
            ================================================= */}

            <Window
              title={t("home.status.title")}
              className="status-window"
            >

              <div className="status-system-bar">

                <span className="sys-status-label">
                  SYS_TIME:
                </span>

                <LiveClock />

              </div>


              {/* LOCATION */}

              <div className="status-item animated-status-item">

                <div className="status-icon-wrap">

                  <FiMapPin
                    className="status-svg"
                  />

                </div>


                <div>

                  <strong>
                    {t("home.status.locationLabel")}
                  </strong>

                  <p>
                    {t("home.status.locationVal")}
                  </p>

                </div>

              </div>


              <div className="status-line"></div>


              {/* EDUCATION */}

              <div className="status-item animated-status-item">

                <div className="status-icon-wrap">

                  <FiBookOpen
                    className="status-svg"
                  />

                </div>


                <div>

                  <strong>
                    {t("home.status.eduLabel")}
                  </strong>

                  <p>
                    {t("home.status.eduVal")}
                  </p>

                </div>

              </div>


              <div className="status-line"></div>


              {/* STATUS */}

              <div className="status-item animated-status-item active-status-card">

                <div className="status-icon-wrap status-pulse-icon">

                  <FiCalendar
                    className="status-svg"
                  />

                </div>


                <div>

                  <strong>
                    {t("home.status.statusLabel")}
                  </strong>

                  <p className="status-avail-text">

                    {t("home.status.statusVal")}

                    <span className="radar-ping-container">

                      <span className="radar-ping-wave"></span>

                      <span className="online-dot online-pulse-green"></span>

                    </span>

                  </p>

                </div>

              </div>

            </Window>

          </div>


          {/* =================================================
              PROJECT PREVIEW
          ================================================= */}

          <section
            id="projects"
            className="preview-section"
          >

            <Window
              title="PROJECTS.EXE"
              className="projects-window"
            >

              <div className="section-heading">

                <span className="heading-icon animated-folder-icon">

                  <FiFolder />

                </span>

                <h2>
                  {t("home.projectsPreview.title")}
                </h2>

                <Link
                  to="/projects"
                  className="view-all-button glow-hover-btn"
                >

                  {t("home.projectsPreview.viewAll")}

                  <FiArrowUpRight />

                </Link>

              </div>


              <div className="project-preview-card animated-project-card">


                {/* =================================================
                    PROJECT IMAGE
                ================================================= */}

                <div className="project-preview-image has-thumbnail">

                  <img
                    src="/images/linguatales.png"
                    alt="LinguaTales App Preview"
                    className="project-thumb-img"
                  />

                  <div className="project-scanline-fx"></div>

                  <span className="project-live-tag">

                    <span className="rec-blinking-dot"></span>

                    FEATURED_01

                  </span>

                </div>


                {/* =================================================
                    PROJECT INFO
                ================================================= */}

                <div className="project-preview-info">

                  <div>

                    <span className="project-label animated-shimmer-badge">
                      {t("home.projectsPreview.featuredLabel")}
                    </span>


                    <h3 className="project-card-heading">
                      LINGUATALES
                    </h3>


                    <p>
                      {t("home.projectsPreview.linguaDesc")}
                    </p>


                    <div className="project-tech">

                      <span className="tech-badge-animated">
                        KOTLIN
                      </span>

                      <span className="tech-badge-animated">
                        ANDROID
                      </span>

                      <span className="tech-badge-animated">
                        SQL
                      </span>

                    </div>

                  </div>


                  <Link
                    to="/projects"
                    className="project-detail-button animated-detail-btn"
                  >

                    <span>
                      {t("home.projectsPreview.detailsBtn")}
                    </span>

                    <FiArrowUpRight
                      className="detail-arrow-icon"
                    />

                  </Link>

                </div>

              </div>

            </Window>

          </section>

        </div>

      </main>


      {/* =================================================
          CONTACT CTA
      ================================================= */}

      <ContactCTA />


      {/* =================================================
          PANDA AI
      ================================================= */}

      <PandaAssistant />

    </div>
  );
}

export default Home;