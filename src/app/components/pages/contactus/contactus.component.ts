import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {
  // Variables del formulario
  razonsocial: string = '';
  direccion: string = '';
  pais: string = '';
  telefono: string = '';
  email: string = '';
  sector: string = '';
  consulta: string = '';

  /**
   * Maneja el envío del formulario
   */
  onSubmit(event: Event): void {
    event.preventDefault();

    // Muestra la alerta personalizada
    Swal.fire({
      title: '¡Gracias por enviar tu consulta!',
      text: 'Nos pondremos en contacto contigo a la brevedad.',
      icon: 'success',
      confirmButtonText: 'Cerrar',
    }).then(() => {
      // Limpia y refresca el formulario automáticamente al cerrar
      this.resetForm();
    });

    // Envía los datos a Google Forms
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: 'no-cors',
    })
      .then(() => console.log('Formulario enviado exitosamente.'))
      .catch((error) => console.error('Error al enviar el formulario:', error));
  }

  /**
   * Limpia los campos del formulario
   */
  resetForm(): void {
    this.razonsocial = '';
    this.direccion = '';
    this.pais = '';
    this.telefono = '';
    this.email = '';
    this.sector = '';
    this.consulta = '';
  }
}

