import { Component } from '@angular/core';
import {Category} from "./categories/category";
import { Product } from "./products/product";


@Component({
  selector: 'app-webstore',
  imports: [Category, Product],
  templateUrl: './webstore.html',
  styleUrl: './webstore.css'
})
export class Webstore {
  selectedCategory: string = 'c1';
  onCategorySelected(categoryId: string): void {
    this.selectedCategory = categoryId;
  }
}
