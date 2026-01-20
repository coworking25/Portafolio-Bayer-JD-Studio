interface SectionTitleProps {
  title: string;
  subTitle: string;
}

export const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {title}
        <span>{subTitle}</span>
      </h2>
    </div>
  );
};
