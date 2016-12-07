/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KontoService } from './konto.service';

describe('KontoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontoService]
    });
  });

  it('should ...', inject([KontoService], (service: KontoService) => {
    expect(service).toBeTruthy();
  }));
});
