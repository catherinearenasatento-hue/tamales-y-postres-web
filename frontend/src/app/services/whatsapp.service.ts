import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private phoneNumber = '573138760465';

  openWhatsapp(message: string) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  sendOrder(cartItems: any[], total: number) {
    let message = 'Hola, quiero hacer el siguiente pedido:\n\n';
    
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} ($${item.product.price} c/u)\n`;
    });
    
    message += `\nTotal: $${total}\n\nGracias.`;
    this.openWhatsapp(message);
  }

  sendProductInquiry(productName: string) {
    const message = `Hola, quiero pedir: ${productName}`;
    this.openWhatsapp(message);
  }

  sendContactMessage(name: string, phone: string, userMessage: string) {
    const message = `Hola, soy ${name}. Mi teléfono es ${phone}.\n\n${userMessage}`;
    this.openWhatsapp(message);
  }

  sendGeneralInquiry() {
    this.openWhatsapp('Hola, quiero información sobre los productos.');
  }
}
