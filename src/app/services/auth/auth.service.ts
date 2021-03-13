// Imports modules.
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';
import { LocalStorage } from "src/app/helpers/LocalStorage";

interface IPayloadRegister {
  nickname: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url: string = `${ environment.url }/auth`;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private socialAuth: SocialAuthService,
    private storage: LocalStorage<any>
  ) {}

  login(email: string, password: string): Observable<object> {
    const path: string = `${ this.url }/login`;
    return this.http.post(path, { email, password });
  }

  register(data: IPayloadRegister): Observable<object> {
    const path: string = `${ this.url }/register`;
    return this.http.post(path, data);
  }

  forgotPassword(email: string): Observable<object> {
    const path: string = `${ this.url }/password/forgot`;
    return this.http.post(path, { email });
  }

  async signInGoogle(): Promise<Observable<object>> {
    const data = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    const path: string = `${ this.url }/google`;
    return this.http.post(path, { token: data.idToken });
  }

  async signInFacebook(): Promise<Observable<object>> {
    const res: SocialUser = await this.socialAuth.signIn(FacebookLoginProvider.PROVIDER_ID);
    const path: string = `${ this.url }/facebook`;
    return this.http.post(path, { token: res.authToken });
  }

  get currentUser(): Observable<object> {
    const user = this.storage.get(this.storage.TEAMANGULAR15_USER);
    const path: string = `${ environment.url }/users/me`;

    if (user) return of(user);

    // Send request to server.
    const res = this.http.get(path);
    res.subscribe(data => {
      this.storage.insert(this.storage.TEAMANGULAR15_USER, data);
    });
    return res;
  }

  changeEmail(email: string, password: string): Observable<object> {
    const path: string = `${ this.url }/requestEmailChange`;
    return this.http.post(path, { email, password });
  }

  signOut(): void {
    this.storage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
