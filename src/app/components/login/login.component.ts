import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }


  login(form): void
  {
    this.as.login(form.value.email, form.value.password)
      .then()
      .catch(err => console.log(err));

    this.router.navigate(['/']);
  }



}
