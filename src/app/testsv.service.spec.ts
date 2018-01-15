import { TestBed, inject } from '@angular/core/testing';

import { TestsvService } from './testsv.service';

describe('TestsvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestsvService]
    });
  });

  it('should be created', inject([TestsvService], (service: TestsvService) => {
    expect(service).toBeTruthy();
  }));
});
