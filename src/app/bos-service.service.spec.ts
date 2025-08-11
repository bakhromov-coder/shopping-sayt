import { TestBed } from '@angular/core/testing';

import { BosServiceService } from './bos-service.service';

describe('BosServiceService', () => {
  let service: BosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
