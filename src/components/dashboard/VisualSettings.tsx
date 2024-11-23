import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, Upload, Check, AlertCircle } from 'lucide-react';
import imageCompression from 'browser-image-compression';

interface VisualConfig {
  mainLogo: string;
  homeHero: string;
  organizationHero: string;
  fleetHero: string;
  toolsHero: string;
  knowledgeHero: string;
  blogHero: string;
}

const visualsUpdatedEvent = new Event('visualsUpdated');

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const COMPRESSION_OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

const DEFAULT_VISUALS: VisualConfig = {
  mainLogo: '',
  homeHero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  organizationHero: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
  fleetHero: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
  toolsHero: 'https://images.unsplash.com/photo-1579226905180-636b76d96082',
  knowledgeHero: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679',
  blogHero: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
};

function VisualSettings() {
  const [visuals, setVisuals] = useState<VisualConfig>(() => {
    try {
      const savedVisuals = localStorage.getItem('himalia-visuals');
      return savedVisuals ? JSON.parse(savedVisuals) : DEFAULT_VISUALS;
    } catch (error) {
      console.error('Error loading visuals:', error);
      return DEFAULT_VISUALS;
    }
  });

  const [activeUpload, setActiveUpload] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadToImageService = async (file: File): Promise<string> => {
    // Simulate uploading to an image service
    // In production, you would upload to your image hosting service here
    // For now, we'll use a sample Unsplash image URL based on the file type
    return DEFAULT_VISUALS.homeHero;
  };

  const saveVisuals = (newVisuals: VisualConfig) => {
    try {
      localStorage.setItem('himalia-visuals', JSON.stringify(newVisuals));
      window.dispatchEvent(visualsUpdatedEvent);
      return true;
    } catch (error) {
      console.error('Error saving visuals:', error);
      setError('Erreur lors de la sauvegarde. Veuillez réessayer.');
      return false;
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[], field: keyof VisualConfig) => {
    if (acceptedFiles.length === 0) return;

    setActiveUpload(field);
    setError(null);
    
    const file = acceptedFiles[0];

    if (file.size > MAX_FILE_SIZE) {
      setError('L\'image est trop volumineuse. Taille maximum: 5MB');
      setActiveUpload(null);
      return;
    }

    try {
      const compressedFile = await imageCompression(file, COMPRESSION_OPTIONS);
      const imageUrl = await uploadToImageService(compressedFile);
      
      const newVisuals = {
        ...visuals,
        [field]: imageUrl
      };
      
      if (saveVisuals(newVisuals)) {
        setVisuals(newVisuals);
        setActiveUpload(null);
        setUploadSuccess(field);
        setTimeout(() => setUploadSuccess(null), 2000);
      } else {
        setActiveUpload(null);
      }
    } catch (err) {
      setError('Erreur lors du traitement de l\'image');
      setActiveUpload(null);
    }
  }, [visuals]);

  const visualFields = [
    { key: 'mainLogo' as const, label: 'Logo Principal' },
    { key: 'homeHero' as const, label: 'Bannière Accueil' },
    { key: 'organizationHero' as const, label: 'Bannière Organisation' },
    { key: 'fleetHero' as const, label: 'Bannière Flotte' },
    { key: 'toolsHero' as const, label: 'Bannière Outils' },
    { key: 'knowledgeHero' as const, label: 'Bannière Ressources' },
    { key: 'blogHero' as const, label: 'Bannière Blog' },
  ];

  const getDropzone = (field: keyof VisualConfig) => {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (files) => onDrop(files, field),
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.gif']
      },
      maxFiles: 1,
      maxSize: MAX_FILE_SIZE,
    });

    return (
      <div
        {...getRootProps()}
        className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 hover:border-red-500 transition-colors cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2">
          {visuals[field] ? (
            <div className="relative w-full h-32">
              <img
                src={visuals[field]}
                alt={`Preview ${field}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Upload className="h-8 w-8 text-white" />
              </div>
            </div>
          ) : (
            <>
              <Image className="h-8 w-8 text-gray-400" />
              <p className="text-sm text-gray-400">Glissez une image ou cliquez pour sélectionner</p>
              <p className="text-xs text-gray-500">Max: 5MB</p>
            </>
          )}
        </div>
        
        {activeUpload === field && (
          <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500" />
          </div>
        )}
        
        {uploadSuccess === field && (
          <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center rounded-lg">
            <Check className="h-8 w-8 text-green-500" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Configuration des Visuels</h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualFields.map((field) => (
              <div key={field.key} className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{field.label}</label>
                {getDropzone(field.key)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualSettings;