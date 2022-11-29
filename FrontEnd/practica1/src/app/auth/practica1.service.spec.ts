import { TestBed } from '@angular/core/testing';

import { PRACTICA1Service } from './practica1.service';

describe('PRACTICA1Service', () => {
  let service: PRACTICA1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRACTICA1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
