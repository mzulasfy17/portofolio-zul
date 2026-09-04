import { useState, useEffect } from "react";

function BootScreen({ onComplete }) {
  const [bootStep, setBootStep] = useState(0);
  const [show, setShow] = useState(() => {
    // Show only once per browser session
    return !sessionStorage.getItem("zul_boot_screen_shown");
  });

  const bootLogs = [
    "ROM BIOS (C) 2026 ZUL_OS v3.2.0",
    "CPU: INFORMATICS_CORE @ 3.80GHz",
    "CHECKING RAM ................. 640KB OK",
    "LOADING SYSTEM MODULES ....... [DONE]",
    "INITIALIZING PANDA_AI.SYS .... [READY]",
    "MOUNTING /experience, /skills, /projects",
    "WELCOME MUHAMMAD ZUL ASFI PORTFOLIO READY!",
  ];

  useEffect(() => {
    if (!show) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < bootLogs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            handleDismiss();
          }, 600);
          return prev;
        }
      });
    }, 280);

    return () => clearInterval(interval);
  }, [show]);

  const handleDismiss = () => {
    sessionStorage.setItem("zul_boot_screen_shown", "true");
    setShow(false);
    if (onComplete) onComplete();
  };

  if (!show) return null;

  return (
    <div className="retro-boot-overlay" onClick={handleDismiss}>
      <div className="retro-boot-container">
        <div className="retro-boot-header">
          <span>⚡ ZUL_BIOS SETUP UTILITY</span>
          <span className="boot-esc-hint">[CLICK OR PRESS ESC TO SKIP]</span>
        </div>

        <div className="retro-boot-terminal">
          {bootLogs.slice(0, bootStep + 1).map((log, idx) => (
            <div key={idx} className="boot-line">
              <span className="boot-prompt">&gt;</span> {log}
            </div>
          ))}
          <span className="boot-cursor">█</span>
        </div>

        <div className="retro-boot-progress-wrap">
          <div
            className="retro-boot-progress"
            style={{ width: `${((bootStep + 1) / bootLogs.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default BootScreen;
