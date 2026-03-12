'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';
import ImageUploadModal from './ImageUploadModal';

export default function ImageSearchButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-2 text-gray-700 hover:text-yellow-600 transition-colors"
        aria-label="Search by image"
        title="Search by image"
      >
        <Camera size={22} />
      </button>

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
