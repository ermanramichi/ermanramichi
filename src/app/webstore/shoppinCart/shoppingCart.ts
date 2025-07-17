import { Component, Input } from '@angular/core';
import { Product, ProductData } from '../products/product';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shoppingCart.html',
  styleUrl: './shoppingCart.css',
  imports: [],
  standalone: true,
})
export class ShoppingCart {
  cartItems: ProductData[] = [];
  totalAmount: number = 0;
  @Input() product?: ProductData;

  ngOnInit(): void {
    if (this.product) {
      this.addToCart(this.product);
    }
  }
  addToCart(product: ProductData): void {
    this.cartItems.push(product);
    this.totalAmount += product.pprice;
  }
}
