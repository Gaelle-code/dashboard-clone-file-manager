import { FiImage, FiClock, FiGrid, FiShield } from 'react-icons/fi';
import { useImages } from '../context/dashboard-context';
import { formatRelativeTime } from '../utils/time';

export function OverviewPage() {
  const images = useImages();
  const recentImage = [...images].sort((left, right) => new Date(right.lastOpenedAt) - new Date(left.lastOpenedAt))[0];

  return (
    <section className="overview-panel">
      <div className="overview-copy">
        <span className="image-pill">File Manager</span>
        <h3>Welcome back, Gaelle</h3>
        <p>
          Here is a quick overview of your image folder. Click Images in the sidebar to browse and preview your files.
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
          <span>Total files</span>
          <strong>{images.length}</strong>
        </div>
      </div>

      <div className="placeholder-grid">
        <div className="metric-card">
          <FiShield />
          <span>Folder</span>
          <strong>Images</strong>
        </div>
        <div className="metric-card">
          <FiImage />
          <span>Status</span>
          <strong>Read only</strong>
        </div>
        <div className="metric-card">
          <FiClock />
          <span>Last opened</span>
          <strong>{recentImage ? formatRelativeTime(recentImage.lastOpenedAt) : 'No data'}</strong>
        </div>
      </div>
    </section>
  );
}
