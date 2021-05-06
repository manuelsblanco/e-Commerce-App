import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser = false;


  constructor(private as: AuthService) { }

  isOpen = false;

  toggleNavVar(): void
  {
    this.isOpen = !this.isOpen;
  }
  logout(): void
  {
      this.as.logout();
  }

  ngOnInit(): void {

    this.as.user.subscribe(user =>
    {
      if ( user )
      {
        this.isUser = true;
        this.as.userId = user.uid;
      }
      else
      {
        this.isUser = false;
        this.as.userId = '';
      }
    });
  }

}
