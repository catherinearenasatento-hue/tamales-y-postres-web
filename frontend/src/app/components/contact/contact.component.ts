import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contacto" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          <!-- Contact Info -->
          <div class="md:w-5/12 bg-gradient-to-br from-red-600 to-orange-500 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 class="text-3xl font-bold mb-4">Ponte en contacto</h3>
              <p class="text-red-100 mb-8 italic">¿Tienes dudas o quieres un pedido especial? ¡Escríbenos!</p>
              
              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+57 313 876 0465</span>
                </div>
                
                <div class="flex items-center gap-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Colombia</span>
                </div>
              </div>
            </div>
            
            <div class="mt-12">
              <p class="text-sm text-red-100 mb-2">Síguenos en las redes:</p>
              <!-- Social icons placeholders -->
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">FB</div>
                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">IG</div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="md:w-7/12 p-12">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tu Nombre</label>
                <input type="text" formControlName="name" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-50 focus:bg-white" placeholder="Ej. Juan Pérez">
                @if(contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                  <span class="text-red-500 text-xs mt-1 block">El nombre es requerido</span>
                }
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tu Teléfono</label>
                <input type="tel" formControlName="phone" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-50 focus:bg-white" placeholder="Ej. 300 000 0000">
                @if(contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched) {
                  <span class="text-red-500 text-xs mt-1 block">El teléfono es requerido</span>
                }
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea formControlName="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-50 focus:bg-white resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                @if(contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                  <span class="text-red-500 text-xs mt-1 block">El mensaje es requerido</span>
                }
              </div>

              <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp group-hover:scale-110 transition-transform" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                </svg>
                Enviar por WhatsApp
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  fb = inject(FormBuilder);
  whatsappService = inject(WhatsappService);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, phone, message } = this.contactForm.value;
      Swal.fire({
        title: '¡Redirigiendo a WhatsApp!',
        text: 'Se abrirá tu aplicación de WhatsApp para enviar el mensaje.',
        icon: 'info',
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        this.whatsappService.sendContactMessage(name, phone, message);
        this.contactForm.reset();
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
