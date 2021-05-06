import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private fauth: AngularFireAuth)
  {
    this.user = fauth.user;
  }

  // tslint:disable-next-line:typedef
  signUp(email: string, password: string)
  {
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }

  // tslint:disable-next-line:typedef
  login(email: string, password: string)
  {
    return this.fauth.signInWithEmailAndPassword(email, password);
  }


  // tslint:disable-next-line:typedef
  logout()
  {
    return   this.fauth.signOut();
  }

}
