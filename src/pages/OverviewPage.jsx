import { FiImage, FiClock, FiGrid, FiShield } from 'react-icons/fi';
import { useImages } from '../context/dashboard-context';
import { formatRelativeTime } from '../utils/time';

export function OverviewPage() {
  const images = useImages();
  const recentImage = [...images].sort((left, right) => new Date(right.lastOpenedAt) - new Date(left.lastOpenedAt))[0];

  return (
    <section className="overview-panel">
      <div className="overview-copy">
        <span className="image-pill">Assignment status</span>
        <h3>Welcome back, Gaelle</h3>
        <p>
          Here is a summary of your file manager activity. Your image folder is active and all files
          are read-only this session.
        </p>
      </div>

      <div className="overview-grid">
        <div className="metric-card">
          <FiImage />
          <span>Images in store</span>
          <strong>{images.length}</strong>
        </div>
        <div className="metric-card">
          <FiClock />
          <span>Most recent open</span>
          <strong>{recentImage ? formatRelativeTime(recentImage.lastOpenedAt) : 'No data'}</strong>
        </div>
        <div className="metric-card">
          <FiGrid />
          <span>Gallery state</span>
          <strong>Derived from one source</strong>
        </div>
      </div>

      <div className="placeholder-grid">
        <div className="metric-card">
          <FiShield />
          <span>Scope check</span>
          <strong>Read only</strong>
        </div>
        <div className="metric-card">
          <FiImage />
          <span>Preview mode</span>
          <strong>Lightbox only</strong>
        </div>
        <div className="metric-card">
          <FiClock />
          <span>Recent view</span>
          <strong>Sorted by last opened</strong>
        </div>
      </div>
    </section>
  );
}
