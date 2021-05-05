import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signUp(form)
  {
    console.log(form.value.email);
    console.log(form.value.password);

    this.as.signUp(form.value.email, form.value.password).
      then(data => console.log(data)).
      catch(err => console.log(err))
  }

}
