import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore,
              private as: AuthService)
  {

  }

  // tslint:disable-next-line:typedef
  addToCart(product)
  {
    return this.fs.collection('users/' + this.as.userId.toString() + '/cart').add(product);
  }

  // tslint:disable-next-line:typedef
  getCart()
  {
    return this.fs.collection('users/' + this.as.userId.toString() + '/cart').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  deleteFromCart(id)
  {
    return this.fs.doc('users/' + this.as.userId.toString() + '/cart/' + id.toString()).delete();
  }

  // tslint:disable-next-line:typedef
  updateFromCart(id, amount)
  {
    return this.fs.doc('users/' + this.as.userId.toString() + '/cart/' + id.toString()).update({amount});
  }

}

