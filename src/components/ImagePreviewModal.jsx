import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { formatCreatedOn, formatRelativeTime } from '../utils/time';

export function ImagePreviewModal({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="modal-card" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${image.name} preview`}>
        <div className="modal-media">
          <img src={image.url} alt={image.alt} />
        </div>
        <div className="modal-copy">
          <div className="modal-head">
            <div>
              <span className="image-pill">{image.format} preview</span>
              <h3>{image.name}</h3>
              <p>{image.description}</p>
            </div>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close preview">
              <FiX />
            </button>
          </div>
          <div className="modal-specs">
            <div className="spec-card">
              <span>Created on</span>
              <strong>{formatCreatedOn(image.createdAt)}</strong>
            </div>
            <div className="spec-card">
              <span>Last opened</span>
              <strong>{formatRelativeTime(image.lastOpenedAt)}</strong>
            </div>
            <div className="spec-card">
              <span>File details</span>
              <strong>{image.size}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
