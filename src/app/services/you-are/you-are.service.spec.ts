import { TestBed } from '@angular/core/testing';

import { YouAreService } from './you-are.service';

describe('YouAreService', () => {
  let service: YouAreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouAreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
