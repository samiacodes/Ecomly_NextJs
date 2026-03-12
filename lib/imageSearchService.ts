/**
 * Image Search API Service Layer
 * 
 * This file provides the interface for backend integration.
 * Currently uses fake data - replace simulateImageSearch with real API calls.
 */

import { FakeProduct, simulateImageSearch } from './imageSearchData';

export interface ImageSearchResults {
  detectedTags: string[];
  detectedCategory: string;
  detectedColors: string[];
  products: FakeProduct[];
}

export interface UploadedImage {
  dataUrl: string;
  file?: File;
  source: 'upload' | 'camera' | 'url';
}

/**
 * Current implementation using fake data
 * Replace this with actual API call when backend is ready
 */
export async function performImageSearch(
  imageData: string | File,
  source: 'upload' | 'camera' | 'url' = 'upload'
): Promise<ImageSearchResults> {
  // TODO: Replace with actual API call
  // Example:
  // const formData = new FormData();
  // formData.append('image', imageData instanceof File ? imageData : await fetch(imageData).then(r => r.blob()));
  // const response = await fetch('/api/image-search', { method: 'POST', body: formData });
  // return response.json();

  // Current fake implementation
  const dataUrl = typeof imageData === 'string' ? imageData : await fileToDataUrl(imageData);
  return await simulateImageSearch(dataUrl);
}

/**
 * Validate image file before upload
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Invalid file type. Please upload JPEG, PNG, GIF, or WebP images only.'
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File too large. Maximum size is 5MB.'
    };
  }

  return { valid: true };
}

/**
 * Convert File to Data URL
 */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Extract tags from image filename (simple heuristic for demo)
 * In production, this will come from AI analysis
 */
export function extractTagsFromFilename(filename: string): string[] {
  const name = filename.toLowerCase().replace(/\.[^/.]+$/, '');
  
  const tagMap: Record<string, string[]> = {
    'wallet': ['leather', 'wallet', 'accessory'],
    'shoe': ['footwear', 'casual', 'fashion'],
    'watch': ['timepiece', 'accessory', 'luxury'],
    'shirt': ['clothing', 'top', 'casual'],
    'bag': ['accessory', 'storage', 'fashion'],
  };

  for (const [keyword, tags] of Object.entries(tagMap)) {
    if (name.includes(keyword)) {
      return tags;
    }
  }

  return ['generic', 'product'];
}

/**
 * Get placeholder results for demo/testing
 */
export function getPlaceholderResults(): ImageSearchResults {
  return {
    detectedTags: ['demo', 'sample', 'product'],
    detectedCategory: 'General',
    detectedColors: ['mixed'],
    products: []
  };
}

/**
 * Future: Real API implementation template
 */
export class ImageSearchAPI {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  /**
   * Upload image and get search results
   */
  async searchByImage(image: File | string): Promise<ImageSearchResults> {
    const formData = new FormData();
    
    if (typeof image === 'string') {
      // Handle URL
      formData.append('image_url', image);
    } else {
      // Handle File
      formData.append('image', image);
    }

    const response = await fetch(`${this.baseUrl}/image-search`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Search by camera capture
   */
  async searchByCamera(stream: MediaStream): Promise<ImageSearchResults> {
    // Capture frame from video stream
    const video = document.createElement('video');
    video.srcObject = stream;
    
    return new Promise((resolve, reject) => {
      video.onloadedmetadata = () => {
        video.play();
        setTimeout(async () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(video, 0, 0);
          
          canvas.toBlob(async (blob) => {
            if (blob) {
              const file = new File([blob], 'capture.jpg', { type: 'image/jpeg' });
              try {
                const results = await this.searchByImage(file);
                resolve(results);
              } catch (error) {
                reject(error);
              }
            } else {
              reject(new Error('Failed to capture image'));
            }
          }, 'image/jpeg', 0.8);
        }, 500);
      };
      
      video.onerror = reject;
    });
  }

  /**
   * Batch search (multiple images)
   */
  async batchSearch(images: File[]): Promise<ImageSearchResults[]> {
    const promises = images.map(img => this.searchByImage(img));
    return Promise.all(promises);
  }
}

// Export singleton instance for convenience
export const imageSearchAPI = new ImageSearchAPI();
