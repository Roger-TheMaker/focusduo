import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <h1>Contact</h1>
      <p>Contact form will be displayed here.</p>
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
export class ContactComponent {}
