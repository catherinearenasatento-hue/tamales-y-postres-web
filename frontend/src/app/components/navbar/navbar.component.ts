import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
            <span class="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Tamales & Postres
            </span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8 items-center">
            <a href="#inicio" class="text-gray-700 hover:text-orange-600 font-medium transition-colors">Inicio</a>
            <a href="#productos" class="text-gray-700 hover:text-orange-600 font-medium transition-colors">Productos</a>
            <a href="#galeria" class="text-gray-700 hover:text-orange-600 font-medium transition-colors">Galería</a>
            <a href="#nosotros" class="text-gray-700 hover:text-orange-600 font-medium transition-colors">Nosotros</a>
            <a href="#contacto" class="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contáctenos</a>
            
            <!-- Cart Icon -->
            <button class="relative p-2 text-gray-700 hover:text-orange-600 transition-colors" (click)="toggleCart()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              @if(cartService.cartItems().length > 0) {
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {{ cartService.cartItems().length }}
                </span>
              }
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center space-x-4">
             <!-- Cart Icon Mobile -->
             <button class="relative p-2 text-gray-700" (click)="toggleCart()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              @if(cartService.cartItems().length > 0) {
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">{{ cartService.cartItems().length }}</span>
              }
            </button>
            <button (click)="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 hover:text-orange-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if(!isMobileMenuOpen) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if(isMobileMenuOpen) {
        <div class="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" (click)="isMobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Inicio</a>
            <a href="#productos" (click)="isMobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Productos</a>
            <a href="#galeria" (click)="isMobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Galería</a>
            <a href="#nosotros" (click)="isMobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Nosotros</a>
            <a href="#contacto" (click)="isMobileMenuOpen = false" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md">Contáctenos</a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  cartService = inject(CartService);
  isMobileMenuOpen = false;

  toggleCart() {
    // We will handle cart rendering via a signal or subject in a real app, 
    // or emit an event to open the cart panel on the layout level.
    document.getElementById('cart-panel')?.classList.toggle('translate-x-full');
  }
}
