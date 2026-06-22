import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { AppFooter } from './AppFooter';
import { ImagePreviewModal } from './ImagePreviewModal';
import { useDashboard } from '../context/dashboard-context';
import { routeMeta } from '../data/navigation';

export function AppLayout() {
  const location = useLocation();
  const { selectedImage, closePreview } = useDashboard();
  const meta = routeMeta[location.pathname] ?? routeMeta['/file-manager'];

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content-shell">
        <Navbar title={meta.title} subtitle={meta.subtitle} />
        <main className="content-main">
          <Outlet />
        </main>
        <AppFooter />
      </div>
      <ImagePreviewModal image={selectedImage} onClose={closePreview} />
    </div>
  );
}
