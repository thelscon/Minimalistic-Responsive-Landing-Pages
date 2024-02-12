import { TestBed } from '@angular/core/testing';

import { FrashOrganicProduceService } from './frash-organic-produce.service';

describe('FrashOrganicProduceService', () => {
  let service: FrashOrganicProduceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrashOrganicProduceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
