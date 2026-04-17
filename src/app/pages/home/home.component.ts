import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="hero-container">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop"
          alt="Beautiful mountain landscape - hero image"
          class="hero-image"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Welcome to My Photography</h1>
          <p>Capturing moments, creating memories</p>
          <button class="cta-button">Explore Portfolio</button>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="container">
        <h2>Featured Collections</h2>
        <p class="section-subtitle">Explore my latest work across different genres</p>

        <div class="collections-grid">
          <div class="collection-card">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=400&h=300&fit=crop"
                alt="Travel photography collection"
                loading="lazy"
              />
            </div>
            <h3>Landscapes</h3>
            <p>Breathtaking natural scenery</p>
          </div>

          <div class="collection-card">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=400&h=300&fit=crop"
                alt="Travel photography collection"
                loading="lazy"
              />
            </div>
            <h3>Portraits</h3>
            <p>Capturing authentic moments</p>
          </div>

          <div class="collection-card">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=400&h=300&fit=crop"
                alt="Travel photography collection"
                loading="lazy"
              />
            </div>
            <h3>Travel</h3>
            <p>Adventures around the world</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        width: 100%;
        height: 100vh;
        max-height: 700px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-container {
        width: 100%;
        height: 100%;
        position: relative;
      }

      .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
      }

      .hero-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
        z-index: 10;
        width: 90%;
        max-width: 600px;
        animation: fadeInUp 0.8s ease-out;
      }

      .hero-content h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }

      .hero-content p {
        font-size: 1.5rem;
        margin: 0 0 2rem 0;
        font-weight: 300;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      .cta-button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      }

      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
      }

      .cta-button:active {
        transform: translateY(0);
      }

      .featured-section {
        padding: 4rem 1rem;
        background: #f8f9fa;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .featured-section h2 {
        font-size: 2.5rem;
        text-align: center;
        margin: 0 0 0.5rem 0;
        color: #333;
      }

      .section-subtitle {
        text-align: center;
        font-size: 1.1rem;
        color: #666;
        margin: 0 0 3rem 0;
      }

      .collections-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;
      }

      .collection-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .collection-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .card-image {
        width: 100%;
        height: 250px;
        overflow: hidden;
      }

      .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .collection-card:hover .card-image img {
        transform: scale(1.05);
      }

      .collection-card h3 {
        font-size: 1.5rem;
        margin: 1.5rem 1rem 0.5rem 1rem;
        color: #333;
      }

      .collection-card p {
        margin: 0 1rem 1.5rem 1rem;
        color: #666;
        font-size: 0.95rem;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate(-50%, -40%);
        }
        to {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
      }

      @media (max-width: 768px) {
        .hero {
          height: 70vh;
          max-height: 500px;
        }

        .hero-content h1 {
          font-size: 2rem;
        }

        .hero-content p {
          font-size: 1rem;
        }

        .featured-section {
          padding: 2rem 1rem;
        }

        .featured-section h2 {
          font-size: 1.8rem;
        }

        .collections-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
      }

      @media (max-width: 480px) {
        .hero {
          height: 50vh;
          max-height: 400px;
        }

        .hero-content h1 {
          font-size: 1.5rem;
        }

        .hero-content p {
          font-size: 0.9rem;
        }

        .cta-button {
          padding: 0.75rem 2rem;
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class HomeComponent {}
