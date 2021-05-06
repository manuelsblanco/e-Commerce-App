import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMsg = '';
  constructor(private as: AuthService,
              private user: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signUp(form)
  {
    console.log(form.value.name);
    console.log(form.value.address);
    this.as.signUp(form.value.email, form.value.password).
      then
      ( data =>
        {
          this.user.addNewUser(data.user.uid, form.value.name, form.value.address);
          this.errorMsg = '';
          this.router.navigate(['/']);
        }
      ).
      catch(err => console.log( this.errorMsg  = err));
  }

}
