import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private isLoginPage = false;
  private sharedIsLoginPage = new Subject<boolean>();

  constructor() {
    this.sharedIsLoginPage.next(this.isLoginPage);
  }

  getLoginPageState(): Observable<boolean> {
    return this.sharedIsLoginPage.asObservable();
  }

  toggleLoginPageState() {
    this.isLoginPage = !this.isLoginPage;
    this.sharedIsLoginPage.next(this.isLoginPage);
  }
}
