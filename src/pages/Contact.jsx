import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMessageSquare,
  FiSend,
  FiMapPin,
  FiMail,
  FiCheck,
} from "react-icons/fi";

import WindowButtons from "../components/WindowButtons";
import PandaAssistant from "../components/PandaAssistant";
import { useLanguage } from "../context/LanguageContext";

import "../index.css";
import "./Contact.css";

// Credentials loaded from environment or default constants
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_portfolio";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

function Contact() {
  const formRef = useRef();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(t("contactPage.alertFillFields"));
      return;
    }
    
    setIsSending(true);

    // Provide all common EmailJS variable aliases for name and email
    const templateParams = {
      from_name: formData.name,
      user_name: formData.name,
      name: formData.name,
      to_name: "Muhammad Zul Asfi",

      from_email: formData.email,
      user_email: formData.email,
      email: formData.email,
      reply_to: formData.email,

      subject: formData.subject || `Pesan dari Portofolio (${formData.name})`,
      message: formData.message,
    };

    // If EmailJS Public Key is set, send directly via EmailJS
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("EmailJS Success:", result.text);
            setIsSending(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            console.error("EmailJS Error:", error);
            sendViaMailto();
          }
        );
    } else {
      // Direct fallback via Email Client / mailto link
      sendViaMailto();
    }
  };

  const sendViaMailto = () => {
    const recipient = "m.zulasfy17@gmail.com";
    const subjectText = formData.subject
      ? `[PORTOFOLIO] ${formData.subject}`
      : `[PORTOFOLIO] Pesan dari ${formData.name}`;
    const bodyText =
      `Nama Pengirim: ${formData.name}\n` +
      `Email Pengirim: ${formData.email}\n` +
      `Subjek: ${formData.subject || "-"}\n\n` +
      `Isi Pesan:\n${formData.message}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setIsSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  return (
    <div className="contact-page">
      <div className="contact-layout">
        
        {/* =========================================================
            LEFT COLUMN (PROFILE.EXE ONLY)
        ========================================================= */}
        <div className="contact-left-col">
          
          {/* PROFILE.EXE WINDOW */}
          <div className="retro-window">
            <div className="window-titlebar">
              <span>PROFILE.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content contact-profile-content">
              <div className="contact-profile-img-box">
                <div className="walking-status-tag">
                  <span>{t("home.walking")}</span>
                </div>
                <img
                  src="/images/avatar.png"
                  alt="M. Zul Asfi Avatar"
                  className="contact-profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/avatar.png";
                  }}
                />
                <div className="experience-ground-line"></div>
              </div>

              <h2 className="contact-profile-role">{t("contactPage.profileRole")}</h2>

              <p className="contact-profile-desc">
                {t("contactPage.profileDesc")}
              </p>

              <div className="contact-profile-divider"></div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <FiMapPin />
                  </span>
                  <span>{t("skillsPage.statusLocation")}</span>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <FiMail />
                  </span>
                  <a href="mailto:m.zulasfy17@gmail.com">m.zulasfy17@gmail.com</a>
                </div>

                <div className="contact-info-item">
                  <span className="status-indicator">
                    <span className="green-dot-pulse"></span> {t("projectsPage.statusVal")}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* =========================================================
            RIGHT COLUMN (CONTACT.EXE WINDOW WITH ANIMATIONS)
        ========================================================= */}
        <div className="contact-main-col">
          <div className="retro-window">
            <div className="window-titlebar">
              <span>CONTACT.EXE</span>
              <WindowButtons />
            </div>

            <div className="window-content">
              {/* Header Title inside CONTACT.EXE */}
              <div className="contact-header-area">
                <div className="contact-title-row">
                  <div className="contact-bubble-icon">
                    <FiMessageSquare />
                  </div>
                  <h1 className="contact-main-heading">{t("contactPage.headerTitle")}</h1>
                </div>
                <p className="contact-subheading">
                  {t("contactPage.headerSub")}
                </p>
              </div>

              {/* Grid: Form Left, Mailbox Right */}
              <div className="contact-inner-grid">
                
                {/* Form */}
                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">{t("contactPage.nameLabel")}</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="from_name"
                      className="form-input"
                      placeholder={t("contactPage.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => {
                        handleChange({ target: { name: "name", value: e.target.value } });
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">{t("contactPage.emailLabel")}</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="from_email"
                      className="form-input"
                      placeholder={t("contactPage.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => {
                        handleChange({ target: { name: "email", value: e.target.value } });
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">{t("contactPage.subjectLabel")}</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      className="form-input"
                      placeholder={t("contactPage.subjectPlaceholder")}
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">{t("contactPage.messageLabel")}</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      rows={5}
                      placeholder={t("contactPage.messagePlaceholder")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`btn-send-message ${
                      isSending ? "sending" : ""
                    } ${submitted ? "submitted" : ""}`}
                    disabled={isSending || submitted}
                  >
                    {submitted ? (
                      <>
                        <FiCheck /> {t("contactPage.sentBtn")}
                      </>
                    ) : isSending ? (
                      t("contactPage.sendingBtn")
                    ) : (
                      <>
                        <FiSend /> {t("contactPage.sendBtn")}
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="form-success-alert">
                      {t("contactPage.successAlert")}
                    </div>
                  )}

                </form>

                {/* Mailbox Illustration */}
                <div className="contact-illustration-side">
                  <div className="mailbox-img-box">
                    <img
                      src="/images/mailbox.jpg"
                      alt="Pixel Mailbox Illustration"
                      className="mailbox-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/mailbox.png";
                      }}
                    />
                  </div>

                  <div className="response-info-card">
                    <p>
                      {t("contactPage.mailboxText")}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer & Panda Voice Assistant */}
      <PandaAssistant />
    </div>
  );
}

export default Contact;