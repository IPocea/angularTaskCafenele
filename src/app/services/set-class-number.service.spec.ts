import { TestBed } from '@angular/core/testing';

import { SetClassNumberService } from './set-class-number.service';

describe('SetClassNumberService', () => {
  let service: SetClassNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetClassNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
