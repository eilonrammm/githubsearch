import { Component, Input, OnInit } from '@angular/core';
import { RepositoryStateService } from '../repository-state.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  @Input() repositories: any[] = [];

  constructor(private repositoryStateService: RepositoryStateService) {}

  ngOnInit(): void {
    this.repositoryStateService.repositories$.subscribe((data) => {
      this.repositories = data;
    });
  }
}
