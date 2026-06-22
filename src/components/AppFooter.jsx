import { FaHeart } from 'react-icons/fa';

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer-links" aria-label="Footer links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
      </div>
      <div className="app-footer-brand">
        <span>© Gaelle UI, Made with</span>
        <FaHeart aria-hidden="true" />
        <span>by</span>
        <span className="app-footer-brand-name">Gaelle Ga</span>
        <span>Design.</span>
      </div>
    </footer>
  );
}
