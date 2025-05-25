import "./LatestNewsSection.css"

interface LatestNewsSectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * LatestNewsSection displays a titled card for listing current news items.
 *
 * @param {object} props
 * @param {string} props.title - Section heading
 * @param {React.ReactNode} props.children - Content to display inside the section.
 */
export const LatestNewsSection = ({ title, children }: LatestNewsSectionProps) => {
  return (
    <section className="latestNewsSection">
      <h2 className="latestNewsSection__title">{title}</h2>
      <ul className="latestNewsSection__list">
        {children}
      </ul>
    </section>
  );
};
