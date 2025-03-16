import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = signal(false); // Controla el estado del menú hamburguesa

  toggleMenu() {

    this.isMenuOpen.set(!this.isMenuOpen()); // Cambia el estado del menú
  }
  closeMenuV() {
    this.isMenuOpen.set(false); // Cierra el menú al hacer clic en una opción
  }
}
