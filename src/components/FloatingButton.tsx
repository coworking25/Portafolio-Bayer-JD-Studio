interface FloatingButtonProps {
  label: string;
  className?: string;
  href: string;
}

export const FloatingButton = ({ label, className, href }: FloatingButtonProps) => {
  return (
    <a href={href} className={`floating-button ${className || ''}`}>
      {label}
    </a>
  );
};
