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

  constructor(private loginPageService: LoginPageService ) { }

  ngOnInit() {
    this.loginPageService.getLoginPageState().subscribe(data =>
      this.isLoginPageActive = data);
  }

  toggleLoginPage() {
    this.loginPageService.toggleLoginPageState();
  }

}
