import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  cartTotal = signal<number>(0);

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product, quantity: number = 1) {
    this.cartItems.update(items => {
      const existing = items.find(item => item.product.id === product.id);
      if (existing) {
        existing.quantity += quantity;
        return [...items];
      }
      return [...items, { product, quantity }];
    });
    this.calculateTotal();
    this.saveCart();
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
    this.calculateTotal();
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartItems.update(items => {
      const existing = items.find(item => item.product.id === productId);
      if (existing) {
        existing.quantity = quantity;
      }
      return [...items];
    });
    this.calculateTotal();
    this.saveCart();
  }

  clearCart() {
    this.cartItems.set([]);
    this.calculateTotal();
    this.saveCart();
  }

  private calculateTotal() {
    const total = this.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    this.cartTotal.set(total);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  private loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cartItems.set(JSON.parse(saved));
      this.calculateTotal();
    }
  }
}
