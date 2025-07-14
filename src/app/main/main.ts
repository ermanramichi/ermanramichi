import { Component, Input,} from '@angular/core';
import { Home } from "../home/home";
import { About } from "../about/about";
import { Webstore } from "../webstore/webstore";



@Component({
  selector: 'app-main',
  imports: [Home, About, Webstore],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  @Input() selectedPage: string = 'home';
}
