// Imports modules.
import { CanActivate, UrlTree, Router } from '@angular/router';
import { LocalStorage } from '../helpers/LocalStorage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorage: LocalStorage<{}>,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const data = localStorage.getItem(this.localStorage.TEAMANGULAR15_ACCESS_TOKEN);
    if (!data) {
      this.router.navigate(["/auth/login"]);
      return false;
    }
    return true;
  }
}
