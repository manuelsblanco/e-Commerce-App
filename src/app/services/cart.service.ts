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
    return this.fs.collection('users/${this.as.userId}/cart').add(product);
  }

  // tslint:disable-next-line:typedef
  getCart()
  {

    return this.fs.collection('users/${this.as.userId}/cart').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  deleteFromCart(id)
  {
    return this.fs.doc('users/${this.as.userId}/cart/${id}').delete();
  }
}

