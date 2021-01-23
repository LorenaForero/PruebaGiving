import { TestBed } from '@angular/core/testing';

import { ServContratosService } from './serv-contratos.service';

describe('ServContratosService', () => {
  let service: ServContratosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServContratosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
