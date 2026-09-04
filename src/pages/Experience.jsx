import { useState } from "react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Building2,
  MapPin,
  Star,
  Grid2X2,
  Quote,
} from "lucide-react";

import Window from "../components/Window";
import PandaAssistant from "../components/PandaAssistant";
import { useLanguage } from "../context/LanguageContext";

import "../index.css";
import "./Experience.css";

function Experience() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t("experiencePage.all"), icon: <Grid2X2 size={18} /> },
    { id: "education", label: t("experiencePage.education"), icon: <GraduationCap size={18} /> },
    { id: "internship", label: t("experiencePage.internship"), icon: <BriefcaseBusiness size={18} /> },
    { id: "organization", label: t("experiencePage.organization"), icon: <Users size={18} /> },
  ];

  const rawItems = t("experiencePage.items") || [];
  const getExperienceIcon = (typeClass) => {
    switch (typeClass) {
      case "education":
        return <GraduationCap size={32} />;
      case "internship":
        return <BriefcaseBusiness size={32} />;
      case "organization":
        return <Users size={32} />;
      default:
        return <BriefcaseBusiness size={32} />;
    }
  };

  const experiences = rawItems.map((item) => ({
    ...item,
    icon: getExperienceIcon(item.typeClass),
  }));

  const filteredExperiences = experiences.filter(
    (item) => activeCategory === "all" || item.typeClass === activeCategory
  );

  return (
    <>
      <div className="experience-page">

        {/* LEFT SIDEBAR */}
        <aside className="experience-sidebar">

          <Window title="EXP_LEVEL.EXE" className="experience-level-window">
            <div className="level-heading">
              <Star size={23} fill="currentColor" />
              <span>{t("experiencePage.levelTitle")}</span>
            </div>

            <div className="level-number">
              <strong>Lv. 10</strong>
              <span>1200 / 1500 XP</span>
            </div>

            <div className="xp-bar">
              <div className="xp-progress"></div>
            </div>
          </Window>


          <Window title={t("experiencePage.categoriesTitle")} className="categories-window">
            <div className="experience-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-item ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            <div className="experience-side-image">
              <div className="walking-status-tag">
                <span>{t("home.walking")}</span>
              </div>
              <img
                src="/images/experience.png"
                alt="Zul working with laptop"
              />
              <div className="experience-ground-line"></div>
            </div>
          </Window>


          <Window title="NOTE.EXE" className="note-window">
            <Quote
              size={28}
              className="quote-icon"
              fill="currentColor"
            />

            <p>{t("experiencePage.note")}</p>

            <div className="note-heart">♡</div>
          </Window>

        </aside>


        {/* MAIN EXPERIENCE */}
        <Window title="✦ EXPERIENCE.EXE" className="experience-main-window">

          <div className="experience-header">
            <div>
              <h1>{t("experiencePage.headerTitle")}</h1>
              <p>{t("experiencePage.headerSub")}</p>
            </div>
          </div>

          <div className="experience-divider"></div>

          <div className="experience-timeline">

            {filteredExperiences.map((item, index) => (
              <article
                className="experience-card"
                key={index}
                style={{ "--card-index": index }}
              >

                <div className="timeline-dot"></div>

                <div className="experience-card-icon">
                  {item.icon}
                </div>

                <div className="experience-card-content">

                  <div className="experience-card-title">
                    <h2>{item.title}</h2>

                    <span
                      className={`experience-badge ${item.typeClass}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3>{item.company}</h3>

                  <div className="experience-card-date">
                    {item.date}
                  </div>

                  {Array.isArray(item.description) ? (
                    <ul className="experience-card-points">
                      {item.description.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}

                </div>

                <div className="experience-card-meta">

                  <div>
                    <CalendarDays size={17} />
                    <span>{item.year}</span>
                  </div>

                  <div>
                    <Building2 size={17} />
                    <span>{item.place}</span>
                  </div>

                  <div>
                    <MapPin size={17} />
                    <span>{item.location}</span>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </Window>
      </div>

      {/* Footer Cityscape & Panda AI */}
      <PandaAssistant />
    </>
  );
}

export default Experience;