import React, { useState } from "react";

interface ToggleSwitchProps {
  initialState?: boolean;
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialState = true,
  onChange,
}) => {
  const [isOn, setIsOn] = useState<boolean>(initialState);

  const toggleSwitch = (): void => {
    setIsOn(!isOn);
    onChange(isOn);
  };

  return (
    <div style={{ width: 50 }}>
      <svg onClick={toggleSwitch} width="60" height="20" viewBox="0 0 200 100">
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#7fecad", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9bf8f4", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <rect
          width="200"
          height="100"
          rx="50"
          ry="50"
          fill={isOn ? "#ccc" : "#333"}
        />
        <circle cx={isOn ? "150" : "50"} cy="50" r="40" fill="#fff" />

        <g style={{ opacity: isOn ? 1 : 0, transition: "opacity 0.3s" }}>
          <rect
            width="200"
            height="100"
            rx="50"
            ry="50"
            fill="url(#skyGradient)"
          />
          <circle cx="150" cy="50" r="35" fill="#ffa500" />
          <circle cx="40" cy="30" r="10" fill="#fff" opacity="0.8" />
          <circle cx="80" cy="20" r="8" fill="#fff" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default ToggleSwitch;
