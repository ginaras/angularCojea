import { TestBed } from '@angular/core/testing';

import { IntructorDataService } from './intructor-data.service';

describe('IntructorDataService', () => {
  let service: IntructorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntructorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
