import { TestBed } from '@angular/core/testing';

import { CreationCompteService } from './creation-compte.service';

describe('CreationCompteService', () => {
  let service: CreationCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
