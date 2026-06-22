import { FiClock } from 'react-icons/fi';

export function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-panel">
      <div className="placeholder-copy">
        <FiClock size={40} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
