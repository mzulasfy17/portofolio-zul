import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FiPlay, FiVolume2, FiMove, FiX, FiSliders } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

/** Helper to return country flag for a voice */
function getVoiceFlag(voice) {
  if (!voice) return "🌐";
  const l = (voice.lang || "").toLowerCase();
  const n = (voice.name || "").toLowerCase();
  if (l.startsWith("id") || n.includes("indonesi")) return "🇮🇩";
  if (l.includes("us") || n.includes("united states") || n.includes("us english")) return "🇺🇸";
  if (l.startsWith("en")) return "🇺🇸";
  return "🌐";
}

/**
 * Filter voices based on user requirements:
 * - Indonesian: max 2 Indonesian voices
 * - English: United States (en-US) voices only
 */
function filterVoicesByLanguage(allVoices, currentLang) {
  if (!allVoices || allVoices.length === 0) return [];

  if (currentLang === "en") {
    const enUsVoices = allVoices.filter((v) => {
      const l = (v.lang || "").toLowerCase();
      const n = (v.name || "").toLowerCase();
      return (
        l === "en-us" ||
        l === "en_us" ||
        n.includes("united states") ||
        n.includes("us english")
      );
    });

    if (enUsVoices.length > 0) {
      return enUsVoices.slice(0, 2);
    }
    return allVoices
      .filter((v) => /^en[-_]?us$/i.test(v.lang) || /^en/i.test(v.lang))
      .slice(0, 2);
  }

  // Indonesian: max 2 Indonesian voices only
  const idVoices = allVoices.filter(
    (v) => /^id/i.test(v.lang) || /indonesi/i.test(v.name)
  );

  if (idVoices.length > 0) {
    return idVoices.slice(0, 2);
  }

  return allVoices.slice(0, 2);
}

/** Picks the best voice from filtered list */
function getBestVoice(customVoices, targetLang = "id") {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const allVoices = customVoices || window.speechSynthesis.getVoices();
  const available = filterVoicesByLanguage(allVoices, targetLang);
  if (!available || !available.length) return null;

  return (
    available.find((v) => /google/i.test(v.name)) ||
    available.find((v) => /microsoft/i.test(v.name) && /natural|online/i.test(v.name)) ||
    available[0]
  );
}

function PandaAssistant() {
  const location = useLocation();
  const { lang, t } = useLanguage();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState("");
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });
  const isCancelledRef = useRef(false);

  /* ── Stop speech helper ── */
  const stopSpeech = useCallback((e) => {
    if (e) e.stopPropagation();
    isCancelledRef.current = true;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  /* ── Load available voices & auto-select best for current lang ── */
  useEffect(() => {
    const loadVoices = () => {
      if (!("speechSynthesis" in window)) return;
      const vList = window.speechSynthesis.getVoices();
      if (vList && vList.length > 0) {
        setVoices(vList);
        const best = getBestVoice(vList, lang);
        if (best) {
          setSelectedVoiceURI(best.voiceURI);
        }
      }
    };

    loadVoices();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    }
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      }
    };
  }, [lang]);

  /* ── Stop speech on page change or language change ── */
  useEffect(() => {
    stopSpeech();
  }, [location.pathname, lang, stopSpeech]);

  /* ── Chrome keep-alive interval to prevent synthesis freeze ── */
  useEffect(() => {
    let intervalId;
    if (isPlaying && "speechSynthesis" in window) {
      intervalId = setInterval(() => {
        if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }, 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  const handleMouseDown = (e) => {
    if (e.target.closest("button") || e.target.closest("select")) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.initialX + dx,
        y: dragRef.current.initialY + dy,
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e) => {
    if (e.target.closest("button") || e.target.closest("select")) return;
    const touch = e.touches[0];
    setIsDragging(true);
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragRef.current.startX;
    const dy = touch.clientY - dragRef.current.startY;
    setPosition({
      x: dragRef.current.initialX + dx,
      y: dragRef.current.initialY + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  /* ── Current Narration Text ── */
  const path = location.pathname.replace(/\/$/, "") || "/";
  const narrationText = t(`panda.scripts.${path}`) || t("panda.scripts./");

  /* ── Filtered Voices for Current Language ── */
  const displayVoices = filterVoicesByLanguage(voices, lang);

  /* ── Speak Function ── */
  const speakPage = (e) => {
    if (e) e.stopPropagation();
    if (!("speechSynthesis" in window)) return;

    // Reset cancel flag for new playback session
    isCancelledRef.current = false;
    window.speechSynthesis.cancel();
    setIsPlaying(true);

    // Split text into sentences to avoid Chrome 15-second timeout bug
    const sentences = narrationText
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (sentences.length === 0) {
      setIsPlaying(false);
      return;
    }

    // Determine target voice matching current language
    let activeVoice = displayVoices.find((v) => v.voiceURI === selectedVoiceURI);
    if (!activeVoice) {
      activeVoice = getBestVoice(voices, lang);
    }

    let currentIndex = 0;

    const speakChunk = () => {
      if (isCancelledRef.current) {
        setIsPlaying(false);
        return;
      }

      if (currentIndex >= sentences.length) {
        setIsPlaying(false);
        return;
      }

      const chunk = sentences[currentIndex];
      const speech = new SpeechSynthesisUtterance(chunk);

      if (activeVoice) {
        speech.voice = activeVoice;
        speech.lang = activeVoice.lang;
      } else {
        speech.lang = lang === "en" ? "en-US" : "id-ID";
      }

      speech.rate = 1.0;
      speech.pitch = 1.05;
      speech.volume = 1.0;

      speech.onend = () => {
        if (isCancelledRef.current) return;
        currentIndex++;
        if (currentIndex < sentences.length) {
          speakChunk();
        } else {
          setIsPlaying(false);
        }
      };

      speech.onerror = (err) => {
        if (isCancelledRef.current) return;
        console.warn("TTS warning:", err);
        currentIndex++;
        if (currentIndex < sentences.length) {
          speakChunk();
        } else {
          setIsPlaying(false);
        }
      };

      window.speechSynthesis.speak(speech);
    };

    speakChunk();
  };

  return (
    <aside
      className={`panda-mini-assistant ${isDragging ? "is-dragging" : ""} ${
        isExpanded ? "is-expanded" : "is-collapsed"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >


      {/* Voice Selection Settings Modal */}
      {isExpanded && showSettings && (
        <div className="mini-speech-popup voice-settings-popup">
          <div className="speech-popup-header">
            <span>{t("panda.voiceTitle")}</span>
            <button
              type="button"
              className="speech-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowSettings(false);
              }}
              title="Close Settings"
            >
              <FiX />
            </button>
          </div>

          <div className="voice-select-wrapper">
            <label htmlFor="panda-voice-select">{t("panda.selectLangLabel")}</label>
            <select
              id="panda-voice-select"
              value={selectedVoiceURI}
              onChange={(e) => {
                setSelectedVoiceURI(e.target.value);
              }}
              className="panda-voice-select"
            >
              {displayVoices.length === 0 ? (
                <option value="">{t("panda.defaultVoice")}</option>
              ) : (
                displayVoices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {getVoiceFlag(v)} {v.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="speech-popup-tail"></div>
        </div>
      )}

      {/* COLLAPSED FLOATING BUTTON (JUST PANDA HEAD) */}
      {!isExpanded ? (
        <button
          type="button"
          className={`panda-head-trigger-btn ${isPlaying ? "playing" : ""}`}
          onClick={() => setIsExpanded(true)}
          title={t("panda.openBtnTitle")}
        >
          <img
            src="/images/panda-avatar.png"
            alt="Panda AI"
            className="panda-trigger-img"
          />
          <span className="panda-trigger-dot"></span>
        </button>
      ) : (
        /* EXPANDED FULL BAR */
        <div className="panda-compact-bar">
          <div className="panda-drag-icon" title={t("panda.dragTitle")}>
            <FiMove />
          </div>

          {/* Real Pixel Panda Head Avatar */}
          <div
            className="panda-head-avatar-real"
            onClick={() => setShowSettings(!showSettings)}
            title={t("panda.settingsTitle")}
          >
            <img
              src="/images/panda-avatar.png"
              alt="Panda AI"
              className="panda-avatar-img"
            />
          </div>

          {/* Text Title */}
          <div
            className="panda-text-badge"
            onClick={() => setShowSettings(!showSettings)}
          >
            <span className="panda-name">PANDA AI</span>
            <span className="panda-subtext">
              <span className="dot-green"></span> ASSISTANT
            </span>
          </div>

          {/* Controls */}
          <div className="panda-compact-actions">
            <button
              type="button"
              className="panda-settings-btn"
              aria-label={t("panda.settingsTitle")}
              onClick={(e) => {
                e.stopPropagation();
                setShowSettings(!showSettings);
              }}
              title={t("panda.settingsTitle")}
            >
              <FiSliders />
            </button>

            <button
              type="button"
              className={`panda-play-btn ${isPlaying ? "playing" : ""}`}
              aria-label="Play Panda Voice"
              onClick={isPlaying ? stopSpeech : speakPage}
              title={isPlaying ? t("panda.stop") : t("panda.play")}
            >
              {isPlaying ? <FiVolume2 /> : <FiPlay />}
            </button>

            <button
              type="button"
              className="panda-close-btn"
              aria-label={t("panda.close")}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
                setShowSettings(false);
              }}
              title={t("panda.close")}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default PandaAssistant;