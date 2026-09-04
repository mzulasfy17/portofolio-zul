import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Typewriter({
  words: customWords,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1800,
}) {
  const { t } = useLanguage();
  const defaultWords = t("home.typewriter") || [
    "Informatics Engineering",
    "Front End & Mobile Dev",
    "UI/UX & Tech Enthusiast",
    "AI & NLP Explorer",
  ];
  
  const words = customWords || defaultWords;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset index if words array changes (e.g. on language change)
    if (currentWordIndex >= words.length) {
      setCurrentWordIndex(0);
      setCurrentText("");
    }
  }, [words, currentWordIndex]);

  useEffect(() => {
    const currentWord = words[currentWordIndex] || "";

    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <div className="retro-typewriter-badge">
      <span className="typewriter-prompt">&gt;</span>
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor">_</span>
    </div>
  );
}

export default Typewriter;
