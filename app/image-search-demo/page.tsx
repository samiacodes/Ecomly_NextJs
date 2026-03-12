'use client';

import { useState } from 'react';
import ImageUploadModal from '../components/search/ImageUploadModal';
import { Camera, Upload, Link as LinkIcon } from 'lucide-react';

export default function ImageSearchDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Image Search Demo
          </h1>
          <p className="text-gray-600">
            Try searching for products using images in your Ecomly store
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Camera size={32} className="text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">
                Visual Search Feature
              </h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our AI-powered visual search allows customers to find products by uploading images. 
              Simply take a photo or upload an image, and our system will find similar products 
              in your store. This feature uses advanced computer vision to analyze colors, 
              patterns, shapes, and styles.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Upload size={20} className="text-blue-600" />
                  <h3 className="font-semibold text-blue-900">Upload Image</h3>
                </div>
                <p className="text-sm text-blue-700">
                  Drag & drop or click to browse for images from your device
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Camera size={20} className="text-green-600" />
                  <h3 className="font-semibold text-green-900">Take Photo</h3>
                </div>
                <p className="text-sm text-green-700">
                  Use your device camera to capture products in real-time
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <LinkIcon size={20} className="text-purple-600" />
                  <h3 className="font-semibold text-purple-900">Paste URL</h3>
                </div>
                <p className="text-sm text-purple-700">
                  Share an image link from anywhere on the internet
                </p>
              </div>
            </div>

            {/* Demo Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Camera size={24} />
              Try Image Search Now
            </button>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              How It Works
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Click the Camera Icon
                  </h4>
                  <p className="text-gray-600">
                    In the navbar, you'll see a camera icon. Click it to open the image search modal.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Upload Your Image
                  </h4>
                  <p className="text-gray-600">
                    Choose from three options: upload from device, take a photo, or paste a URL.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    View Similar Products
                  </h4>
                  <p className="text-gray-600">
                    Our system analyzes the image and shows you visually similar products from the store.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Info */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Technical Details
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Framework:</span>
                <span>Next.js 16.1.6 (App Router)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Language:</span>
                <span>TypeScript</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Styling:</span>
                <span>Tailwind CSS v4</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Image Upload:</span>
                <span>react-dropzone</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium">Current Mode:</span>
                <span className="text-yellow-600 font-semibold">Fake Data (Demo)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">Backend Ready:</span>
                <span className="text-green-600 font-semibold">Yes (API hooks included)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
