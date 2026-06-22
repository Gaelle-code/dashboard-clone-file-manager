import { createContext, useContext, useState } from 'react';
import { mockImages } from '../data/mockImages';

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  const [images] = useState(() => mockImages);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const selectedImage = images.find((image) => image.id === selectedImageId) ?? null;

  const openPreview = (imageId) => {
    setSelectedImageId(imageId);
  };

  const closePreview = () => {
    setSelectedImageId(null);
  };

  return (
    <DashboardContext.Provider
      value={{
        images,
        selectedImage,
        openPreview,
        closePreview,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }

  return context;
}

export function useImages() {
  return useDashboard().images;
}
