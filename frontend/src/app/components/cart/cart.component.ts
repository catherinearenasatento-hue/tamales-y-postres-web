import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Overlay background when open -->
    <div id="cart-overlay" class="fixed inset-0 bg-black/50 z-50 hidden transition-opacity backdrop-blur-sm" (click)="closeCart()"></div>
    
    <!-- Cart sliding panel -->
    <div id="cart-panel" class="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-2xl flex flex-col">
      <!-- Header -->
      <div class="px-6 py-4 flex justify-between items-center bg-gray-50 border-b border-gray-100">
        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Tu Pedido
        </h2>
        <button (click)="closeCart()" class="text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full p-1 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Items List -->
      <div class="flex-grow overflow-y-auto p-6 space-y-6">
        @if(cartService.cartItems().length === 0) {
          <div class="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p class="text-lg">El carrito está vacío</p>
            <button (click)="closeCart()" class="text-orange-500 hover:text-orange-600 font-medium underline">Comenzar a comprar</button>
          </div>
        } @else {
          @for(item of cartService.cartItems(); track item.product.id) {
            <div class="flex gap-4 border-b border-gray-100 pb-4 animate-fade-in">
              <img [src]="item.product.image" [alt]="item.product.name" class="w-20 h-20 object-cover rounded-xl shadow-sm border border-gray-100">
              <div class="flex-grow flex flex-col justify-between">
                <div class="flex justify-between items-start">
                  <h4 class="font-bold text-gray-800 leading-tight pr-4">{{ item.product.name }}</h4>
                  <button (click)="removeItem(item.product.id)" class="text-gray-400 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="text-orange-600 font-bold text-sm">
                  {{ item.product.price | currency:'COP':'symbol-narrow':'1.0-0' }}
                </div>
                <div class="flex items-center gap-3 mt-2">
                  <button (click)="decreaseQ(item.product.id, item.quantity)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <span>-</span>
                  </button>
                  <span class="font-bold w-6 text-center text-gray-700">{{ item.quantity }}</span>
                  <button (click)="increaseQ(item.product.id, item.quantity)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          }
        }
      </div>

      <!-- Footer -->
      @if(cartService.cartItems().length > 0) {
        <div class="p-6 bg-gray-50 border-t border-gray-100">
          <div class="flex justify-between items-center mb-6">
            <span class="font-medium text-gray-600 text-lg">Total del Pedido:</span>
            <span class="text-2xl font-black text-gray-900">{{ cartService.cartTotal() | currency:'COP':'symbol-narrow':'1.0-0' }}</span>
          </div>
          
          <button (click)="checkoutViaWhatsapp()" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp group-hover:scale-110 transition-transform" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
            </svg>
            Enviar Pedido por WhatsApp
          </button>
        </div>
      }
    </div>
  `
})
export class CartComponent {
  cartService = inject(CartService);
  whatsappService = inject(WhatsappService);

  closeCart() {
    document.getElementById('cart-panel')?.classList.add('translate-x-full');
    document.getElementById('cart-overlay')?.classList.add('hidden');
  }

  // A method in navbar component or elsewhere needs to handle showing overlay too.
  // By default, toggling translate-x-full is enough for panel, but overlay needs visibility.

  increaseQ(id: number, qt: number) {
    this.cartService.updateQuantity(id, qt + 1);
  }

  decreaseQ(id: number, qt: number) {
    if (qt > 1) {
      this.cartService.updateQuantity(id, qt - 1);
    } else {
      this.removeItem(id);
    }
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  checkoutViaWhatsapp() {
    this.whatsappService.sendOrder(this.cartService.cartItems(), this.cartService.cartTotal());
    this.cartService.clearCart();
    this.closeCart();
  }
}
