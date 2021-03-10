// Imports modules.
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

// Imports environments.
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = `${ environment.url }/users`;

  constructor(private http: HttpClient) {}
}
