// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports interfaces.
import { Group } from './interfaces/group.interfaces';

// Import environment.
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private readonly url: string = `${ environment.url }/groups`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ groups: Group[] }> {
    return this.http.get<{ groups: Group[] }>(this.url);
  }
}
