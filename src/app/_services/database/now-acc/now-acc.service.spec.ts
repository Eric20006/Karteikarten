import { TestBed } from '@angular/core/testing';

import { NowAccService } from './now-acc.service';

describe('NowAccService', () => {
  let service: NowAccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowAccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
