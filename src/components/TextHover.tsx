interface TextHoverProps {
  text: string;
  className?: string;
}

export const TextHover = ({ text, className }: TextHoverProps) => {
  return (
    <h1 className={`text-hover ${className || ''}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ '--i': index } as React.CSSProperties}
          data-char={char}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};
