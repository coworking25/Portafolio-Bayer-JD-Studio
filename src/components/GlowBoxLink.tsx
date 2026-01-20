import { ReactNode } from 'react';

interface GlowBoxLinkProps {
  href: string;
  color: string;
  icon: ReactNode;
  'aria-label'?: string;
}

export const GlowBoxLink = ({ href, color, icon, 'aria-label': ariaLabel }: GlowBoxLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-box-link"
      style={{ '--glow-color': color } as React.CSSProperties}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
};
