import {
  FiMinus,
  FiSquare,
  FiX,
  FiMaximize2,
  FiMinimize2,
} from "react-icons/fi";

function WindowButtons({
  onMinimize,
  onMaximize,
  onClose,
  isMinimized = false,
  isMaximized = false,
}) {
  return (
    <div className="window-buttons">
      <button
        type="button"
        aria-label={isMinimized ? "Restore" : "Minimize"}
        title={isMinimized ? "Restore Window" : "Minimize Window"}
        onClick={(e) => {
          e.stopPropagation();
          if (onMinimize) onMinimize();
        }}
      >
        <FiMinus />
      </button>

      <button
        type="button"
        aria-label={isMaximized ? "Restore Size" : "Maximize"}
        title={isMaximized ? "Restore Size" : "Maximize Window"}
        onClick={(e) => {
          e.stopPropagation();
          if (onMaximize) onMaximize();
        }}
      >
        {isMaximized ? <FiMinimize2 /> : <FiSquare />}
      </button>

      <button
        type="button"
        aria-label="Close"
        title="Close Window"
        onClick={(e) => {
          e.stopPropagation();
          if (onClose) onClose();
        }}
      >
        <FiX />
      </button>
    </div>
  );
}

export default WindowButtons;