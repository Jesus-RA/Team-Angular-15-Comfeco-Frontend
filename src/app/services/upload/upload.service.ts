// Imports modules.
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly url: string = environment.url;

  constructor(private http: HttpClient) {}

  upload(route: string, formdata: FormData): Observable<object> {
    const path: string = `${ this.url }/${ route }`;
    return this.http.post(path, formdata);
  }
}
