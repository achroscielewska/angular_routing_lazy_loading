import { Component, OnInit } from '@angular/core';
import { LoginPageService } from 'src/app/shared/services/loginPage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginComponentTitle = 'Log in';
  loginComponentDescription = 'Lorem ipsum dolor sit amet';

  constructor( private loginPageService: LoginPageService ) { }

  ngOnInit() {
  }

  toggleLoginPage() {
    this.loginPageService.toggleLoginPageState();
  }

}
