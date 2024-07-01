import React, { useState } from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";

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
      {isOn ? (
        <img
          onClick={toggleSwitch}
          src={light}
          alt=""
          style={{ marginLeft: "10px" }}
        />
      ) : (
        <img
          onClick={toggleSwitch}
          src={dark}
          alt=""
          style={{ marginLeft: "10px" }}
        />
      )}
    </div>
  );
};

export default ToggleSwitch;
