// Imports modules.
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

// Imports helpers.
import { LocalStorage } from "src/app/helpers/LocalStorage";

// Imports environments.
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = `${ environment.url }/users`;

  constructor(
    private http: HttpClient,
    private storage: LocalStorage<any>
  ) {}

  update(id: string, data: any): Observable<object> {
    const path: string = `${ this.url }/${ id }`;
    return this.http.put(path, data);
  }

  get currentUser(): Observable<object> {
    const user = this.storage.get(this.storage.TEAMANGULAR15_USER);
    return user ? of(user) : this.http.get(`${ this.url }/${ user._id }`);
  }
}
