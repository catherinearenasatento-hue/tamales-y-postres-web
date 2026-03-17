import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { WhatsappService } from '../../services/whatsapp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 group">
      <!-- Product Image -->
      <div class="relative h-64 overflow-hidden bg-gray-100 cursor-pointer" (click)="inquireProduct()">
        <img [src]="product.image" [alt]="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out">
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-orange-600 shadow-sm">
          {{ product.category }}
        </div>
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span class="text-white font-medium px-4 py-2 border-2 border-white rounded-full">Preguntar</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-gray-900 line-clamp-2" (click)="inquireProduct()">{{ product.name }}</h3>
        </div>
        
        <p class="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm">{{ product.description }}</p>
        
        <div class="mt-auto">
          <div class="text-2xl font-black text-red-600 mb-4">
            {{ product.price | currency:'COP':'symbol-narrow':'1.0-0' }}
          </div>

          <div class="flex flex-col gap-2">
            <button (click)="addToCart()" class="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Al Carrito
            </button>
            <button (click)="orderViaWhatsapp()" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Pedir Directo
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;
  cartService = inject(CartService);
  whatsappService = inject(WhatsappService);

  addToCart() {
    this.cartService.addToCart(this.product, 1);
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: 'Agregado al carrito',
      text: this.product.name,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: '#fff3cd',
      color: '#854d0e',
      iconColor: '#d97706'
    });
  }

  orderViaWhatsapp() {
    this.whatsappService.sendProductInquiry(this.product.name);
  }

  inquireProduct() {
    this.whatsappService.sendProductInquiry(this.product.name);
  }
}
