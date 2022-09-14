import { TestBed } from '@angular/core/testing';

import { AppStylingService } from './app-styling.service';

describe('AppStylingService', () => {
  let service: AppStylingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStylingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
