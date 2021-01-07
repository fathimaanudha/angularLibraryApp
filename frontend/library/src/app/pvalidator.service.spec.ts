import { TestBed } from '@angular/core/testing';

import { PvalidatorService } from './pvalidator.service';

describe('PvalidatorService', () => {
  let service: PvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
