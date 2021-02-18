import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = "https://team-angular-15-comfeco.herokuapp.com/api";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Servicio para recuperar la contraseña
   * @param data Correo electrónico del usuario
   */
  forgotPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/password/forgot`, data);
  }

}
