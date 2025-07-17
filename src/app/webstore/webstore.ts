import { Component } from '@angular/core';
import {Category} from "./categories/category";
import { Product, ProductData } from "./products/product";
import { ShoppingCart } from "./shoppinCart/shoppingCart";


@Component({
  selector: 'app-webstore',
  imports: [Category, Product, ShoppingCart],
  templateUrl: './webstore.html',
  styleUrl: './webstore.css'
})
export class Webstore {
  selectedCategory: string = 'c1';
  productSelected: ProductData = {
    pid: '',
    pname: '',
    pprice: 0,
    pavatar: '',
    cid: '',
    cname: ''
    // Add other required properties here with default values
  };
  
  onCategorySelected(categoryId: string): void {
    this.selectedCategory = categoryId;
  }
  onProductSelected(product: ProductData): void {
    this.productSelected = product;
  }
}
