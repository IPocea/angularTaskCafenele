import { TestBed } from '@angular/core/testing';

import { SortareAlfabeticaService } from './sortare-alfabetica.service';

describe('SortareAlfabeticaService', () => {
  let service: SortareAlfabeticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortareAlfabeticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
