import { Component, OnInit } from '@angular/core';
import { ProductsService } from '/Users/msb/WebstormProjects/e-Commerce-App/src/app/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<any> = [];


  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe( data => this.Products = data );
  }

  addToCart(index)
  {
    console.log('added', this.ps.getAllProducts().subscribe(data => this.Products = data
    ));
  }

}
