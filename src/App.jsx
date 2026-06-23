import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { DashboardProvider } from './context/dashboard-context';
import { ImagesPage } from './pages/ImagesPage';
import { OverviewPage } from './pages/OverviewPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import './App.css';

function App() {
  return (
    <DashboardProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Navigate to="/file-manager/images" replace />} />
          <Route path="/images" element={<Navigate to="/file-manager/images" replace />} />
          <Route path="/videos" element={<Navigate to="/file-manager/videos" replace />} />
          <Route path="/documents" element={<Navigate to="/file-manager/documents" replace />} />
          <Route path="/all-files" element={<Navigate to="/file-manager/all-files" replace />} />
          <Route path="/trash" element={<Navigate to="/file-manager/trash" replace />} />
          <Route path="/file-manager" element={<AppLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="images" element={<ImagesPage />} />
            <Route path="videos" element={<PlaceholderPage title="Videos" />} />
            <Route path="documents" element={<PlaceholderPage title="Documents" />} />
            <Route path="all-files" element={<PlaceholderPage title="All Files" />} />
            <Route path="trash" element={<PlaceholderPage title="Trash" />} />
          </Route>
          <Route path="*" element={<Navigate to="/file-manager/images" replace />} />
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
