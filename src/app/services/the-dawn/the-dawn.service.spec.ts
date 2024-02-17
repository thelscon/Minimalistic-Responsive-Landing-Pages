import { TestBed } from '@angular/core/testing';

import { TheDawnService } from './the-dawn.service';

describe('TheDownService', () => {
  let service: TheDawnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheDawnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
