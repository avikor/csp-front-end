/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SolutionsService } from './solutions.service';

describe('Service: Solutions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionsService]
    });
  });

  it('should ...', inject([SolutionsService], (service: SolutionsService) => {
    expect(service).toBeTruthy();
  }));
});
