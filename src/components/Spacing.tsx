import React from "react";

interface SpacingProps {
  size: number;
}

const Spacing: React.FC<SpacingProps> = ({ size }) => {
  const height = Math.min(size * 2, 16); // Limita la altura máxima a 16px

  return <div style={{ height: `${height}px` }} />;
};

export default Spacing;
