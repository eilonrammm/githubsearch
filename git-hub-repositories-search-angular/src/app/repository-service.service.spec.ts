import { TestBed } from '@angular/core/testing';

import { RepositoryServiceService } from './repository-service.service';

describe('RepositoryServiceService', () => {
  let service: RepositoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
