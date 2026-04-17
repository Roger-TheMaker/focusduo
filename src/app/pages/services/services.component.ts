import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <h1>Services</h1>
      <p>My photography services will be listed here.</p>
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
export class ServicesComponent {}
