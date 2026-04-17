import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <h1>Testimonials</h1>
      <p>Client testimonials will be displayed here.</p>
    </div>
  `,
  styles: [
    `
      .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 1rem;
        min-height: calc(100vh - 200px);
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
      }
    `,
  ],
})
export class TestimonialsComponent {}
