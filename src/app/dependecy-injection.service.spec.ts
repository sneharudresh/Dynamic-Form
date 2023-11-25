import { TestBed } from '@angular/core/testing';

import { DependecyInjectionService } from './dependecy-injection.service';

describe('DependecyInjectionService', () => {
  let service: DependecyInjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependecyInjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
