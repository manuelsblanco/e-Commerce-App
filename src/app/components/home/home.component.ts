import { Component, OnInit } from '@angular/core';
import {Product} from '../../Interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<Product> =
    [
      {Name: 'Banana', Price: 3, Dscrip: 'Cavendish', ProductPath: 'assets/pic/banana.jpg'},
      {Name: 'Kiwi', Price: 5, Dscrip: 'New Zealand Kiwi', ProductPath: 'assets/pic/kiwi.jfif'},
      {Name: 'Orange', Price: 4, Dscrip: 'Valencians', ProductPath: 'assets/pic/orange.jfif'},
      {Name: 'Strawberry', Price: 8, Dscrip: 'From our producers', ProductPath: 'assets/pic/strawberry.jpg'},
    ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index)
  {
    console.log("added", this.Products[index]);
  }

}
