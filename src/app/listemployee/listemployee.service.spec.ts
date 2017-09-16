import { TestBed, inject } from '@angular/core/testing';

import { ListemployeeService } from './listemployee.service';

describe('ListemployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListemployeeService]
    });
  });

  it('should be created', inject([ListemployeeService], (service: ListemployeeService) => {
    expect(service).toBeTruthy();
  }));
});
