import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="nosotros" class="py-24 bg-orange-50 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <div class="lg:w-1/2 relative" data-aos="fade-right">
            <div class="absolute inset-0 bg-orange-400 rounded-[3rem] transform rotate-3 scale-105 opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Nuestra Cocina" class="relative z-10 rounded-[3rem] shadow-2xl w-full object-cover h-[500px]">
          </div>

          <div class="lg:w-1/2" data-aos="fade-left">
            <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Sobre Nosotros</span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Tradición y Sabor <br>en cada bocado</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              En Tamales & Postres "Cate y Emy", llevamos años deleitando paladares con nuestras recetas familiares. Todo comenzó en la cocina de la abuela, donde aprendimos el secreto de un buen tamal tolimense y el arte de la repostería artesanal.
            </p>
            
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="flex items-start gap-4">
                <div class="bg-red-100 p-3 rounded-2xl text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Calidad Premium</h4>
                  <p class="text-gray-500 text-sm mt-1">Ingredientes selectos de primera clase.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-orange-100 p-3 rounded-2xl text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg">Hecho a Diario</h4>
                  <p class="text-gray-500 text-sm mt-1">Frescura garantizada en cada producto.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
