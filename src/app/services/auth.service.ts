import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth) { }

  // tslint:disable-next-line:typedef
  signUp(email: string, password: string)
  {
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }
}
