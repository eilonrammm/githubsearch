import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private apiUrl = 'https://localhost:7217/GitHubRepositories';

  constructor(private http: HttpClient) {}

  getRepositories(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?keyword=${keyword}`);
  }
}
