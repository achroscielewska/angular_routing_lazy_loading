import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private isLoginPage = false;

  constructor() { }

  getLoginPageState() {
    return this.isLoginPage;
  }

  toggleLoginPageState() {
    return this.isLoginPage = !this.isLoginPage;
  }
}
