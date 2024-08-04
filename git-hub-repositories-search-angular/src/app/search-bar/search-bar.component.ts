import { Component, Inject, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { RepositoryStateService } from '../repository-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  value: string = 'Enter Repository Name';
  constructor(
    private repositoryService: RepositoryService,
    private repositoryStateService: RepositoryStateService
  ) {}

  ngOnInit(): void {}

  getRepositories(): void {
    this.repositoryService.getRepositories(this.value).subscribe(
      (data: any) => {
        this.repositoryStateService.updateRepositories(data);
        console.log(data);
      },
      (error: any) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }

  onSearch(): void {
    this.getRepositories();
  }
}
