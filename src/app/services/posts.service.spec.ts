import { TestBed } from '@angular/core/testing';

import { postsService } from './posts.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: postsService = TestBed.get(postsService);
    expect(service).toBeTruthy();
  });
});
