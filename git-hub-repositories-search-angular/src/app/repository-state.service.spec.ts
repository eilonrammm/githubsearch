import { TestBed } from '@angular/core/testing';

import { RepositoryStateService } from './repository-state.service';

describe('RepositoryStateService', () => {
  let service: RepositoryStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
