import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="galeria" class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Nuestra <span class="text-orange-500">Galería</span></h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Un vistazo a nuestras delicias preparadas con los mejores ingredientes y la receta de la abuela.</p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          <div class="relative overflow-hidden rounded-3xl group row-span-2 shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tamal Preparación" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" (click)="openLightbox('https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <div class="relative overflow-hidden rounded-3xl group shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Postres" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" (click)="openLightbox('https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <div class="relative overflow-hidden rounded-3xl group shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cupcakes" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" (click)="openLightbox('https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <div class="relative overflow-hidden rounded-3xl group col-span-1 md:col-span-2 shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Torta" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" (click)="openLightbox('https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

        </div>
      </div>

      <!-- Lightbox Modal -->
      @if(lightboxOpen) {
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in" (click)="closeLightbox()">
          <button class="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-black/50 rounded-full p-2" (click)="closeLightbox()">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
          <img [src]="activeImage" class="max-w-[90%] max-h-[90vh] object-contain shadow-2xl rounded-lg animate-scale-up" (click)="$event.stopPropagation()">
        </div>
      }
    </section>
  `
})
export class GalleryComponent {
  lightboxOpen = false;
  activeImage = '';

  openLightbox(src: string) {
    this.activeImage = src;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
}
