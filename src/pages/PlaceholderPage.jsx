export function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-panel">
      <div className="placeholder-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="placeholder-grid">
        <div className="metric-card">
          <span>Layout</span>
          <strong>Shared dashboard shell</strong>
        </div>
        <div className="metric-card">
          <span>State model</span>
          <strong>Centralized store ready</strong>
        </div>
        <div className="metric-card">
          <span>Interaction scope</span>
          <strong>Static reference route</strong>
        </div>
      </div>
    </section>
  );
}
