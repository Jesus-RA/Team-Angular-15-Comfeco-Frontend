import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginRequest, ILoginResponse } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: ILoginRequest): Observable<ILoginResponse> {
    const options = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    let body = `email=${request.email}&password=${request.password}`;
    return this.http.post<ILoginResponse>(`${environment.api}/auth/login`, body, options);
  }
}
