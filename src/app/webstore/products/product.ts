import { Component, Input, Output, EventEmitter} from "@angular/core";
import products  from '../../../products.json';
 export type ProductData = {
  pid:string;
  pname:string;
  pprice:number;
  pavatar:string;
  cid:string;
  cname:string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.html',
    styleUrl: './product.css'
})
export class Product {
    products: ProductData[] = []; 
    @Input() selectedCategory: string = '';

    
    ngOnInit(): void {
        this.products = products.Products;
    }
    getImageUrl(pavatar: string): string {
        return `assets/images/${pavatar}`;
    }
    getFilteredProducts(): ProductData[] {
        return this.products.filter(product => product.cid === this.selectedCategory);
    }
    @Output() productSelected = new EventEmitter<ProductData>();
    selectProduct(product: ProductData) {
        this.productSelected.emit(product);
    }
}