/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuchungspositionService } from './buchungsposition.service';

describe('BuchungspositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuchungspositionService]
    });
  });

  it('should ...', inject([BuchungspositionService], (service: BuchungspositionService) => {
    expect(service).toBeTruthy();
  }));
});
