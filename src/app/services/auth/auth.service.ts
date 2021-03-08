// Imports modules.
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

  constructor(private http: HttpClient) {}

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
}
