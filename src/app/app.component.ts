import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { IgxNavbarModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgFor, IgxNavbarModule, IgxButtonModule, IgxIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuOpen = false;

  navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/' },
    { label: 'Services', route: '/appointments' },
    { label: 'Calculators', route: '/calculators' },
    { label: 'Education', route: '/education' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
