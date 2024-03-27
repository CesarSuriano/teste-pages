import { TestBed } from '@angular/core/testing';

import { CreditAnalysisService } from './credit-analysis.service';

describe('CreditAnalysisService', () => {
  let service: CreditAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
