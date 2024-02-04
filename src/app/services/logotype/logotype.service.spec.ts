import { TestBed } from '@angular/core/testing';

import { LogotypeService } from './logotype.service';

describe('LogotypeService', () => {
  let service: LogotypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogotypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
