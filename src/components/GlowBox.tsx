import { ReactNode } from 'react';

interface GlowBoxProps {
  icon: ReactNode;
  color: string;
  title: string;
}

export const GlowBox = ({ icon, color, title }: GlowBoxProps) => {
  return (
    <div
      className="glow-box"
      style={{ '--glow-color': color } as React.CSSProperties}
    >
      <div className="glow-box-icon">{icon}</div>
      <p>{title}</p>
    </div>
  );
};
