import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as AOS from 'aos';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

// Services/Models
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    NavbarComponent, 
    HeroComponent, 
    ProductCardComponent, 
    CartComponent, 
    GalleryComponent, 
    AboutComponent, 
    ContactComponent, 
    WhatsappButtonComponent
  ],
  template: `
    <app-navbar></app-navbar>
    
    <main>
      <app-hero></app-hero>
      
      <!-- Products Section -->
      <section id="productos" class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Nuestros <span class="text-red-600">Productos</span></h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">Descubre nuestra selección de tamales tradicionales y repostería artesanal, hechos con amor para ti.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            @if (loading) {
              <div class="col-span-full flex justify-center py-20">
                <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
              </div>
            } @else if (error) {
              <div class="col-span-full text-center text-red-500 py-10 bg-red-50 rounded-2xl">
                <p class="font-bold text-xl mb-2">Error cargando productos</p>
                <p>{{ error }}</p>
                <button (click)="loadProducts()" class="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">Volver a intentar</button>
              </div>
            } @else {
              @for (product of products; track product.id; let i = $index) {
                <div [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100">
                  <app-product-card [product]="product"></app-product-card>
                </div>
              }
            }
          </div>
        </div>
      </section>

      <app-gallery></app-gallery>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>

    <!-- Global Components -->
    <app-cart></app-cart>
    <app-whatsapp-button></app-whatsapp-button>
    
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 border-t-4 border-orange-500">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <span class="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Tamales & Postres</span>
            <p class="text-gray-400 mt-2 text-sm">© {{ currentYear }} Cate y Emy. Todos los derechos reservados.</p>
          </div>
          <div class="flex gap-6">
            <a href="#inicio" class="text-gray-400 hover:text-white transition-colors">Inicio</a>
            <a href="#productos" class="text-gray-400 hover:text-white transition-colors">Productos</a>
            <a href="#contacto" class="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  productService = inject(ProductService);
  
  products: Product[] = [];
  loading = true;
  error = '';
  currentYear = new Date().getFullYear();

  ngOnInit() {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.error = '';
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
        // Refresh AOS after DOM update
        setTimeout(() => AOS.refresh(), 100);
      },
      error: (err) => {
        this.error = 'No se pudo contactar al servidor. Asegúrate de que el backend esté corriendo.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
