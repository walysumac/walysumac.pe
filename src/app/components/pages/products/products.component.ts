import { Component, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  name: string;
  path: string;
  image: string;
  description: string;
  gallery: { src: string; title: string }[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Signal<Product[]>;
  // Producto seleccionado (si es null, se muestra el grid de productos)
  selectedProduct = signal<Product | null>(null);
  // Imagen para zoom; si es null, no se muestra el modal de zoom
  zoomedImage = signal<string | null>(null);

  constructor(private router: Router) {
    this.products = signal([
      {
        name: 'Máquinas de Calcetines',
        path: 'maquinasdecalcetines',
        image: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp',
        description: 'Máquinas especializadas en la producción de calcetines de alta calidad.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Máquinas Varias',
        path: 'maquinasvarias',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Diferentes máquinas para procesos textiles y de acabado.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Calcetines / Medias',
        path: 'calcetinesmedias',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Producción y diseño de calcetines y medias en distintos formatos.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Calzado',
        path: 'calzado',
        image: 'assets/images/products/Calzado/Lonati-DC88-X-442x660.webp',
        description: 'Soluciones en calzado con tecnología avanzada.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Cintería',
        path: 'cinteria',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Equipos de cintería para tejidos especiales.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Circulares Gran Diámetro',
        path: 'circularesgrandiametro',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Máquinas circulares para telas de gran diámetro.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Estampación',
        path: 'estampacion',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Máquinas de estampación con alta definición.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Seamless',
        path: 'seamless',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Tecnología para prendas sin costuras.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Planchado / Cosido / Acabados',
        path: 'planchadocosidoacabados',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Equipos para terminaciones textiles de alta calidad.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Rectilíneas',
        path: 'rectilineas',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Máquinas para tejidos rectilíneos precisos.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Recambios / Servicios',
        path: 'recambioservicios',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Repuestos y servicios para mantener tu producción operativa.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Hilatura',
        path: 'hilatura',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Tecnología de hilatura para hilos de alta calidad.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Medical',
        path: 'medical',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Equipos para la producción de textiles médicos.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      },
      {
        name: 'Textiles Usados Catálogo General',
        path: 'textilesusadoscatalogogeneral',
        image: 'assets/images/products/prueba2.jpg',
        description: 'Catálogo de textiles reciclados y maquinaria usada en óptimas condiciones.',
        gallery: [
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO 842 SER.webp', title: 'LONATI BRAVO 842 SER' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI BRAVO.webp', title: 'LONATI BRAVO' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI DC88-E133HX SbyS.webp', title: 'LONATI DC88-E133HX SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615 D.webp', title: 'LONATI G615 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G615.webp', title: 'LONATI G615' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 D.webp', title: 'LONATI G626 D' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI G626 T.webp', title: 'LONATI G626 T' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GK616 DF3 SbyS.webp', title: 'LONATI GK616 DF3 SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL516DF SbyS.webp', title: 'LONATI GL516DF SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL615F SbyS.webp', title: 'LONATI GL615F SbyS' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616DF Sbys.webp', title: 'LONATI GL616DF Sbys' },
          { src: 'assets/images/products/maquinasdecalcetines/LONATI GL616F Sbys.webp', title: 'LONATI GL616F Sbys' },
        ]
      }
    ]);

    // Inicializamos el producto y zoom en null
    this.selectedProduct.set(null);
    this.zoomedImage.set(null);
  }

  // Muestra el detalle de un producto (oculta el grid)
  showProductDetail(product: Product): void {
    this.selectedProduct.set(product);
    this.zoomedImage.set(null);
  }

  // Vuelve al grid de productos
  goBack(): void {
    this.selectedProduct.set(null);
    this.zoomedImage.set(null);
  }

  // Abre el modal de zoom; se detiene la propagación para evitar click en contenedor
  openZoom(imageSrc: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.zoomedImage.set(imageSrc);
  }

  closeZoom(): void {
    console.log('Modal de zoom cerrado');
    this.zoomedImage.set(null);
  }


  // (Opcional) Navegar a una ruta de producto
  navigateToProduct(path: string): void {
    this.router.navigate(['/productos', path]);
  }
}
