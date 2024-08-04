import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryStateService {
  private repositoriesSource = new BehaviorSubject<any[]>([]);
  repositories$ = this.repositoriesSource.asObservable();

  updateRepositories(repositories: any[]): void {
    this.repositoriesSource.next(repositories);
  }
}
