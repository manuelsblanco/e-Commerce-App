import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Array<any>;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(cs =>
    {
      this.shoppingCart = cs.map( x =>
      {
       return{
          id: x.payload.doc.id,
            ... // @ts-ignore
          x.payload.doc.data() as {}
        };
      });
      console.log(this.shoppingCart);
    });
  }

  // tslint:disable-next-line:typedef
  deleteCart(index)
  {
    return this.cart.deleteFromCart(this.shoppingCart[index].id);
  }

}
