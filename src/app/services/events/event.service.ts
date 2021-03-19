// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { Event } from './interfaces/events.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly url: string = `${ environment.url }/events`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ events: Event[] }> {
    return this.http.get<{ events: Event[] }>(this.url);
  }
}
