import { TestBed } from '@angular/core/testing';

import { DemandeSoldeService } from './demande-solde.service';

describe('DemandeSoldeService', () => {
  let service: DemandeSoldeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeSoldeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
