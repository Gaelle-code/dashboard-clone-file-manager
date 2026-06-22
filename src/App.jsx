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
            <Route
              path="videos"
              element={
                <PlaceholderPage
                  title="Videos"
                  description="The reference shell reserves this route for the file manager video folder."
                />
              }
            />
            <Route
              path="documents"
              element={
                <PlaceholderPage
                  title="Documents"
                  description="This screen keeps the same dashboard shell while the document folder stays out of scope."
                />
              }
            />
            <Route
              path="all-files"
              element={
                <PlaceholderPage
                  title="All Files"
                  description="A future folder aggregate view can sit here without changing the surrounding layout."
                />
              }
            />
            <Route
              path="trash"
              element={
                <PlaceholderPage
                  title="Trash"
                  description="The assignment marks delete and restore flows as out of scope for this pass."
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/file-manager/images" replace />} />
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
