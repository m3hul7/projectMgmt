import { TestBed } from '@angular/core/testing';

import { OverlayNewProjectService } from './overlay-new-project.service';

describe('OverlayNewProjectService', () => {
  let service: OverlayNewProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayNewProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
