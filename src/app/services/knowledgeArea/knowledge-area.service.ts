// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Imports environments.
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeAreaService {
  private readonly url: string = `${ environment.url }/knowledgeAreas`;

  constructor(private http: HttpClient) {}
}
