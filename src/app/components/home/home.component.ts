import { Component, OnInit } from '@angular/core';
import { ProductsService } from '/Users/msb/WebstormProjects/e-Commerce-App/src/app/products.service';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Array<any> = [];

  add = -1;


  constructor(private ps: ProductsService,
              private cart: CartService,
              private as: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe( data => this.Products = data );
  }

  buy(amount)
  {
    const selectedProduct = this.Products[this.add];

    const data =
      {
        name: selectedProduct.Name,
        price: selectedProduct.Price,
        amount: +amount,
      };
    this.cart.addToCart(data).then( () => this.add = -1).catch(err => console.log(err));
  }

  // tslint:disable-next-line:typedef
  addToCart(index)
  {
    if(this.as.userId){this.add = +index}
    else {this.router.navigate(['/login']);}

    // console.log('added', this.ps.getAllProducts().subscribe(data => this.Products = data
    // ));
  }

}
