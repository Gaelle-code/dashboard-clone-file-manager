import { formatCreatedOn, formatRelativeTime } from '../utils/time';

export function ImageCard({ image, compact = false, onOpen }) {
  return (
    <button
      type="button"
      className={`image-card ${compact ? 'image-card--compact' : ''}`}
      onClick={() => onOpen(image.id)}
      aria-label={`Open preview for ${image.name}`}
    >
      <div className="image-card-media">
        <img src={image.url} alt={image.alt} loading="lazy" />
      </div>
      <div className="image-card-body">
        <span className={`image-pill ${compact ? 'image-pill--compact' : ''}`}>{compact ? 'Recently opened' : image.format}</span>
        <h3>{image.name}</h3>
        <div className="image-meta">
          <span>Created {formatCreatedOn(image.createdAt)}</span>
          <span>{formatRelativeTime(image.lastOpenedAt)}</span>
        </div>
      </div>
    </button>
  );
}
