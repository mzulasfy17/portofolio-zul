import { useState } from "react";
import WindowButtons from "./WindowButtons";
import { FiRefreshCw } from "react-icons/fi";

function Window({
  title,
  children,
  className = "",
  allowClose = true,
  allowMinimize = true,
  allowMaximize = true,
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleMinimize = () => {
    if (allowMinimize) setIsMinimized((prev) => !prev);
  };

  const handleMaximize = () => {
    if (allowMaximize) setIsMaximized((prev) => !prev);
  };

  const handleClose = () => {
    if (allowClose) setIsClosed(true);
  };

  const handleRestore = () => {
    setIsClosed(false);
    setIsMinimized(false);
  };

  if (isClosed) {
    return (
      <div className="retro-window-closed-placeholder">
        <span>[{title}] closed</span>
        <button type="button" onClick={handleRestore} className="restore-window-btn">
          <FiRefreshCw size={12} /> RESTORE
        </button>
      </div>
    );
  }

  return (
    <section
      className={`retro-window ${className} ${isMinimized ? "is-minimized" : ""} ${isMaximized ? "is-maximized" : ""}`}
    >
      <div className="window-titlebar" onDoubleClick={handleMaximize}>
        <span>{title}</span>

        <WindowButtons
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onClose={handleClose}
          isMinimized={isMinimized}
          isMaximized={isMaximized}
        />
      </div>

      {!isMinimized && (
        <div className="window-content">
          {children}
        </div>
      )}
    </section>
  );
}

export default Window;