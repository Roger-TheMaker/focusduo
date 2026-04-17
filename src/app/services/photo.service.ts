import { Injectable, inject } from '@angular/core';
import { signal, computed } from '@angular/core';

export interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  uploadedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private photos = signal<Photo[]>([]);

  photos$ = computed(() => this.photos());

  /**
   * Get all photos
   */
  getPhotos() {
    return this.photos$();
  }

  /**
   * Get photos by category
   */
  getPhotosByCategory(category: string) {
    return computed(() => this.photos().filter((p) => p.category === category));
  }

  /**
   * Add a new photo (Firebase integration will be added here)
   */
  addPhoto(photo: Photo) {
    this.photos.update((photos) => [...photos, photo]);
  }

  /**
   * Remove a photo
   */
  removePhoto(id: string) {
    this.photos.update((photos) => photos.filter((p) => p.id !== id));
  }

  /**
   * Update a photo
   */
  updatePhoto(id: string, updates: Partial<Photo>) {
    this.photos.update((photos) => photos.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  }

  /**
   * Load sample photos (for demonstration)
   */
  loadSamplePhotos() {
    const samples: Photo[] = [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        thumbnail:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        title: 'Mountain Serenity',
        description: 'Breathtaking mountain landscape at sunset',
        category: 'landscapes',
        uploadedAt: new Date(),
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1495316734433-91489b640e91?w=1200&h=800&fit=crop',
        thumbnail:
          'https://images.unsplash.com/photo-1495316734433-91489b640e91?w=300&h=300&fit=crop',
        title: 'Ocean Waves',
        description: 'Powerful ocean waves crashing on the shore',
        category: 'landscapes',
        uploadedAt: new Date(),
      },
    ];

    this.photos.set(samples);
  }
}
