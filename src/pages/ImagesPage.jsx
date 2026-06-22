import { useState } from 'react';
import { FiPlus, FiSearch, FiImage } from 'react-icons/fi';
import { ImageCard } from '../components/ImageCard';
import { useDashboard, useImages } from '../context/dashboard-context';

export function ImagesPage() {
  const images = useImages();
  const { openPreview } = useDashboard();
  const [query, setQuery] = useState('');

  const filteredImages = images.filter((image) => image.name.toLowerCase().includes(query.toLowerCase()));
  const recentImages = [...images]
    .sort((left, right) => new Date(right.lastOpenedAt) - new Date(left.lastOpenedAt))
    .slice(0, 8);

  return (
    <div className="workspace">
      <div className="page-title">
        <div>
          <h3>Images</h3>
        </div>
        <div className="action-row">
          <label className="search-field">
            <FiSearch />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search image names"
            />
          </label>
          <button type="button" className="primary-button">
            <FiPlus />
            Add Image
          </button>
        </div>
      </div>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h4>Recently Viewed</h4>
          </div>
        </div>
        <div className="recent-row">
          {recentImages.map((image) => (
            <ImageCard key={image.id} image={image} compact onOpen={openPreview} />
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h4>All Images</h4>
            <p>
              Showing {filteredImages.length} of {images.length} files
            </p>
          </div>
          <div className="section-actions">
            <span className="image-pill">
              <FiImage />
              Read only gallery
            </span>
          </div>
        </div>
        {filteredImages.length ? (
          <div className="image-grid">
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} onOpen={openPreview} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-graphic">
              <FiImage size={28} />
            </div>
            <div>
              <h4>No images match this search</h4>
              <p>The gallery stays read-only, so filtering is the only live interaction on this screen.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
