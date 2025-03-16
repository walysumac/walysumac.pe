import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/acerca-de-nosotros']); // Redirige a la página principal
    }, 2000); // Espera 3 segundos
  }
}
