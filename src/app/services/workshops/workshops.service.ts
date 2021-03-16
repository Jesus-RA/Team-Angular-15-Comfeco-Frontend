// Imports modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {
  private readonly url: string = `${ environment.url }/workshops`;

  constructor(private http: HttpClient) {}

  get(workshopId: string): Observable<object> {
    return this.http.get(`${ this.url }/${ workshopId }`);
  }

  list(): Observable<object> {
    return this.http.get(this.url);
  }
}
