import { useState, useEffect } from "react";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="retro-scroll-tracker" title={`Scroll: ${Math.round(scrollProgress)}%`}>
      <div
        className="retro-scroll-bar-fill"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
