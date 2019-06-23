import { Component, OnInit } from '@angular/core';
import { LoginPageService } from './shared/services/loginPage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isLoginPageActive: boolean;
  pageTitle = 'PET CALENDAR';

  constructor(private loginPageSarvice: LoginPageService ) { }

  ngOnInit() {
    this.isLoginPageActive = this.loginPageSarvice.getLoginPageState();
  }

  goToLoginPate() {
    this.loginPageSarvice.toggleLoginPageState();
    this.isLoginPageActive = this.loginPageSarvice.getLoginPageState();
  }

}
