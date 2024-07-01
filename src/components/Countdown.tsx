import React from "react";

interface RemainingTimeProps {
  time: number;
  format: (time: number) => string;
}

const RemainingTime: React.FC<RemainingTimeProps> = ({ time, format }) => {
  return <div className="remaining-time">{format(time)}</div>;
};

export default RemainingTime;
