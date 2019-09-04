import { TestBed } from '@angular/core/testing';

import { DreamService } from './dream.service';

describe('DreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DreamService = TestBed.get(DreamService);
    expect(service).toBeTruthy();
  });
});
