import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div id="inicio" class="relative bg-orange-50 pt-20 pb-32 flex items-center min-h-[90vh] overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div class="absolute top-1/2 -left-24 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          
          <!-- Text Content -->
          <div class="lg:w-1/2 text-center lg:text-left" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              El Sabor Auténtico de la <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Tradición
              </span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Disfruta de nuestros exquisitos tamales y la más fina repostería. Hechos con ingredientes frescos, receta original y mucho amor.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#productos" class="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Ver Productos
              </a>
              <a href="#nosotros" class="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-md border border-orange-100 hover:bg-orange-50 hover:shadow-lg transition-all">
                Conócenos
              </a>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-orange-400 to-red-400 rounded-full blur-3xl opacity-20 transform scale-90"></div>
              <img src="https://images.unsplash.com/photo-1628105574360-1e5b128537bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Tamales y Repostería" 
                   class="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[500px] border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class HeroComponent {}
