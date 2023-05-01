import { TestBed } from '@angular/core/testing';

import { HysService } from './hys.service';

describe('HysService', () => {
  let service: HysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
