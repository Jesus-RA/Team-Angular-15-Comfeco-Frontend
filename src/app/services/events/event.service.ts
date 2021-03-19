// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Imports environments.
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly url: string = `${ environment.url }/events`;

  constructor(private http: HttpClient) {}
}
