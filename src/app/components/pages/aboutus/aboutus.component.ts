import { Component, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements AfterViewInit {
  @ViewChild('typingText', { static: false }) typingText!: ElementRef<HTMLSpanElement>;
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselItems', { static: false }) carouselItems!: ElementRef<HTMLDivElement>;

  // Texto y cursor para el efecto de máquina de escribir
  private text = 'Marcas líderes que confían en nosotros.';
  private typingSpeed = 100; // ms por letra
  cursorVisible = signal(true);
  private cursorBlinkingInterval: any;

  // Carrusel de videos
  videos = [
    { src: 'assets/videos/video1.mp4' },
    { src: 'assets/videos/video2.mp4' },
    { src: 'assets/videos/video3.mp4' },
  ];

  currentSlide = 0;    // Índice del slide actual
  slideWidth = 0;      // Ancho de cada slide
  isPaused = signal(false); // Signal para pausar o reproducir el video actual

  ngAfterViewInit(): void {
    // Efecto de máquina de escribir
    this.typeWriter(0);
    this.initCursorBlinking();

    // Calcular el ancho del contenedor para cada slide
    this.slideWidth = this.carouselContainer.nativeElement.offsetWidth;
    this.updateCarousel();
    this.playCurrentVideo();

    // Recalcular ancho al redimensionar
    window.addEventListener('resize', () => {
      this.slideWidth = this.carouselContainer.nativeElement.offsetWidth;
      this.updateCarousel();
    });
  }

  // --------------------
  // Máquina de escribir
  // --------------------
  private typeWriter(index: number): void {
    if (index < this.text.length) {
      this.typingText.nativeElement.textContent += this.text.charAt(index);
      setTimeout(() => this.typeWriter(index + 1), this.typingSpeed);
    } else {
      this.stopCursorBlinkingAfterDelay();
    }
  }

  private initCursorBlinking(): void {
    this.cursorBlinkingInterval = setInterval(() => {
      this.cursorVisible.set(!this.cursorVisible());
    }, 500);
  }

  private stopCursorBlinkingAfterDelay(): void {
    setTimeout(() => {
      clearInterval(this.cursorBlinkingInterval);
      this.cursorVisible.set(false);
    }, 1000);
  }

  // --------------------
  // Carrusel
  // --------------------
  nextSlide(): void {
    if (this.currentSlide < this.videos.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.updateCarousel();
    this.playCurrentVideo();
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.videos.length - 1;
    }
    this.updateCarousel();
    this.playCurrentVideo();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateCarousel();
    this.playCurrentVideo();
  }

  // Mover el contenedor interno horizontalmente
  public updateCarousel(): void {
    const offset = -(this.currentSlide * this.slideWidth);
    this.carouselItems.nativeElement.style.transform = `translateX(${offset}px)`;
  }

  // --------------------
  // Pausa/Reanudar video
  // --------------------
  togglePause(): void {
    this.isPaused.set(!this.isPaused());
    this.playCurrentVideo();
  }

  // Detener todos los videos excepto el actual, reproducir si no está en pausa
  private playCurrentVideo(): void {
    const videoEls = this.carouselItems.nativeElement.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
    videoEls.forEach((vid, i) => {
      if (i !== this.currentSlide) {
        vid.pause();
        vid.currentTime = 0; // opcional: reiniciar video
      }
    });
    const currentVid = videoEls[this.currentSlide];
    if (!this.isPaused()) {
      currentVid.play();
    } else {
      currentVid.pause();
    }
  }
}
