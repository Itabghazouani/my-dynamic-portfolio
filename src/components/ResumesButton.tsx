'use client';

import { RESUMES } from '@/constants';
import { useState, useRef, useEffect } from 'react';

const ResumesButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowLanguages(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = async (file: string, fileName: string) => {
    setIsDownloading(true);
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setShowLanguages(false);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setShowLanguages(!showLanguages)}
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:border-white/90 transition-colors cursor-pointer bg-transparent z-10"
        disabled={isDownloading}
      >
        <span className="font-semibold">
          {isDownloading ? 'Downloading...' : 'Get my Resume ▾'}
        </span>
      </button>

      {showLanguages && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg z-20 min-w-[200px]"
        >
          {RESUMES.map((resume) => (
            <button
              key={resume.language}
              onClick={() => handleDownload(resume.file, resume.fileName)}
              className="w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <span className="text-lg">{resume.flag}</span>
              <span className="font-medium">{resume.language}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumesButton;
