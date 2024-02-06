import { TestBed } from '@angular/core/testing';

import { TheDownService } from './the-down.service';

describe('TheDownService', () => {
  let service: TheDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
