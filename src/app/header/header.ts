import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  name= 'Erman Ramichi';
  job= 'Software Developer';
  avatar='erman.jpeg'
  @Output() pageSelected = new EventEmitter<string>();

  selectPage(page: string) {
    this.pageSelected.emit(page);
  }

  get ImageUrl(){
    return `assets/images/${this.avatar}`;
  }

}


