// Imports modules.
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

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
    private socialAuth: SocialAuthService
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
}
