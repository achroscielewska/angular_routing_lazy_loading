import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginComponentTitle = 'Log in';
  loginComponentDescription = 'Lorem ipsum dolor sit amet';

  constructor() { }

  ngOnInit() {
  }

}
