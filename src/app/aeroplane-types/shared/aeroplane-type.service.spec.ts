import { TestBed, inject } from '@angular/core/testing';

import { AeroplaneTypeService } from './aeroplane-type.service';

describe('AeroplaneTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AeroplaneTypeService]
    });
  });

  it('should be created', inject([AeroplaneTypeService], (service: AeroplaneTypeService) => {
    expect(service).toBeTruthy();
  }));
});
