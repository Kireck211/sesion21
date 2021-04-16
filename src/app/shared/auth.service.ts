import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn());

  login(user) {
    localStorage.setItem('user', user);
    this.isLoggedIn$.next(this.isLoggedIn());
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn$.next(this.isLoggedIn());
  }

  isLoggedIn() {
    const user = localStorage.getItem('user');
    return user ? true : false;
  }
}