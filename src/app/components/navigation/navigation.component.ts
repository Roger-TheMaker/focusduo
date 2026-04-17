import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <h1>Photo Gallery</h1>
        </div>

        <!-- Mobile menu toggle -->
        <button
          class="mobile-menu-btn"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Toggle navigation menu"
          (click)="toggleMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation menu -->
        <ul class="nav-menu" [class.active]="menuOpen()">
          @for (item of navItems; track item.route) {
            <li class="nav-item">
              <a
                [routerLink]="item.route"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.route === '' }"
                class="nav-link"
                (click)="menuOpen.set(false)"
              >
                {{ item.label }}
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1rem 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .navbar-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .navbar-brand h1 {
        color: white;
        font-size: 1.8rem;
        margin: 0;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      .brand-logo {
        height: 50px;
        width: auto;
        object-fit: contain;
        margin: 0;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 2rem;
      }

      .nav-item {
        position: relative;
      }

      .nav-link {
        color: white;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        transition: all 0.3s ease;
        padding: 0.5rem 0;
        position: relative;
        display: block;
      }

      .nav-link:hover {
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
      }

      .nav-link.active {
        color: #ffd700;
        font-weight: 700;
      }

      .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #ffd700;
      }

      .mobile-menu-btn {
        display: none;
        flex-direction: column;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        gap: 6px;
      }

      .mobile-menu-btn span {
        width: 25px;
        height: 3px;
        background: white;
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      .mobile-menu-btn[aria-expanded='true'] span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
      }

      .mobile-menu-btn[aria-expanded='true'] span:nth-child(2) {
        opacity: 0;
      }

      .mobile-menu-btn[aria-expanded='true'] span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }

      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: flex;
        }

        .nav-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: max-height 0.3s ease;
        }

        .nav-menu.active {
          max-height: 500px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .nav-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-item:last-child {
          border-bottom: none;
        }

        .nav-link {
          padding: 1rem;
          display: block;
        }

        .nav-link.active::after {
          display: none;
        }

        .nav-link.active {
          background: rgba(255, 215, 0, 0.1);
          border-left: 3px solid #ffd700;
        }

        .navbar-brand h1 {
          font-size: 1.4rem;
        }

        .navbar-container {
          padding: 0 1rem;
        }
      }
    `,
  ],
})
export class NavigationComponent {
  menuOpen = signal(false);

  protected navItems: NavItem[] = [
    { label: 'Home', route: 'home' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Services', route: 'services' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'Contact', route: 'contact' },
  ];

  toggleMenu() {
    this.menuOpen.update((value) => !value);
  }
}
