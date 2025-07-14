import { Component, Output, EventEmitter } from "@angular/core";
import categories from '../../../categories.json';
type CategoryData = {
  cid: string;
  cname: string;
  cavatar: string;
}
  
@Component({
  selector: 'app-category',
  imports: [],
  standalone: true,
  templateUrl: './category.html',
  styleUrl: './category.css'
})

export class Category {
  categories:CategoryData[]=[];
  @Output() selectedCategory= new EventEmitter<string>();
  
  selectCategory(categoryId: string) {
    this.selectedCategory.emit(categoryId);
  }
  ngOnInit():void{
    this.categories = categories.Categories;
  }

  getImageUrl(avatar: string): string {
    return `assets/images/${avatar}`;
  }
}