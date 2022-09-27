import { TestBed } from '@angular/core/testing';

import { KiService } from './ki.service';

describe('KiService', () => {
  let service: KiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
