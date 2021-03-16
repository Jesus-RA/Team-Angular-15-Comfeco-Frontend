// Imports modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { WorkshopGetRes, WorkshopListRes } from './interfaces/workshop.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {
  private readonly url: string = `${ environment.url }/workshops`;

  constructor(private http: HttpClient) {}

  get(workshopId: string): Observable<WorkshopGetRes> {
    return this.http.get<WorkshopGetRes>(`${ this.url }/${ workshopId }`);
  }

  list(): Observable<WorkshopListRes> {
    return this.http.get<WorkshopListRes>(this.url);
  }
}
