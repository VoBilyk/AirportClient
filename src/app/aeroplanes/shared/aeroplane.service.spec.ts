import { TestBed, inject } from '@angular/core/testing';

import { AeroplaneService } from './aeroplane.service';

describe('AeroplaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AeroplaneService]
    });
  });

  it('should be created', inject([AeroplaneService], (service: AeroplaneService) => {
    expect(service).toBeTruthy();
  }));
});
